import supabase from '@api/supabase.api';
import { useState, useEffect } from 'react';

export default function useGetQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const { data, error } = await supabase.from('password_questions').select();
      if (!error) setQuestions(data);
    }

    fetchQuestions();
  }, []);
  return { questions };
}
