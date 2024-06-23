import styled from "styled-components";
import { Header, Title, Logo, Pane} from "../components";

export default function TagPage() {
  return (
    <WrapperSld>
      <Header>
        <Title>Prova</Title>
        <Logo />
      </Header>
      <BodySld>
        <Pane />
      </BodySld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodySld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* centraliza na horizontal quando a direção é row */
  box-sizing: border-box;
  margin: 30px 0px;
  min-width: 530px;
`;