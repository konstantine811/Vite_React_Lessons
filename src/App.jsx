import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
// compoennts
import SearchParams from "./SearchParams";
import Details from "./Details";
import AnimText from "./components/AnimText";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header className="bg-black py-7">
            <div className="container">
              <Link className="text-white" to="/">
                Adopt me
              </Link>
            </div>
          </header>
          <div className="container">
            <AnimText className="text-2xl" copy="Hello world from this" />
            <Routes>
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </div>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
