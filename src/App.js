import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { UserProvider } from "./firbaseService/UserContext";
import GenderPage from "./pages/GenderPage";
import DetailPage from "./pages/DetailPage";
import GenderContext from "./GenderContext";

function App() {
  const [selectedGender, setSelectedGender] = React.useState("");
  return (
    <BrowserRouter>
      <GenderContext.Provider value={{ selectedGender, setSelectedGender }}>
        <UserProvider>
          <Navbar>
            <Routes>
              <Route path="/" element={<GenderPage />} />
              <Route path="home/:gender" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
          </Navbar>
        </UserProvider>
      </GenderContext.Provider>
    </BrowserRouter>
  );
}

export default App;
