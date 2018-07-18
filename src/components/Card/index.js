import React from "react";
import PropTypes from "prop-types";
import {
  Card as SUIRCard,
  CardContent
} from "@infinitecsolutions/semantic-ui-react";

const Card = props => {
  return <SUIRCard{...props} />;
};

Card.propTypes = {

  /** A Card can center itself inside its container. */
  centered: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Card can be formatted to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** A card can be formatted to link to other content. */
  link: PropTypes.bool,


  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /** A Card can be formatted to raise above the page. */
  raised: PropTypes.bool,
}

Card.Content = CardContent;

Card.displayName = "Card";

export default Card;
