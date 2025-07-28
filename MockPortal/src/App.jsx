import { Routes, Route } from "react-router-dom";
import Registration from "./Registration/registration.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Login from "./Login/Login.jsx";
import PasswordReset from "./PasswordReset/PasswordReset.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
    </Routes>
  );
}

export default App;
