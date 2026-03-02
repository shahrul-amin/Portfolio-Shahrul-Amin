import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  try {
    const { error } = await supabase
      .from('keep_alive')
      .select('id')
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Keep-alive failed:', error);
      return res.status(500).json({
        success: false
      });
    }

    return res.status(200).json({
      success: true
    });

  } catch (error) {
    console.error('Keep-alive error:', error);
    return res.status(500).json({
      success: false
    });
  }
}
