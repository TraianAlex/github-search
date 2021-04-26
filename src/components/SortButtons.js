import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { sortByName, sortByStars } from 'store/actions/gitActions';

export function SortButtons({ profile, sortByName, sortByStars }) {
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

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, {
  sortByName,
  sortByStars,
})(SortButtons);
