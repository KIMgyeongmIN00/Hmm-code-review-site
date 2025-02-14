import { useState } from 'react';
import styled from 'styled-components';

function SelectBox({ value, placeholder, options, size, onChange }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};

	function SelectOptions() {
		return (
			isOpen && (
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
			)
		);
	}

	return (
		<>
			<StSelectTrigger onClick={handleTriggerClick}>
				{value || placeholder}
			</StSelectTrigger>
			<SelectOptions />
		</>
	);
}

const StSelectTrigger = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	user-select: none;
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
