import { useEffect } from 'react';
import css from './ContactList.module.css';
import shortId from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/asyncThunk';
import { getContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/filterSlice';

const ContactList = () => {
  // const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // console.log(contacts);

  // const list = () => {
  //   return contacts.filter(e => e.name.toLowerCase().includes(filter));
  // };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items, error, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (!filter) {
      return items;
    }
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const onDelete = (e, id) => {
    if (id === e.target.id) {
      e.target.textContent = 'Deleting..';
    }
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {isLoading && <div>Please wait while minions do their work...</div>}
      {error && <div>Oops, please, try again</div>}
      {getFilteredContacts().map(({ id, name, number }) => {
        return (
          <li key={id || shortId.generate()} className={css.contactList__item}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.contactList__btn}
              onClick={e => onDelete(e, id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
