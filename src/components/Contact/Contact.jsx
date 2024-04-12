import css from './Contact.module.css';
import { HiUser, HiPhone } from 'react-icons/hi';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactListItemWrapper}>
      <div>
        <p className={css.userInfo}>
          <HiUser size={20} /> {name}
        </p>
        <p className={css.userInfo}>
          <HiPhone size={20} /> {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
