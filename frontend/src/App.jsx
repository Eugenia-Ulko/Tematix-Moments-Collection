import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import HomeScreen from './screens/homeScreen';
import ExcursionScreen from './screens/excursionScreen';
import CartScreen from './screens/cartScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/excursion/:id" component={ExcursionScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>

      </main>
      <Footer />

    </Router>
  );
}

export default App;
