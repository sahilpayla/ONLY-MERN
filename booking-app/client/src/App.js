import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Hotel from './pages/hotel/Hotel';
import List from "./pages/list/List";


function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/hotels" element={<List />} />
               <Route exact path="/hotels/:id" element={<Hotel />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;