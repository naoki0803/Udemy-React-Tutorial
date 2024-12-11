import styled from "styled-components";

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: pink;
  border: none;
`;

const SecondButton = styled(FirstButton)`
  background: red;
  color: white;
`;

const ThirdButton = styled(SecondButton)`
  background: ${(props) => (props.dark ? "black" : "green")};
`;

const Example = () => {
  return (
    <>
      <FirstButton>ボタン1</FirstButton>

      <SecondButton>ボタン2</SecondButton>

      <ThirdButton>ボタン3</ThirdButton>

      <ThirdButton dark>ボタン3</ThirdButton>
    </>
  );
};

export default Example;
