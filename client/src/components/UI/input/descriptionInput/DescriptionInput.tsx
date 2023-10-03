import { DescTextarea } from './styles'

type Props = {
	value: string
	onChange: (param: string) => void
}

export default function DescriptionInput({ value, onChange }: Props) {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const lines = text.split('\n');

    if (lines.length > 8) {
      const truncatedText = lines.slice(0, 8).join('\n');
      e.target.value = truncatedText;
      onChange(truncatedText);
    } else {
      onChange(text);
    }
  }

	return (
		<DescTextarea
      maxLength={650}
			active={value !== ''}
			value={value}
			onChange={handleChange}
			placeholder='Описание'
		/>
	)
}
