import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import MDEditor from '@uiw/react-md-editor';
import Input from '@commons/Input';
import Button from '@commons/Button';
import SelectBox from '@commons/SelectBox';
import PROGRAMMING_LANGUAGES from '@/data/programmingLanguage.constant';
import { insertPost } from '@api/post.api';

export default function WritePage() {
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  async function handleWriteFormSubmit(e) {
    e.preventDefault();

    if (title === '') return setErrorMessage('게시글의 제목을 작성해주세요.');
    if (content === '') return setErrorMessage('게시글의 내용을 작성해주세요.');
    if (programmingLanguage === '') return setErrorMessage('게시글의 내용의 언어 타입을 선택해주세요.');
    setErrorMessage('');

    try {
      await insertPost(title, content, programmingLanguage);
      return Swal.fire({
        title: 'Good job!',
        text: '게시글 작성에 성공했습니다.',
        icon: 'success'
      }).then(() => {
        navigate('/');
      });
    } catch (e) {
      return Swal.fire({
        title: 'Error!',
        text: '게시글 작성에 실패했습니다.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
  }

  return (
    <StContainer>
      <h1>새로운 글 작성</h1>
      <form onSubmit={handleWriteFormSubmit}>
        <label>언어 타입</label>
        <SelectBox
          size="sm"
          value={programmingLanguage}
          placeholder="언어 타입을 선택해주세요."
          options={PROGRAMMING_LANGUAGES}
          onChange={setProgrammingLanguage}
        />
        <label>제목</label>
        <Input placeholder="제목" onChange={(e) => setTitle(e.target.value)} value={title} />
        <label>본문</label>
        <MDEditor value={content} onChange={setContent} height="400px" data-color-mode="light" />
        {errorMessage && <p>{errorMessage}</p>}
        <Button>작성 완료</Button>
      </form>
    </StContainer>
  );
}

const StContainer = styled.main`
  > h1 {
    font-size: var(--font-size-lg);
  }
  > form {
    padding: 20px;
  }
  > form > label {
    display: block;
    margin-bottom: 8px;
  }
  > form > label:not(:last-of-type) + * {
    margin-bottom: 20px;
  }
  > form > div:has(> input) {
    border-width: 1px;
    box-sizing: border-box;
  }
  > form > button {
    float: right;
    margin-top: 10px;
  }
  > form > p {
    margin-top: 4px;
    font-size: var(--font-size-sm);
    color: var(--color-red);
  }
`;
