import Button from '@/components/commons/Button';
import { Link } from 'react-router-dom';
import {
  MdDoneOutline,
  MdEmail,
  MdOutlineChat,
  MdOutlinePersonOutline,
  MdOutlinePrivateConnectivity
} from 'react-icons/md';
import styled from 'styled-components';
import SignUpInput from './SignUpInput';
import SelectBox from '@/components/commons/SelectBox';
import { useState } from 'react';
import Input from '@/components/commons/Input';

export default function SignUpPage() {
  const [question, setQuestion] = useState('');
  const inputWidth = '374px';

  return (
    <StContainer>
      <img src="/image/logo.png" />
      <StSignUpForm>
        <StEmailNickNameWrapper>
          <label>아이디: </label>
          <div>
            <Input name="email" type="text" placeholder="이메일을 입력해주세요" width="280px" icon={MdEmail} required />
            <StDuplicateButton type="submit" $color="point" $size="lg" $round="md">
              아이디 중복체크
            </StDuplicateButton>
          </div>
        </StEmailNickNameWrapper>

        <SignUpInput
          labelName="비밀번호"
          inputType="password"
          placeholder="비밀번호를 입력해주세요"
          inputWidth={inputWidth}
          iconImage={MdOutlinePrivateConnectivity}
        />

        <SignUpInput
          labelName="비밀번호 확인"
          inputType="text"
          placeholder="비밀번호를 다시 입력해주세요"
          inputWidth={inputWidth}
          iconImage={MdOutlinePrivateConnectivity}
        />

        <StEmailNickNameWrapper>
          <label>닉네임: </label>
          <div>
            <Input
              name="nickName"
              type="text"
              placeholder="닉네임을 입력해주세요"
              width="280px"
              icon={MdEmail}
              required
            />
            <StDuplicateButton type="submit" $color="point" $size="lg" $round="md">
              닉네임 중복체크
            </StDuplicateButton>
          </div>
        </StEmailNickNameWrapper>

        <StSelectWrapper>
          <label>질문: </label>
          <SelectBox
            value={question}
            onChange={setQuestion} // 선택 시 input 값 변경
            options={[
              { id: 0, name: '내 보물 1호는?' },
              { id: 1, name: '내가 졸업한 초등학교는?' },
              { id: 2, name: '내가 졸업한 중학교는?' },
              { id: 3, name: '내가 졸업한 고등학교는?' },
              { id: 4, name: '우리집 가훈은?' },
              { id: 5, name: '우리집 반려동물 이름은?' }
            ]}
            size="sm"
          />
        </StSelectWrapper>

        <SignUpInput
          labelName="질문 응답"
          inputType="text"
          placeholder="질문에 대한 답을 입력해주세요"
          inputWidth={inputWidth}
          iconImage={MdOutlineChat}
        />

        <StSignUpButton type="submit" $color="point" $size="lg" $round="lg">
          <MdDoneOutline />
          회원가입
        </StSignUpButton>

        <Link to="/signIn" className="custom-link">
          이미 회원가입을 하셨나요?
        </Link>
      </StSignUpForm>
    </StContainer>
  );
}

const StSelectWrapper = styled.div`
  width: 394px;
  height: 64px;
  margin-bottom: 8px;
  & > label {
    display: block;
    margin-bottom: 4px;
  }
`;

const StContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: var(--height-sm);
  width: 700px;
  height: 880px;
  margin: 0 auto;
  border: 1px solid var(--color-point);
  > img {
    width: 300px;
    height: 200px;
  }
`;

const StSignUpForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  .custom-link {
    color: var(--color-point-dark);
  }
`;

const StSignUpButton = styled(Button)`
  text-align: center;
  line-height: normal;
  width: 394px;
  height: 80px;
  font-size: var(--font-size-lg);
  margin: var(--height-sm) 0px;
  & > svg {
    font-size: 32px;
    position: relative;
    left: -var(--font-size-lg);
  }
`;

const StDuplicateButton = styled(Button)`
  text-align: center;
  line-height: normal;
  width: 84px;
  height: 44px;
  font-size: var(--font-size-sm);
  margin-left: 10px;
  padding: 4px 8px;
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
