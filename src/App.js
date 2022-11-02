
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './scenes/Home'
import SingleAlbum from './scenes/SingleAlbum'
import AddAlbum from './scenes/AddAlbum'
import './assest/master.css'

function App() {
  return (
    <div className="App">
      test
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<h1> test</h1>} />  */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/albums/new" element={<AddAlbum />} /> */}
          {/* <Route path="/albums/:albumId" element={<SingleAlbum />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
