import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAnkiDeck from "./decks/AddAnkiDeck";
import EditAnkiDeck from "./decks/EditAnkiDeck";
import ViewAnkiDeck from "./decks/ViewAnkiDeck";
import Sentence from "./pages/Sentence";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addDeck" element={<AddAnkiDeck />} />
          <Route exact path="/editDeck/:id" element={<EditAnkiDeck />} />
          <Route exact path="/viewDeck/:id" element={<ViewAnkiDeck />} />
          <Route exact path="/sentence" element={<Sentence />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;