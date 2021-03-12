import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchProfile } from "store/actions/gitActions";

export function SearchForm({ fetchProfile }) {
  const [user, setUser] = useState("");

  const submitForm = () => {
    fetchProfile(user);
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

export default connect(null, {
  fetchProfile,
})(SearchForm);
