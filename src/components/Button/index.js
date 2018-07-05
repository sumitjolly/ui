import React from "react";
import { Button as SUIRButton } from "@infinitecsolutions/semantic-ui-react";

const Button = props => {
  return <SUIRButton {...props} />;
};

Button.displayName = "Button";

export default Button;
