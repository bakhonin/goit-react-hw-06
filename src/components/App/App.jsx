import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactForm } from '../ContactForm/ContactForm';
import { Title } from '../Title/Title';
import { updateNameFilter } from '../../redux/filtersSlice';
import { deleteContact, addContact } from '../../redux/contactsSlice';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.contacts.items);
  const nameFilter = useSelector(state => state.filters.name);
  const handleDelete = userId => {
    dispatch(deleteContact(userId));
  };

  const addUser = newUser => {
    dispatch(addContact(newUser));
  };

  const visibleUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Title />
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onChange={value => dispatch(updateNameFilter(value))} />
      <ContactList users={visibleUsers} handleDelete={handleDelete} />
    </div>
  );
};
