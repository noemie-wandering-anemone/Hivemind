<<<<<<< HEAD
import {launchApp} from './app.js'

document.addEventListener('DOMContentLoaded', launchApp)
=======
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app'))
})
>>>>>>> a0e9d2e9c4ec52ca12da30a50fb689b4ced55b9a
