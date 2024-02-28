import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectContacts);
  const nameFilter = useSelector(selectFilter);

  const handleDelete = userId => {
    dispatch(deleteContact(userId));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className={css.contacts}>
      {filteredUsers.map(user => (
        <Contact key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};
