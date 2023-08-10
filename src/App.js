import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignInPage } from "./pages/signIn";
import { LandingPage } from "./pages/landingPage";
import { PasswordPage } from "./pages/passwordpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/forgotPassword" element={<PasswordPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
