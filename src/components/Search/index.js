import React from "react";
import {
  Search as SUIRSearch,
  Category,
  Result,
  Results
} from "@infinitecsolutions/semantic-ui-react";

const Search = props => {
  return <SUIRSearch {...props} />;
};

Search.Category = Category;
Search.Result = Result;
Search.Results = Results;

Search.propTypes = SUIRSearch.propTypes;

export default Search;
