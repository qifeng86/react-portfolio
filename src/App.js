import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
