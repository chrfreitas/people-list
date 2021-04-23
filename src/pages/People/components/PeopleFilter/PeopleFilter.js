import CheckboxField from 'components/Form/CheckboxField';
import Search from 'pages/People/components/PeopleSearch';

export default function PeopleFilter({ onFilter, onSearch }) {
  return (
    <>
      <div>
        <Search by="name" onChange={(e) => onSearch(e.target.value)} />
      </div>
      <CheckboxField
        id="contractor"
        name="employment"
        label="Contractor"
        tabIndex="4"
        onChange={(e) => onFilter('contractor')}
      />
      <CheckboxField
        id="employee"
        name="employment"
        label="Employee"
        tabIndex="4"
        onChange={(e) => onFilter('employee')}
      />
    </>
  );
}
