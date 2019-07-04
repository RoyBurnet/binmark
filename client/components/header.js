import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, withRouter } from 'react-router';

class Header extends Component {
  onBinClick = event => {
    event.preventDefault();

    Meteor.call('bins.insert', (error, binId) => {
      this.props.history.push(`/bins/${binId}`);
    });
  };

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">
            MarkBin
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onBinClick}>
              Create Bin
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
