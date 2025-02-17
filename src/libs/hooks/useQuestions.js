import supabase from '@/libs/api/supabase.api';
import { useState, useEffect } from 'react';

export default function useQuestions() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      const { data, error } = await supabase.from('password_questions').select('*');
      setQuestions(data);
      if (error) {
        console.error('Error fetching questions:', error);
        return [];
      }
      return data;
    }
    fetchQuestions();
  }, []);
  return { questions };
}
