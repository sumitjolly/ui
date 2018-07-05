import React from "react";
import { Checkbox as SUIRCheckbox } from "@infinitecsolutions/semantic-ui-react";

const Checkbox = props => {
  return <SUIRCheckbox {...props} />;
};

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = SUIRCheckbox.propTypes;

export default Checkbox;
