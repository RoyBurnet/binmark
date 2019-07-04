import React, { Component } from 'react';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Meteor } from 'meteor/meteor';

class BinsMain extends Component {
  render() {
    const { bin } = this.props;
    if (!bin) {
      return <div>Loading . . .</div>;
    }

    return (
      <div>
        <BinsEditor bin={bin} />
        <BinsViewer bin={bin} />
        <BinsShare bin={bin} />
      </div>
    );
  }
}

export default withTracker(props => {
  const { binId } = props.match.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBin');
  



  return { bin: Bins.findOne(binId) };
})(BinsMain);
