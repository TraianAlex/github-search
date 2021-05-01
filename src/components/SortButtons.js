import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { useProfile } from '../store/useProfile';

export function SortButtons() {
  const { profile, sortByName, sortByStars } = useProfile();

  const sortAlpha = () => sortByName(profile);
  const sortDefault = () => sortByStars(profile);

  return (
    <div className="mt-2">
      <InputGroup className="mb-3">
        <span className="pt-1 pr-2">Sort by</span>
        <InputGroup.Prepend>
          <Button
            variant="outline-secondary"
            className="rounded-left"
            size="sm"
            onClick={sortAlpha}
          >
            Alphabetical
          </Button>
          <Button
            variant="outline-secondary"
            className="rounded-right"
            size="sm"
            onClick={sortDefault}
          >
            By Most Stars
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
}

export default SortButtons;
