import './App.css';
import styled from "styled-components";
import GoogleMap from './GoogleMap';
import Example from './Example';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export default function App() {
  return (
    <div className="App">
      <br></br>
      <h2>Miguel Angel Moran Vazquez 5B-TI</h2>
      <h4>Universidad Tecnologica de Durango</h4>
      <Button as="a" href="https://utd.edu.mx">UTD</Button>
      <Button as="a" href="https://github.com/miguelmoranv" primary>GitHub</Button>
      <Button as="a" href="https://www.facebook.com/miguelangel.moranvazques">Facebook</Button>
      <Example />
      <GoogleMap />
    </div>
  );
}