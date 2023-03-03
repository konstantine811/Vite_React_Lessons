import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="w-full">
      {!pets.length ? (
        <h1>Not Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
