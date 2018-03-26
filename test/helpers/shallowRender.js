/**
 * Module dependencies
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import setupPlayer from './setupPlayer';

/**
 * Helper for testing the output of a component's `render` method
 *
 * @param {Object} [props] - component instance props
 * @returns {Object}
 */

const shallowRender = (props) => {
  const { FacebookPlayer } = setupPlayer();

  const renderer = TestUtils.createRenderer();
  renderer.render(<FacebookPlayer { ...props } />);

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
};

export default shallowRender;