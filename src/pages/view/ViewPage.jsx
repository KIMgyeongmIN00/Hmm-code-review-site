import styled from 'styled-components';
import PostAreaContainer from '@features/view-page/PostAreaContainer';
import CommentAreaContainer from '@features/view-page/CommentAreaContainer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from '@/libs/api/supabase.api';

export default function ViewPage() {
  // const postProps = {
  //   // 페이지 본문의 동적 변환 값을 props를 통해 임시적으로 표현하기 위한 객체
  //   // 추후 이 부분은 supabase의 db로 대체될 예정
  //   IsAuth: true,
  //   Title: '제목',
  //   CodeLanguage: 'Language',
  //   NickName: '글 작성자',
  //   Contents: '마크다운 **지원** <span style="color:red" >코드박스</span>입니다.',
  //   Comments: '15M',
  //   Likes: 0
  // };

  // const commentProps = [
  //   {
  //     // 페이지 댓글의 동적 변환 값을 props를 통해 임시적으로 표현하기 위한 객체
  //     // 추후 이 부분은 supabase의 db로 대체될 예정
  //     Id: 1,
  //     IsAuth: true,
  //     Nickname: '작성자 본인',
  //     Contents: '1번 댓글입니다.',
  //     Likes: 1111
  //   },
  //   {
  //     Id: 2,
  //     IsAuth: false,
  //     Nickname: '너무길다길어이름',
  //     Contents: '2번 댓글입니다.',
  //     Likes: 1111
  //   },
  //   {
  //     Id: 3,
  //     IsAuth: true,
  //     Nickname: '작성자 본인',
  //     Contents: '3번 댓글입니다.',
  //     Likes: 1111
  //   },
  //   {
  //     Id: 4,
  //     IsAuth: true,
  //     Nickname: '작성자 본인',
  //     Contents: '4번 댓글입니다.',
  //     Likes: 1111
  //   }
  // ];

  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase.from('posts').select('*').eq('id', id).single(); // 게시글 가져오기
      console.log(data);

      if (error) {
        console.error('Error fetching post:', error);
        return;
      }

      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>로딩 중...</p>;

  return (
    <StViewPageContainer>
      <PostAreaContainer post={post} />
      {/* URL의 id값이 있는 DB의 posts 테이블의 row를 props로 내림 */}
      {/* <CommentAreaContainer commentProps={commentProps} /> */}
      {/* 페이지 댓글 상자에 DB에 저장되어 있는 값에 따라 변화하는 값을 임의적으로 표현하기 위해 내린 props */}
    </StViewPageContainer>
  );
}

const StViewPageContainer = styled.main`
  /* box-shadow: 0px 0px 12px var(--color-border); */
  border: 1px solid var(--color-border);
  border-radius: var(--round-md);
  background-color: var(--color-white);
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: 18px;
  max-width: 1200px;
  font-size: var(--font-size-md);
`;
