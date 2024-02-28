import { Title } from '../Title/Title';
import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Title />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
