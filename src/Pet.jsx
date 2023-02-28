const Pet = (props) => {
  return (
    <div className="shadow-md p-4 flex flex-col items-center gap-3 rounded-lg">
      <h1 className="text-4xl">{props.name}</h1>
      <h2 className="text-xl">{props.animal}</h2>
      <h2>{props.breed}</h2>
      <img className="rounded-xl" width="100px" src={props.images} alt="" />
      <p>{props.location}</p>
    </div>
  );
};

export default Pet;
