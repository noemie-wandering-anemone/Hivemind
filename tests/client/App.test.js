import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Route, Link, MemoryRouter } from "react-router-dom";
// import './setup-env'

import App, {Home, Form, Hive} from '../../client/components/App'
App.prototype.componentDidMount = () => { }

import Buzzes from '../../client/components/Buzzes'
Buzzes.prototype.componentDidMount = () => { }

Enzyme.configure({adapter: new Adapter()})

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

test('<App> root has className of app', () => {
  const wrapper = shallow(<App />)
  const root = wrapper.find('.app')
  expect(root.length).toBe(1)
})

test('page header includes Hivemind', () => {
  const wrapper = render(<App />)
  const h1 = wrapper.find('h1')
  expect(h1.text()).toMatch('Hivemind')
})

let pathMap = {};
describe('routes: paths point to the right component', () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
  })
  test('should show Home component for / router (getting array of routes)', () => {
    expect(pathMap['/'].Function).toBe(Home);
  })
  test('should show Form component for /form router', () => {
    expect(pathMap['/form'].Function).toBe(Form);
  })
  test('should show Hive for /hive/:id router', () => {
    expect(pathMap['/hive/:id'].Function).toBe(Hive);
  })
})

test('homepage has action button', () => {
  const wrapper = render(<App />)
  const button = wrapper.find('button')
  expect(button.text()).toMatch('Create a hive')
})

test('renders an <li> for each buzz', () => {
  const wrapper = mount(<Buzzes />)
  wrapper.setState({buzzes: ['Buzz1', 'Buzz2', 'Buzz3']})
  expect(wrapper.find('li').length).toBe(3)
})
