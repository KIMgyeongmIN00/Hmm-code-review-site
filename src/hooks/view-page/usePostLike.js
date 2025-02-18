import { useState, useEffect } from 'react';
import supabase from '@/libs/api/supabase.api';

export function usePostLike(postId, authId) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    async function fetchLikeStatus() {
      const { data } = await supabase.from('post_likes').select().eq('user_id', authId).eq('post_id', postId);
      setIsLiked(data.length > 0);
    }
    async function fetchLikeCounts() {
      const { data } = await supabase.from('post_likes').select().eq('post_id', postId);
      setLikeCount(data?.length || 0);
    }
    fetchLikeCounts();
    fetchLikeStatus();
  }, [authId, postId]);

  const toggleLike = async () => {
    if (isLiked) {
      const { error } = await supabase.from('post_likes').delete().eq('user_id', authId).eq('post_id', postId);
      if (error) console.log(error);
      setLikeCount(likeCount - 1);
    } else {
      const { error } = await supabase.from('post_likes').insert([{ user_id: authId, post_id: postId }]);
      if (error) console.log(error);
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return { isLiked, likeCount, toggleLike };
}