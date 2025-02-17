import styled from 'styled-components';
import Button from '@/components/commons/Button';
import { Link } from 'react-router-dom';
import Input from '@/components/commons/Input';
import SelectBox from '@/components/commons/SelectBox';
import SignUpInput from './SignUpInput';
import {
  MdDoneOutline,
  MdEmail,
  MdOutlineChat,
  MdOutlinePersonOutline,
  MdOutlinePrivateConnectivity
} from 'react-icons/md';
import { useState } from 'react';
import useGetQuestions from '@/libs/hooks/useGetQuestions';
import useSignUpForm from '@/libs/hooks/useSignUpForm';

export default function SignUpForm() {
  const { signUpFormData, errorMessage, isDuplicateChecked, signUpSubmitHandler, signUpChangeHandler, checkDuplicate } =
    useSignUpForm();
  const [question, setQuestion] = useState();
  const { questions } = useGetQuestions();
  const formattedQuestions = questions.map((question) => ({
    id: question.id,
    name: question.question
  }));

  function questionChangeHandler(questionText) {
    const selected = questions.find((q) => q.question === questionText);
    signUpFormData.question = selected.id;
    setQuestion(selected.question);
  }
  return (
    <StSignUpForm onSubmit={signUpSubmitHandler}>
      {/* 이메일 입력 */}
      <StEmailNickNameWrapper>
        <label>아이디: </label>
        <div>
          <Input
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            width="280px"
            icon={MdEmail}
            value={signUpFormData.email}
            onChange={signUpChangeHandler}
          />
          <StDuplicateButton type="button" onClick={() => checkDuplicate('email')}>
            중복체크
          </StDuplicateButton>
        </div>
        {errorMessage.email && <StMessage $isValid={isDuplicateChecked.email}>{errorMessage.email}</StMessage>}
      </StEmailNickNameWrapper>

      {/* 비밀번호 입력 */}
      <div>
        <SignUpInput
          labelName="비밀번호"
          name="password"
          inputType="password"
          placeholder="비밀번호를 입력해주세요"
          $iconImage={MdOutlinePrivateConnectivity}
          onChange={signUpChangeHandler}
        />
        {errorMessage.password && <StMessage>{errorMessage.password}</StMessage>}
      </div>

      {/* 비밀번호 확인 */}
      <div>
        <SignUpInput
          labelName="비밀번호 확인"
          name="confirmPassword"
          inputType="password"
          placeholder="비밀번호를 재입력해주세요"
          value={signUpFormData.confirmPassword}
          $iconImage={MdOutlinePrivateConnectivity}
          onChange={signUpChangeHandler}
        />
        {errorMessage.confirmPassword && <StMessage>{errorMessage.confirmPassword}</StMessage>}
      </div>

      {/* 닉네임 입력 */}
      <StEmailNickNameWrapper>
        <label>닉네임: </label>
        <div>
          <Input
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            width="280px"
            icon={MdOutlinePersonOutline}
            value={signUpFormData.nickname}
            onChange={signUpChangeHandler}
          />
          <StDuplicateButton type="button" onClick={() => checkDuplicate('nickname')}>
            중복체크
          </StDuplicateButton>
        </div>
        {errorMessage.nickname && <StMessage $isValid={isDuplicateChecked.nickname}>{errorMessage.nickname}</StMessage>}
      </StEmailNickNameWrapper>

      {/* 질문 선택 */}
      <StSelectWrapper>
        <label>질문: </label>
        <SelectBox
          options={formattedQuestions}
          size="sm"
          value={question}
          onChange={(e) => {
            questionChangeHandler(e);
          }}
        />
      </StSelectWrapper>

      {/* 질문 응답 */}
      <div>
        <SignUpInput
          labelName="질문 대답"
          name="answer"
          inputType="text"
          placeholder="질문에 대한 답을 입력해주세요"
          value={signUpFormData.answer}
          $iconImage={MdOutlineChat}
          onChange={signUpChangeHandler}
          maxLength="12"
        />
        {errorMessage.answer && <StMessage>{errorMessage.answer}</StMessage>}
      </div>
      {/* 회원가입 버튼 */}
      <StSignUpButton type="submit">
        <MdDoneOutline /> 회원가입
      </StSignUpButton>
      <Link to="/sign-in">이미 회원가입을 하셨나요?</Link>
    </StSignUpForm>
  );
}

const StSignUpForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  > a {
    color: var(--color-point-dark);
  }
  > div {
    margin-bottom: 8px;
  }
`;
const StSelectWrapper = styled.div`
  width: 392px;
  height: 64px;
  margin-bottom: 8px;
  & > label {
    display: block;
    margin-bottom: 4px;
  }
`;
const StEmailNickNameWrapper = styled.div`
  margin-bottom: 8px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  > label {
    display: block;
    margin-bottom: 4px;
  }
`;

const StSignUpButton = styled(Button).attrs({ $color: 'point', $size: 'lg', $round: 'lg' })`
  text-align: center;
  line-height: normal;
  width: 392px;
  height: 80px;
  font-size: var(--font-size-lg);
  margin: var(--height-sm) 0px;
  & > svg {
    font-size: 32px;
    position: relative;
    left: -var(--font-size-lg);
  }
`;
const StDuplicateButton = styled(Button).attrs({ $color: 'point', $size: 'lg', $round: 'md' })`
  text-align: center;
  line-height: normal;
  width: 84px;
  height: 44px;
  font-size: var(--font-size-sm);
  margin-left: 10px;
  padding: 4px 8px;
`;
const StMessage = styled.p`
  color: ${(props) => (props.$isValid ? 'green' : 'red')};
  font-size: var(--font-size-sm);
  margin-top: 4px;
`;
