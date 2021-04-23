import { useMemo } from 'react';

import PeopleView from './People.view';
import usePeopleFilter from './People.hook';

export default function People() {
  const [people, onFilter, onSearch] = usePeopleFilter();

  return useMemo(
    () => (
      <PeopleView people={people} onFilter={onFilter} onSearch={onSearch} />
    ),
    [people]
  );
}
