import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio.js";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <Router>
      <Container>
        <h1>Qi Feng</h1>
        <Navbar />
        <Route exact path={["/"]} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
