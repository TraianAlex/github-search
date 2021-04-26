// @ts-nocheck
import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sortByName, sortByStars } from 'store/actions/gitActions';

export function SortButtons() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const sortAlpha = () => dispatch(sortByName(profile));
  const sortDefault = () => dispatch(sortByStars(profile));

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
