import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectFilterName } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const getFilterVal = useSelector(selectFilterName);
  const handleImputFilterVal = ev => {
    dispatch(changeFilter(ev.target.value));
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={getFilterVal}
        onChange={handleImputFilterVal}
      />
    </div>
  );
};

export default SearchBox;
