import { useState } from 'react';
import SelectBox from '../components/commons/SelectBox';

export default function HomePage() {
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
	const [value, setValue] = useState('');

	return (
		<h1>
			HomePage
			<div>
				<SelectBox
					value={value}
					onChange={setValue}
					options={MOCK}
					placeholder={'선택해주세요'}
				/>
			</div>
		</h1>
	);
}
