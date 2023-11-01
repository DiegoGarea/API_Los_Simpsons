import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LosSimpsonsProvider from './context/LosSimpsonsProvider';
import {
  Home,
  Navbar,
  Search,
  SearchChar,
  SingleChar,
  Footer,
} from './components';

export default function App() {
  return (
    <>
      <LosSimpsonsProvider>
        <BrowserRouter>
          <Navbar />
          <Search />
          <Routes>
            <Route path="/API_Los_Simpsons/" element={<Home />} />
            <Route path="/search/find/:name" element={<SearchChar />} />
            <Route path="/character/:id" element={<SingleChar />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LosSimpsonsProvider>
    </>
  );
}
