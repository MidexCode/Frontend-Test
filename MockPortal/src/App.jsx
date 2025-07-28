import { Routes, Route } from "react-router-dom";
import Registration from "./Registration/registration.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
