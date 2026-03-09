import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Teams } from "./routes/Teams";
import { Events } from "./routes/Events";
import { About } from "./routes/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
