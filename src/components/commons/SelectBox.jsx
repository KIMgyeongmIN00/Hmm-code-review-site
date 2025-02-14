import { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';

/**
 * @component
 * @example
 * <SelectBox
 *   value={selectedValue}
 *   options={[{ id: 1, name: "Option 1" }, { id: 2, name: "Option 2" }]}
 *   onChange={(option) => setSelectedValue(option)}
 *   placeholder="Select an option"
 *   size="md"
 * />
 */

function SelectBox({
	value,
	placeholder = '선택해주세요',
	options = [],
	size = 'md',
	onChange,
	className,
}) {
	const [isOpen, setIsOpen] = useState(false);

	const handleTriggerClick = () => {
		setIsOpen((prev) => !prev);
	};

	const handleOptionClick = (e, name) => {
		e.stopPropagation();
		onChange(name);
		setIsOpen((prev) => false);
	};

	return (
		<SelectContainer className={className}>
			<SelectTrigger
				$isPlaceholder={!value}
				onClick={handleTriggerClick}
				$size={size}
			>
				{isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
				<p>{value || placeholder}</p>
			</SelectTrigger>

			{isOpen && (
				<SelectDropdown $size={size}>
					{options.map((option) => (
						<SelectOption
							key={option.id}
							onClick={(e) => handleOptionClick(e, option.name)}
						>
							{option.name}
						</SelectOption>
					))}
				</SelectDropdown>
			)}
		</SelectContainer>
	);
}

export default SelectBox;

/** ========== 스타일 ========== */
const sizeStyles = {
	sm: css`
		font-size: var(--font-size-sm);
		padding: 6px 8px;
		border-radius: var(--round-md);
	`,
	md: css`
		font-size: var(--font-size-md);
		padding: 0.5rem 1.2rem;
		border-radius: var(--round-md);
	`,
	lg: css`
		font-size: var(--font-size-lg);
		padding: 10px 16px;
		border-radius: var(--round-md);
	`,
};

const sizeHeight = {
	sm: css`
		height: var(--height-sm);
	`,
	md: css`
		height: var(--height-md);
	`,
	lg: css`
		height: var(--height-lg);
	`,
};

const SelectContainer = styled.div`
	position: relative;
	width: 100vm;
	margin: 0 1rem;
`;

const SelectTrigger = styled.div`
	display: flex;
	align-items: center;
	background: white;
	border: 1px solid var(--color-border);
	cursor: pointer;
	gap: 4px;
	${({ $size }) => sizeStyles[$size]}
	${({ $size }) => sizeHeight[$size]}
    ${({ $isPlaceholder }) => css`
		color: ${$isPlaceholder
			? 'var(--color-main-light)'
			: 'var(--color-text)'};
	`}
`;

const SelectDropdown = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: white;
	border: 1px solid var(--color-border);
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	margin-top: 4px;
	${({ $size }) => sizeStyles[$size]}
`;

const SelectOption = styled.div`
	padding: 8px;
	cursor: pointer;
	&:hover {
		background: var(--color-hover);
	}
`;
