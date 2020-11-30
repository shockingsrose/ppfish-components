import React from 'react'

import { Provider } from './Context';

export default (props) => {
  return <Provider value={props.value}>
    {props.children}
  </Provider>
};