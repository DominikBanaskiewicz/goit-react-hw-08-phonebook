import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selector';

export default function Contacts() {
  const user = useSelector(selectUser);
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <h2>Welome {user.name} here you have your Contact List</h2>
        <ContactList />
      </div>
    </HelmetProvider>
  );
}
