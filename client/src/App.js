import { BrowserRouter, Routes,Route } from "react-router-dom";
import ShowBookList from "./components/ShowBookList";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";
import ShowBookDetails from "./components/ShowBookDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route exact path='/' element={<ShowBookList/>} />
          <Route path = '/create-book' element={<CreateBook/>}/>
          <Route path="/edit-book/:id" element = {<UpdateBook/>}/>
          <Route path='/show-book/:id' element={<ShowBookDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
