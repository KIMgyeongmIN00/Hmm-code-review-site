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

	return (
		<h1>
			HomePage
			<div>
				<SelectBox options={MOCK} placeholder={'선택해주세요'} />
			</div>
		</h1>
	);
}
