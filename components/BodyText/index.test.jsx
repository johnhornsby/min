import React from 'react';

import renderer from 'react-test-renderer';
import BodyText from './index';

it('renders correctly', () => {
  const component = renderer.create(<BodyText />);
  expect(component.toJSON()).toMatchSnapshot();
});
