import styled from "styled-components";
import Input from "./Input";

export default function Pane() {
  return (
    <Wrapper>
        <Input placeholder="Pesquise um alimento" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  
  width: 500px;
  min-width: 500px;
  box-sizing: border-box;
  background-color: #222020;
  color: #fff;
  margin-right: 20px;
`;
