import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render the Blaze account form then find the div
    // We just rendererd in the render method and place
    // the blaze accounts form in that div

    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }

  componentWillUnmount() {
    // Go find the form we created and destroy them
    // We need to clean up those form ourselves
    Blaze.remove(this.view);
  }

  render() {
    return <div ref="container" />;
  }
}

export default Accounts;
