import {addPost} from './api'

export function launchApp() {
    let html = `
      <h1>Client side rendering! Awesome Sauce!</h1>
    `
    document.getElementById('app').innerHTML = html
  }