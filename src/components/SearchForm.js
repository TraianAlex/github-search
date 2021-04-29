import React, { useRef } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

export default function SearchForm({ handleSubmit }) {
  const userInput = useRef(null);

  const submitForm = (event) => {
    event.preventDefault();
    handleSubmit(userInput.current.value);
    userInput.current.value = '';
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        ref={userInput}
      />
      <Button variant="outline-success" onClick={submitForm}>
        Search
      </Button>
    </Form>
  );
}
