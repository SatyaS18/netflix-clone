import React from "react";
import { Container, Inner } from "./styles/jumbotron";

function Jumbotron({ children, direction = "row", ...restProps }) {
  return (
    <Inner direction={direction}>
      <p>Hello!</p>
    </Inner>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

export default Jumbotron;
