import { Route, Routes } from 'react-router-dom';
import Home from './scenes/Home'
import SingleAlbum from './scenes/SingleAlbum'
import AddAlbum from './scenes/AddAlbum'
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='/albums/new' element={<AddAlbum />}/>
        <Route path='/album/ :albumId' element={<SingleAlbum />}/>
      </Routes>
    </div>
  );
}

export default App;
