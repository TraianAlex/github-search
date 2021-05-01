import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleView } from 'store/actions/gitActions';
import Loader from './Loader';
import { ProfileCard } from './ProfileCard';
import ProfileTable from './ProfileTable';
import SortButtons from './SortButtons';

const Profile = ({ profile, loading, error, isCard, toggleView }) => {
  const changeView = () => toggleView(isCard);

  return loading ? (
    <Loader />
  ) : error ? (
    <Alert variant="danger">
      <Alert.Heading>{error}</Alert.Heading>
    </Alert>
  ) : !error && profile.length > 0 ? (
    <>
      <div className="mt-4 mb-3 h5">
        Listing repositories for the user "{profile[0].owner.login}": found{' '}
        {profile.length} repositories
        <span
          className="clearfix float-right font-weight-light text-black-50"
          onClick={changeView}
        >
          Toggle view
        </span>
      </div>
      {isCard && <SortButtons />}
      {isCard ? (
        profile.map((row) => (
          <div className="d-inline-block">
            <ProfileCard row={row} />
          </div>
        ))
      ) : (
        <ProfileTable />
      )}
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  loading: state.profile.loading,
  profile: state.profile.profile,
  error: state.profile.error,
  isCard: state.profile.isCard,
});

export default connect(mapStateToProps, { toggleView })(Profile);
