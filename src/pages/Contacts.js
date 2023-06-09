import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h2>Welome here you have your Contact List</h2>
      <ContactList />
    </div>
  );
}
