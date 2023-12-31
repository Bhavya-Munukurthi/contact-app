import React, {useState, useEffect} from "react"
import "./App.css"
import Header from "./components/Header"
import Addcontact from "./components/Addcontact"
import Contactlist from "./components/Contactlist"


function App() {
  const LOCAL_STORAGE_KEY= "contacts"
const [contacts,setContactacts] = useState([]);

const addContactHandler = (contact) => {
  console.log(contact);
  setContactacts([...contacts, contact])
};

useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setContactacts(retriveContacts);
  }, [contacts]);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="ui-container">
      <Header />
      <Addcontact addContactHandler= {addContactHandler} />
      <Contactlist contacts = {contacts} />


    </div>
  );
}

export default App;
