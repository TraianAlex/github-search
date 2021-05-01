import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { sortByName, sortByStars } from 'store/actions/gitActions';

export function SortButtons({ profile, sortByName, sortByStars }) {
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

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, {
  sortByName,
  sortByStars,
})(SortButtons);
