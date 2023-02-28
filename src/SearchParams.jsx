import { useState, useEffect } from "react";
// components
import Pet from "./Pet";
// classes
import { TailwindClasses } from "./utils/tailwind.classes";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setlocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestPets() {
    console.log("request");
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label className={TailwindClasses.labelText} htmlFor="location">
          Location
        </label>
        <div>
          <input
            className={TailwindClasses.input}
            id="location"
            onChange={(e) => setlocation(e.target.value)}
            value={location}
            placeholder="Location"
            type="text"
          />
        </div>
        <div className="my-3">
          <label className={TailwindClasses.labelText} htmlFor="animal">
            Animal
          </label>
          <select
            className={TailwindClasses.select}
            name=""
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <label className={TailwindClasses.labelText} htmlFor="breed">
            Breed
          </label>
          <select
            className={TailwindClasses.select}
            name=""
            disabled={breeds.length === 0}
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </div>
        <button type="submit" className={TailwindClasses.blueBtn}>
          Submit
        </button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
