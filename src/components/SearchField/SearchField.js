import React from "react";
import PropTypes from "prop-types";
import { SearchInput } from "./SearchField.styled";
import contactsActions from "../../redux/contacts/conacts-actions";
import { useSelector, useDispatch } from "react-redux";

const SearchField = () => {
  const value = useSelector((state) => state.contacts.filter);
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
