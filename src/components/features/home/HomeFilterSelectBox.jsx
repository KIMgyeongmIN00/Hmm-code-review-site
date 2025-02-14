import { useState } from 'react';
import styled from 'styled-components';
import SelectBox from '@/components/commons/SelectBox';

export default function HomeFilterSelectBox() {
  const [language, setLanguage] = useState('');

  return (
    <StFilterSelectBoxWrapper>
      <SelectBox
        value={language}
        onChange={(e) => setLanguage(e)}
        placeholder="언어 선택"
        options={[
          { id: 0, name: '전체' },
          { id: 1, name: 'C++' },
          { id: 2, name: 'JavaScript' },
          { id: 3, name: 'Python' },
          { id: 4, name: 'Kotlin' },
          { id: 5, name: 'Java' }
        ]}
        size="sm"
      />
    </StFilterSelectBoxWrapper>
  );
}

const StFilterSelectBoxWrapper = styled.div`
  width: 120px;
`;
