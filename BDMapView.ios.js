'use strict';

import React, { PropTypes } from 'react';
import {
    View,
    requireNativeComponent,
    NativeModules
} from 'react-native';

var BDMapManager = NativeModules.RCTBDMapManager;

const MapView = React.createClass({

  propTypes: {
    ...View.propTypes,
    /**
     * Used to style and layout the `MapView`.
     */
    style: View.propTypes.style,

    annotations: React.PropTypes.arrayOf(React.PropTypes.shape({
      /**
       * The location of the annotation.
       */
      latitude: React.PropTypes.number.isRequired,
      longitude: React.PropTypes.number.isRequired,
      /**
       * Annotation title and subtile.
       */
      title: React.PropTypes.string,
    })),

    region:React.PropTypes.shape({
      /**
       * The location of the annotation.
       */
      latitude: React.PropTypes.number.isRequired,
      longitude: React.PropTypes.number.isRequired,
    }),
    pitchEnabled: React.PropTypes.bool,
  },

  render: function() {
    return (<RCTBDMap {...this.props} annotations={this.props.annotations} pitchEnabled={true} region={this.props.region}/>);
  }
});

var RCTBDMap = requireNativeComponent('RCTBDMap', MapView);

module.exports = MapView;