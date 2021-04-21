import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchProfile } from "store/actions/gitActions";

export function SearchForm() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(fetchProfile(user));
    setUser("");
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <Button variant="outline-success" onClick={submitForm}>
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
