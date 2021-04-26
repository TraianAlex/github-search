// @ts-nocheck
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, fetchProfile } from 'store/actions/gitActions';

export function SearchForm() {
  const user = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();
  const onSubmit = () => dispatch(fetchProfile(user));

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={user}
        onChange={({ target }) => dispatch(setUser(target.value))}
      />
      <Button variant="outline-success" onClick={onSubmit}>
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
