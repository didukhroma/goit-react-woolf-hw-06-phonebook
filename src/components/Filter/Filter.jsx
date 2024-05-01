//STYLES
import { useDispatch, useSelector } from 'react-redux';
import { StyledForm, StyledTitle } from './Filter.styled';
import { StyledLabel } from 'components/ContactForm/ContactForm.styled';
import { getFilter } from '../../redux/selectors';
import { updateFilter } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ target: { value } }) => dispatch(updateFilter(value));

  return (
    <StyledForm>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledLabel>
        <span>Name</span>
        <input
          name="filter"
          type="text"
          title="filtered contacts"
          value={filter}
          onChange={handleChange}
          required
        />
      </StyledLabel>
    </StyledForm>
  );
}

export default Filter;
