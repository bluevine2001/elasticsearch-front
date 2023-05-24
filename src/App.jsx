import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";

function App() {
  const [coffeeList, setCoffeeList] = useState([]);
  const getListhandler = (list) => {
    setCoffeeList(list);
    console.log("was reloaded");
  };
  return (
    <div>
      <Navbar />
      <Filters getlist={getListhandler} />
      <div className="flex flex-wrap justify-center">
        {coffeeList.map((coffee) => (
          <>
            <div
              className="card w-1/4 shadow-xl p-6 m-4 hover:bg-cyan-500 hover:text-white duration-300"
              key={coffee._id}
            >
              <div className="card-title mx-auto" key={coffee._id}>
                <a href={coffee._source.url} target="_blank">
                  {coffee._source.coffeeName}
                </a>
              </div>
              <div className="card-body">
                <p>Note : {coffee._source.rating}</p>
                <p>Nombre d'avis : {coffee._source.rating_count}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
