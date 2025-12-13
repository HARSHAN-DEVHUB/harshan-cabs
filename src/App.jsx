import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import BookNow from './pages/BookNow';
import Karnataka from './pages/Karnataka';
import Kerala from './pages/Kerala';
import TamilNadu from './pages/TamilNadu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <LoadingScreen />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/karnataka" element={<Karnataka />} />
          <Route path="/kerala" element={<Kerala />} />
          <Route path="/tamilnadu" element={<TamilNadu />} />
        </Routes>
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
