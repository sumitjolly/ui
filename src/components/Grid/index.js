import React from "react";
import {
  Grid as SUIRGrid,
  GridColumn,
  GridRow
} from "@infinitecsolutions/semantic-ui-react";

const Grid = props => {
  return <SUIRGrid {...props} />;
};

Grid.PropTypes = SUIRGrid.PropTypes;
Grid.Column = GridColumn;
Grid.Row = GridRow;

export default Grid;
