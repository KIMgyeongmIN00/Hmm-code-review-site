import { MdKeyboard, MdOutlinePerson } from 'react-icons/md';
import styled from 'styled-components';

export default function PostInfomationContainer({ PostWriter }) {
  return (
    <>
      <StPostTitleWrapper>
        <h1>{PostWriter.Title}</h1>
      </StPostTitleWrapper>
      <StLanguageTypeWrapper>
        <MdKeyboard size={30} />
        <p>{PostWriter.CodeLanguage}</p>
      </StLanguageTypeWrapper>
      <StPostWriterWrapper>
        <StPersonIcon size={30} />
        <p>{PostWriter.NickName}</p>
      </StPostWriterWrapper>
      <StCodeBoxWrapper>
        <p>{PostWriter.Contents}</p>
      </StCodeBoxWrapper>
    </>
  );
}

const StPostTitleWrapper = styled.div`
  grid-area: 1 / 1 / 2 / 7;
  text-align: center;
  font-size: var(--font-size-lg);

  & h1 {
    background-color: var(--color-point-light);
    border-radius: var(--round-md) var(--round-md) 0px 0px;
    padding: 15px 15px 15px 15px;
  }
`;

const StLanguageTypeWrapper = styled.div`
  grid-area: 2 / 6 / 3 / 5;
  text-align: center;
`;

const StPostWriterWrapper = styled.div`
  grid-area: 2 / 6 / 3 / 7;
  text-align: center;
`;

const StPersonIcon = styled(MdOutlinePerson)`
  width: 25px;
  height: 25px;
  border: 1px solid var(--color-main-light);
  border-radius: var(--round-full);
`;

const StCodeBoxWrapper = styled.div`
  margin: 14px 20px 0px 20px;
  padding: 18px 18px 18px 18px;
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--round-xl);
  grid-area: 3 / 1 / 9 / 7;
  text-align: start;
  font-size: var(--font-size-md);
`;
