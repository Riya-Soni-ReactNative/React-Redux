import React from 'react';
import Navigation from './navigation'
import { Provider } from 'react-redux';
import Store from './reducer/store'

const App = () => {
  return (
    <Provider store={Store} >
      <Navigation />
    </Provider>
  )
}

export default App