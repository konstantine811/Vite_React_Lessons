import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { TailwindClasses } from "./utils/tailwind.classes";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const setAdoptedPet = useContext(AdoptedPetContext)[1];
  const results = useQuery(["details", id], fetchPet);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <div
          className="px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
          disabled
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </div>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="bg-slate-100 shadow-lg p-8">
      <Carousel images={pet.images} />
      <h1 className="text-5xl mb-3">{pet.name}</h1>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
      </h2>
      <button
        className={TailwindClasses.blueBtn}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Adopt {pet.name}
      </button>
      {showModal ? (
        <Modal>
          <div>
            <h1 className="mb-10">Would you like to adopt {pet.name}?</h1>
            <div className="flex gap-10 justify-center">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/");
                }}
                className={TailwindClasses.blueBtn}
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className={TailwindClasses.blueBtn}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props}></Details>
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
