import { useState } from "react";

interface TextAreaProps {
  onChange: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ onChange }) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    onChange(newText);
  };

  return (
    <textarea
      rows={5}
      cols={40}
      value={text}
      onChange={handleTextChange}
      placeholder="Type here..."
    />
  );
};

export default TextArea;
