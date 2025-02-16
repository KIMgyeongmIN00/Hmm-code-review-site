import { useState } from 'react';
import styled from 'styled-components';
import MDEditor from '@uiw/react-md-editor';
import Input from '@/components/commons/Input';
import Button from '@/components/commons/Button';
import SelectBox from '@/components/commons/SelectBox';
import PROGRAMMING_LANGUAGES from '@/datas/programmingLanguage.constant';

export default function WritePage() {
  const [programmingLanguage, setProgrammingLanguage] = useState(PROGRAMMING_LANGUAGES[0].name);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleWriteFormSubmit(e) {
    e.preventDefault();
    // TODO: API 연결
  }

  return (
    <StContainer>
      <h1>새로운 글 작성</h1>
      <form onSubmit={handleWriteFormSubmit}>
        <label>언어 타입</label>
        <SelectBox
          size="sm"
          value={programmingLanguage}
          options={PROGRAMMING_LANGUAGES}
          onChange={setProgrammingLanguage}
        />
        <label>제목</label>
        <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <label>본문</label>
        <MDEditor value={content} onChange={setContent} height="400px" />
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
  form > div:has(> input) {
    border-width: 1px;
    box-sizing: border-box;
  }
  form > button {
    float: right;
    margin-top: 10px;
  }
`;
