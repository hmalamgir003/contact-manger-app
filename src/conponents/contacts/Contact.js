import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showInfo: false
  };

  //Toggle to show and hide contact info
  onShowClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  //Delete Contact (Action)
  deleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (err) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body my-3">
              <h4 style={{ cursor: "pointer" }} onClick={this.onShowClick}>
                {name} {this.state.showInfo ? "-" : "+"}
                <Link
                  to={`/edit/${id}`}
                  className="text-success px-2"
                  style={{ fontSize: "12px", float: "right" }}
                >
                  <em> EDIT</em>
                </Link>
                <span
                  className="text-danger px-2"
                  style={{ fontSize: "12px", float: "right" }}
                  onClick={() => this.deleteContact(id, dispatch)}
                >
                  <em> DELETE</em>
                </span>
              </h4>
              {this.state.showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
