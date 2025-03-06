import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Header from "./components/cabeçalho/Header";

function App() {
  return (
    <Router>
      {/* header */}
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          height: "70vh",
        }}
      >
        {/* Rotes */}
        <Routes>
          <Route path="/" element={<Registration />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
