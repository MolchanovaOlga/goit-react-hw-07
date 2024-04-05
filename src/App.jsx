import './App.css';

import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts0ps';
import Loader from './components/Loader/Loader';
import { selectError, selectIsLoading } from './redux/selectors';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
