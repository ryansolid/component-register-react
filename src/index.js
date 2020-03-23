import React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';

export default (ReactComponent) =>
  (props, { element }) => {
    let comp = React.createElement(ReactComponent, props),
      mountEl = element.renderRoot;
    ReactDOM.render(comp, mountEl);
    retargetEvents(mountEl);

    element.addReleaseCallback(() => ReactDOM.unmountComponentAtNode(mountEl));

    element.addPropertyChangedCallback((name, value) => {
      props[name] = value;
      ReactDOM.render(React.createElement(ReactComponent, props), mountEl);
    });
  };