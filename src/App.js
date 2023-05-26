import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Layout from './views/Layout';
import Home from './views/Home';
import NoPage from './views/NoPage';
import Video from './views/Video';
import AddVideo from './views/AddVideo';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='video/:id' element={<Video />} />
          <Route path='video/add' element={<AddVideo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
