import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Axios from "axios";
import ColorsList from './ColorsList';
import ColorDetail from './ColorDetail';
import AddColorForm from './AddColorForm';

function App() {
  return (
    <Router>
      <Route>
        <Route path="/colors" element={<ColorsList />} />
        <Route path="/colors/:color" element={<ColorDetail />} />
        <Route path="/colors/new" element={<AddColorForm />} />
        <Route path="/*" element={<Navigate to="/colors" />} />
      </Route>
    </Router>
  );
}

export default App;