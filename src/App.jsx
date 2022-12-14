import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/generalPages/HomePage";
import AboutPage from "./pages/generalPages/AboutPage";
import ServicesPage from "./pages/generalPages/ServicesPage";
import FAQ from "./pages/generalPages/FAQ";

import LoginPage from "./pages/authPages/LoginPage";
import UserProfile from "./pages/userPages/UserProfile";
import EditUserPage from "./pages/userPages/EditUserPage";

import AddPetPage from "./pages/petPages/AddPetPage";
import PetProfile from "./pages/petPages/PetProfile";
import EditPetPage from "./pages/petPages/EditPetPage";

import AddRequestPage from "./pages/requestPages/AddRequestPage";

import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import EmailSentPage from "./pages/generalPages/EmailSentPage";

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
        <Route path="/email-sent" element={<EmailSentPage />} />
        
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

        <Route
          path="/users/:userId/requests/add"
          element={
            <IsPrivate>
              <AddRequestPage />
            </IsPrivate>
          }
        />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
