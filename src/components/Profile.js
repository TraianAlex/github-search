import React from 'react';
import { ProfileCard } from './ProfileCard';
import { ProfileTable } from './profileTable';

export default function Profile({ profile, sortAlpha, sortDefault, display }) {
  return display ? (
    profile.map((row, index) => (
      <div key={row.id} className="d-inline-block">
        <ProfileCard row={row} />
      </div>
    ))
  ) : (
    <ProfileTable
      profile={profile}
      sortAlpha={sortAlpha}
      sortDefault={sortDefault}
    />
  );
}
