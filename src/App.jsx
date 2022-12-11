import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FAQ from "./pages/FAQ";

import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import EditUserPage from "./pages/EditUserPage";

import AddPetPage from "./pages/AddPetPage";
import PetProfile from "./pages/PetProfile";

import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/faq" element={<FAQ />} />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <EditUserPage />
            </IsPrivate>
          }
        />

        <Route
          path="/pets"
          element={
            <IsPrivate>
              <PetProfile />
            </IsPrivate>
          }
        /> 
        
        <Route
          path="/pets/add"
          element={
            <IsPrivate>
              <AddPetPage />
            </IsPrivate>
          }
        /> 

        {/* <Route
          path="/pets/edit"
          element={
            <IsPrivate>
              <EditPetPage />
            </IsPrivate>
          }
        /> */}


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
