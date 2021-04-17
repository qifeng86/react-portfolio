import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
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
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
