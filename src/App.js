import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux'; 
import store from './Function/Store'; 
import Home from './components/Home';
import Proudact from './components/AboutProudact';
import Card from './components/Card'
import Header from './components/Header';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path="/"   element={<Home/>} />
          <Route path="/Proudact/:id" element={<Proudact/>} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
