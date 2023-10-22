import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Calendars from "./scenes/calendar/Calendars";
import Create from "./Redux/Create";
import Login from "./pages/Login";
import Subsidebar from "./scenes/global/Subdrawer";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <Routes>
         
            <Route path="/subsidebar" element={<Subsidebar />} />
            <Route
              path="/sidebar"
              element={<Sidebar isSidebar={isSidebar} />}
            />
            <Route path="/" element={<Login />} />
            ss
            <Route path="/report" element={<Dashboard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/calandars" element={<Calendars />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
      </div>
    </ColorModeContext.Provider>
  );
}

export default App;
