import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_HMM_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_HMM_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

//Post의 좋아요 정보 불러오기
export async function getLikes(postId) {
  const { data, error } = await supabase.from('post_likes').select().eq('post_id', postId);
  if (error) {
    throw error;
  }
  return data;
}
//Post의 댓글 정보 불러오기
export async function getComments(postId) {
  const { data, error } = await supabase.from('comments').select().eq('post_id', postId);
  if (error) {
    throw error;
  }
  return data;
}
//Post의 작성자 닉네임 불러오기
export async function getAuthorName(authorId) {
  const { data, error } = await supabase.from('users').select('nickname').eq('id', authorId);
  if (error) {
    throw error;
  }
  return data[0];
}

export default supabase;
