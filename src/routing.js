import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import Login from './pages/Login';
import ManageUser from './pages/ManageUser';
import NewUser from './pages/NewUser';

export default function Routing() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="login" element={<Login />} />
        <Route path="manageUser" element={<ManageUser />} />

        <Route path="newUser" element={<NewUser />} />
      </Router>
    </BrowserRouter>
  );
}