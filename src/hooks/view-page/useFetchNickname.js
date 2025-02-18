import { useEffect, useState } from 'react';
import { getAuthorName } from '@/libs/api/supabase.api';

export function useFetchNickname(userId) {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    async function fetchNickname() {
      try {
        const nicknameData = await getAuthorName(userId);
        setNickname(nicknameData?.nickname || '작성자 불명');
      } catch (error) {
        throw error;
      }
    }

    if (userId) {
      fetchNickname();
    }
  }, [userId]);

  return nickname;
}