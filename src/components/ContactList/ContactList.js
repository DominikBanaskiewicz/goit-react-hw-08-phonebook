import css from './ContactList.module.css';
import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const contactsToPreview = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm></ContactForm>
      <Filter></Filter>

      <ul>
        {contactsToPreview.map(elem => (
          <li className={css.list__elem} key={elem.id}>
            <span className={css.name}>{elem.name}</span>
            <span className={css.number}>{elem.number}</span>
            <button
              className={css.button}
              type="Button"
              onClick={() => handleDelete(elem.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
