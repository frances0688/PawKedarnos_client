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
import EditPetPage from "./pages/EditPetPage";

import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {



  return (
    <div className="App">
      <Navbar />

      <div id="popup-root" />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact-us" element={<ContactForm />} />

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
          path="/pets/:petId"
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

        <Route
          path="/pets/:petId/edit"
          element={
            <IsPrivate>
              <EditPetPage />
            </IsPrivate>
          }
        />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
