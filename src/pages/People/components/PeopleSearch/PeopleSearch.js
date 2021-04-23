import { InputSearch, SearchIconStyled, Wrapper } from './PeopleSearch.styled';

export default function PeopleSearch({ by, onChange }) {
  return (
    <Wrapper>
      <SearchIconStyled />
      <InputSearch
        type="text"
        placeholder={`Search by ${by}...`}
        tabIndex="3"
        onChange={onChange}
      />
    </Wrapper>
  );
}
