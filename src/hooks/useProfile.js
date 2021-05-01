import { useState } from 'react';
import axios from 'axios';
import { sortBy, reverse } from 'lodash';

const sortByProperty = (obj, param, func) =>
  func(reverse(sortBy(obj, [param])));

export const useProfile = () => {
  const [user, setUser] = useState('');
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCard, setIsCard] = useState(true);

  const fetchProfile = async (user) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/orgs/${user}/repos`,
      );
      sortByProperty(data, 'stargazers_count', setProfile);
      setError('');
      setUser('');
    } catch (error) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      );
      setProfile([]);
    }
    setLoading(false);
  };

  const sortByName = () => sortByProperty(profile, 'name', setProfile);
  const sortByStars = () =>
    sortByProperty(profile, 'stargazers_count', setProfile);
  const toggleView = () => setIsCard(!isCard);

  return {
    user,
    profile,
    error,
    loading,
    isCard,
    setUser,
    fetchProfile,
    sortByName,
    sortByStars,
    toggleView,
  };
};
