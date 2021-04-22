// @ts-nocheck
import React, { useContext } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import GitContext from '../store/context';

export function SortButtons() {
  const { profile, sortByName, sortByStars } = useContext(GitContext);

  const sortAlpha = () => sortByName(profile);
  const sortDefault = () => sortByStars(profile);

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

export default SortButtons;
