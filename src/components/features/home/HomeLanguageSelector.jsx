import { useState } from 'react';
import styled from 'styled-components';
import SelectBox from '@commons/SelectBox';
import PROGRAMMING_LANGUAGES from '@/data/programmingLanguage.constant';

export default function HomeLanguageSelector({ language, setLanguage }) {
  return (
    <StLanguageSelectorWrapper>
      <SelectBox
        value={language}
        onChange={(e) => setLanguage(e)}
        placeholder="언어 선택"
        options={PROGRAMMING_LANGUAGES}
        size="sm"
      />
    </StLanguageSelectorWrapper>
  );
}

const StLanguageSelectorWrapper = styled.div`
  width: 120px;
`;
