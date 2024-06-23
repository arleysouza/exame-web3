import { useState } from "react";
import styled from "styled-components";

export default function Input({ placeholder }: Props) {
  const [text, setText] = useState("");

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      alert("Enter");
    }
    return true; // Indica que a resposta será enviada de forma assíncrona
  };

  return (
      <InputSld
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
  );
}

const InputSld = styled.input`
  display: flex;
  flex: 1;
  border-radius: 5px;
  border: none;
  padding: 8px;
  color: rgb(182, 39, 58);
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
`;

interface Props {
  placeholder: string;
}
