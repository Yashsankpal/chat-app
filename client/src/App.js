import React , {Fragment} from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { Route } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Fragment>
  );
}

export default App;
