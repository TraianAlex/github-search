import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProfile, setUser } from 'store/actions/gitActions';

export function SearchForm({ user, setUser, fetchProfile }) {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={user}
        onChange={({ target }) => setUser(target.value)}
      />
      <Button variant="outline-success" onClick={() => fetchProfile(user)}>
        Search
      </Button>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
});

export default connect(mapStateToProps, {
  fetchProfile,
  setUser,
})(SearchForm);
