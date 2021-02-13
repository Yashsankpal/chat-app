import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    ,root)

}

if(module.hot){
  module.hot.accept('./app/layout/App',()=>{setTimeout(render)})
}

render()