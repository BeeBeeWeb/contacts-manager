
import { Component } from 'react';

import './App.css';
import { ContactInfo } from './components/contact-info/contact-info.component';
import { ContactList } from './components/contact-list/contact-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      contacts: [],
      selectedContact: null
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({contacts: users}))
  }

  onContactSelect = (contact, e) => {
    console.log(contact);
    this.setState({ selectedContact: contact });
  }

  render() {
    const contactsList = <ContactList contacts={this.state.contacts} onClick={this.onContactSelect} />;
    const contactInfo = <ContactInfo contact={this.state.selectedContact}/>
    return (
      <div className="App">
        <h1>Contacts Manager</h1>
        <div className="container">
          <div className="sidebar">
            {
              this.state.contacts.length === 0 ? <p>Loading...</p> : contactsList
            }
          </div>
          <div className="content">
            {
              this.state.selectedContact ? contactInfo : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
