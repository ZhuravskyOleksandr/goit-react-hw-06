import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact contact={contact} onDelete={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
