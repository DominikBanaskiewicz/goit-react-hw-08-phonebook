import css from './ContactList.module.css';
import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { selectVisibleContacts } from 'redux/selectors';
import { selectState } from 'redux/auth/selector';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const a = useSelector(selectState);
  console.log(a);
  const contactsToPreview = useSelector(selectVisibleContacts);

  return (
    <>
      <ContactForm></ContactForm>
      <Filter></Filter>

      <ul>
        {contactsToPreview.map(elem => (
          <li className={css.list__elem} key={elem.id}>
            <span className={css.name}>{elem.name}</span>
            <span className={css.number}>{elem.phone}</span>
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
