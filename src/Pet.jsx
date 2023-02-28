const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <a
      href={`/details/${id}`}
      className="shadow-md p-4 flex items-center gap-3 rounded-lg"
    >
      <img className="rounded-full" width="100px" src={hero} alt={name} />
      <div className="text-center break-all">
        <h1 className="text-4xl ">{name}</h1>
        <h2 className="text-xl">{animal}</h2>
        <h2>{breed}</h2>

        <p>{location}</p>
      </div>
    </a>
  );
};

export default Pet;
