import { useState } from 'react';
import axios from 'axios';
import { sortBy, reverse } from 'lodash';

const sortByProperty = (obj, param, func) =>
  func(reverse(sortBy(obj, [param])));

export const useProfile = () => {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (user) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/orgs/${user}/repos`,
      );
      sortByProperty(data, 'stargazers_count', setProfile);
      setError('');
    } catch (error) {
      setError(error);
      setProfile([]);
    }
    setLoading(false);
  };

  const sortAlpha = () => sortByProperty(profile, 'name', setProfile);
  const sortDefault = () =>
    sortByProperty(profile, 'stargazers_count', setProfile);

  return {profile, error, loading, handleSubmit, sortAlpha, sortDefault};
}

