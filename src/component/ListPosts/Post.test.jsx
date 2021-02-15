import React from 'react'
import { mount, render } from 'enzyme';
import { Post } from './Post'

describe('Post render', () => {
  test('render when status of post hidden', () => {
    const wrapper = render(<Post />)
    expect(wrapper).toMatchSnapshot()
  })
})