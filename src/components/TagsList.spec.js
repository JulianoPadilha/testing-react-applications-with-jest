import React from 'react';
import TagsList from './TagsList'; 
import renderer from 'react-test-renderer';

describe('The Tags List', () => {
  it('should render a snapshot', () => {
    const tree = renderer.create(<TagsList tags={['css', 'html', 'js']} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});