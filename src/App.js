import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          {/* <Route path="/:mediaType/:id" element={<Details />} /> */}
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
