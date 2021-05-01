import React from 'react';
import { Alert } from 'react-bootstrap';
import Loader from './Loader';
import SortButtons from './SortButtons';
import { useProfile } from '../store/useProfile';
import { ProfileCard } from './ProfileCard';
import { ProfileTable } from './ProfileTable';

export function Profile() {
  const { profile, loading, error, isCard, toggleView } = useProfile();

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
          <div key={row.id} className="d-inline-block">
            <ProfileCard row={row} />
          </div>
        ))
      ) : (
        <ProfileTable />
      )}
    </>
  ) : null;
}

export default Profile;
