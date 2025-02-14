import { useState } from 'react';
import styled from 'styled-components';

const MOCK = [
	{
		id: 1,
		name: 'Javascript',
	},
	{
		id: 2,
		name: 'Python',
	},
	{
		id: 3,
		name: 'Java',
	},
];

function SelectBox({
	value,
	placeholder = '선택해주세요',
	options = MOCK,
	onChange,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<StSelectTrigger onClick={handleTriggerClick}>
				{value || placeholder}
			</StSelectTrigger>
			{isOpen && (
				<StSelectOptions>
					{options.map((option) => (
						<StSelectOption
							key={option.id}
							onClick={() => onChange(option)}
						>
							{option.name}
						</StSelectOption>
					))}
				</StSelectOptions>
			)}
		</>
	);
}

const StSelectTrigger = styled.div`
	display: flex;
`;

const StSelectOptions = styled.div`
	display: flex;
	flex-direction: column;
`;

const StSelectOption = styled.div`
	display: flex;
	border-bottom: 1px solid var(--color-border);
	margin: 4px;
`;

export default SelectBox;
