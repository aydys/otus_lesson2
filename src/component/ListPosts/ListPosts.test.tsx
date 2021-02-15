import React from 'react';
import { shallow } from "enzyme";
import { ListPosts } from './ListPosts'

describe("render component", () => {

  test('render', () => {
    const wrapper = shallow(<ListPosts />)

    expect(wrapper).toMatchSnapshot()
  })
})