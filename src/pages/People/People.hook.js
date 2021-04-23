import { useEffect, useState } from 'react';

import api from 'services/api';
import { toggleItemArray } from '../../services/helpers';

const defaultPeople = {
  data: [],
  loading: false,
  error: null,
};

const SEARCH_DELAY = 300;

function usePeople() {
  const [people, setPeople] = useState({
    ...defaultPeople,
    loading: true,
  });

  useEffect(() => {
    api
      .get('/people')
      .then((data) => setPeople({ ...defaultPeople, data }))
      .catch((error) => setPeople({ ...defaultPeople, error }));
  }, []);

  return [people, setPeople];
}

export default function usePeopleFilter() {
  const [people, setPeople] = usePeople();
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (filter) {
        const options = {
          queryParams: {
            name_like: filter.name,
            employment: filter.employment,
          },
        };

        api
          .filter('/people', options)
          .then((data) => setPeople({ ...defaultPeople, data }))
          .catch((error) => setPeople({ ...defaultPeople, error }));
      }
    }, SEARCH_DELAY);

    return () => clearTimeout(handler);
  }, [filter]);

  const onFilter = (item) => {
    setPeople((prev) => ({ ...prev, loading: true }));

    setFilter((prev) => ({
      ...prev,
      employment: toggleItemArray(prev && prev.employment, item),
    }));
  };

  const onSearch = (name) => {
    setPeople((prev) => ({ ...prev, loading: true }));

    setFilter((prev) => ({
      ...prev,
      name: name || null,
    }));
  };

  return [people, onFilter, onSearch];
}
