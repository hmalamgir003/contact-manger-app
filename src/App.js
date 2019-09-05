import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

import "./App.css";

import Header from "./conponents/layout/Header";
import Contacts from "./conponents/contacts/Contacts";
import AddContact from "./conponents/contacts/AddContact";
import EditContact from "./conponents/contacts/EditContact";

const App = () => {
  return (
    <Provider>
      <Router>
        <Header branding="Contact Manager" />
        <div className="container">
          <div className="App">
            <h1 className="mb-5">Contact List</h1>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/add" component={AddContact} />
            <Route exact path="/edit/:id" component={EditContact} />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
