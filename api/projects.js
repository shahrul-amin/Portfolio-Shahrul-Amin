import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const transformedProjects = data.map(project => ({
    imgSrc: project.img_src,
    title: project.title,
    tags: project.tags,
    projectLink: project.project_link
  }));

  res.status(200).json(transformedProjects);
}
