import ListItems from "./components/ListItems";
import AddItems from "./components/AddItems";
import UpdateItem from "./components/UpdateItem";

import { BrowserRouter , Routes , Route } from "react-router-dom";


function App() {

  return (

    <div className="App container mt-4">

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListItems />} />
          <Route path="/add" element={<AddItems />} />
          <Route path="/update/:id" element={<UpdateItem />} />
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
