import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slices/contact';
import { getFiltredContacts} from '../../redux/phone-selector';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <li className={s.item} key={id}>
          <div className={s.info}>
            <p className={s.name}> {name}</p>
            <p className={s.number}> {number}</p>
          </div>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
