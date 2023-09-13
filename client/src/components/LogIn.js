import { styled } from "styled-components";
import banana from "../imgs/banana.png"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cc6063;
`
const Image = styled.img`
position: absolute;
overflow: hidden;
max-height: 80em;
margin: 3em 10em;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align form items to the right */
  padding: 20em 30em; 
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  color: #FCFF56;
`;

const Input = styled.input`
all:unset;
  padding: 0.5rem;
  border-bottom: solid 3px yellow;
  border-radius: 4px;
`;
const LogIn = () => {
    return(
<Container>
<Image src={banana}/>
<FormContainer>
<Form>
<Label for="uname">Username:</Label><br/>
  <Input type="text" id="uname" name="uname"/><br/>
  <Label for="pw">Password:</Label><br/>
  <Input type="password" id="pw" name="pw"/>
</Form>
</FormContainer>
</Container>
    )
}

export default LogIn;