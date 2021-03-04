import React from "react";
import { Button, InputGroup } from "react-bootstrap";

export default function SortButtons({sortAlpha, sortDefault}) {
  return (
    <div className="mt-2">
      <label>Sort by</label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={sortAlpha}>
            Alphabetical
          </Button>
          <Button variant="outline-secondary" onClick={sortDefault}>
            By Most Stars
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
}
