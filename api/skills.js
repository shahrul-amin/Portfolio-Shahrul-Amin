import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('category_order', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

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

  res.status(200).json(groupedSkills);
}
