import React from "react";
import PropTypes from "prop-types";
import { SearchInput } from "./SearchField.styled";
import * as contactsActions from "../../redux/contacts/conacts-actions";
import { useSelector, useDispatch } from "react-redux";
import selectors from "../../redux/contacts/contats-selectors";

const SearchField = () => {
  const value = useSelector((state) => selectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <SearchInput
      type="text"
      value={value}
      onChange={(e) =>
        dispatch(contactsActions.onContactSearch(e.currentTarget.value))
      }
    />
  );
};

export default SearchField;

SearchField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
