import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sortByName, sortByStars } from 'store/actions/gitActions';
import { getProfileState } from 'store/reducers/profileReducer';

export function SortButtons() {
  const { profile } = useSelector(getProfileState);
  const dispatch = useDispatch();
  const sortAlpha = () => dispatch(sortByName(profile));
  const sortDefault = () => dispatch(sortByStars(profile));

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
