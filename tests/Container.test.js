import React from "react";
import { Container } from "../src/components";
import { shallow } from "enzyme";

describe(Container.displayName, () => {
  const SUIContainer = shallow(<Container />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIContainer.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'container'", () => {
    expect(SUIContainer.hasClass("ui")).toBeTruthy();
    expect(SUIContainer.hasClass("container")).toBeTruthy();
  });
});
