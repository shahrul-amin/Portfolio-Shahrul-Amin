import { createClient } from '@supabase/supabase-js';

class SupabaseService {
  constructor() {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }
    
    this.client = createClient(supabaseUrl, supabaseKey);
  }

  async getProjects() {
    const { data, error } = await this.client
      .from('projects')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    return data;
  }

  async getSkills() {
    const { data, error } = await this.client
      .from('skills')
      .select('*')
      .order('category_order', { ascending: true });
    
    if (error) throw error;
    
    const groupedSkills = {};
    data.forEach(skill => {
      if (!groupedSkills[skill.category]) {
        groupedSkills[skill.category] = [];
      }
      groupedSkills[skill.category].push({
        imgSrc: skill.img_src,
        label: skill.label,
        desc: skill.description
      });
    });
    
    return groupedSkills;
  }
}

export default new SupabaseService();
