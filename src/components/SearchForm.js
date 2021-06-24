import React from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, fetchProfile } from 'store/actions/gitActions';
import { getProfileState } from 'store/reducers/profileReducer';

export function SearchForm() {
  const { user } = useSelector(getProfileState);
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(fetchProfile(user));
  const onUserChange = ({ target }) => dispatch(setUser(target.value));
  const handleSelect = (user) => {
    dispatch(setUser(user));
    dispatch(fetchProfile(user));
  };

  return (
    <div className="pt-2 pb-1 bg-dark text-white sticky-top">
      <Row className="justify-content-center mb-2">
        <small>
          Try{' '}
          <button
            className="invisible-button text-white"
            type="button"
            onClick={() => handleSelect('octokit')}
          >
            "octokit"
          </button>
          {', '}
          <button
            className="invisible-button text-white"
            type="button"
            onClick={() => handleSelect('engineyard')}
          >
            "engineyard"
          </button>
          {', or '}
          <button
            className="invisible-button text-white"
            type="button"
            onClick={() => handleSelect('ministrycentered')}
          >
            "ministrycentered"
          </button>
        </small>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col sm>
          <Row className="justify-content-center">
            <Alert.Heading as="h5">Github Repo Lister</Alert.Heading>
          </Row>
        </Col>
        <Col sm>
          <Form>
            <Form.Row>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Search Users/Orgs"
                  size="sm"
                  className="mr-5"
                  value={user}
                  onChange={onUserChange}
                />
              </Col>
              <Col sm={4}>
                <Button variant="light" size="sm" onClick={handleSubmit}>
                  <span className="mr-2">&#128269;</span> Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
        <Col sm></Col>
      </Row>
    </div>
  );
}

export default SearchForm;
