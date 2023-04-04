import React from "react";
import PropTypes from "prop-types";

function BookingCards({
  parentsIdparents,
  parentsUsersIdusers,
  nanniesIdnannies,
  nanniesUsersIdusers,
  reservationok,
  startdate,
  enddate,
  frequence,
  flexibility,
}) {
  return (
    <div className="shadow p-4 rounded-lg bg-white">
      <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
        <div className="flex justify-center relative rounded-lg overflow-hidden h-90">
          <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>

          <div className="absolute flex justify-center bottom-0 mb-3">
            <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
              <p className="flex items-center font-medium text-gray-800">
                {parentsIdparents}
              </p>

              <p className="flex items-center font-medium text-gray-800">
                {parentsUsersIdusers}"
              </p>

              <p className="flex items-center font-medium text-gray-800">LCD</p>
            </div>
          </div>

          <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green text-sm font-medium text-white select-none">
            Disponible
          </span>
        </div>

        <div className="text-center block mt-4">
          <h2
            className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
            title="New York"
          >
            {nanniesUsersIdusers} {nanniesIdnannies}
          </h2>
          <p
            className="mt-2 text-sm text-cyan-500 line-clamp-1"
            title="New York, NY 10004, United States"
          >
            Catégorie {reservationok}
          </p>
        </div>

        <div className="mt-8">
          <p className="block text-gray-800">
            <span className="block mt-2 xl:mt-0">RAM: {startdate} Go</span>
          </p>
          <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            <span className="block mt-2 xl:mt-0">Stockage: {enddate} Go</span>
          </p>
          <p className="block text-gray-800">
            <span className="block mt-2 xl:mt-0">
              Score antutu: {frequence}
            </span>
          </p>
          <p className="block text-gray-800">
            <span className="block mt-2 xl:mt-0">
              Score antutu: {flexibility}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div className="flex items-center">
            <button
              type="button"
              className="bg-main hover:bg-main-light text-white py-2 px-4 rounded-full "
            >
              Voir plus
            </button>
          </div>

          <div className="flex justify-end">
            <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
              <span className="text-sm uppercase">$</span>
              <span className="text-lg">79</span>€
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

BookingCards.propTypes = {
  parentsIdparents: PropTypes.number.isRequired,
  parentsUsersIdusers: PropTypes.number.isRequired,
  nanniesIdnannies: PropTypes.number.isRequired,
  nanniesUsersIdusers: PropTypes.number.isRequired,
  reservationok: PropTypes.string.isRequired,
  startdate: PropTypes.number.isRequired,
  enddate: PropTypes.number.isRequired,
  frequence: PropTypes.number.isRequired,
  flexibility: PropTypes.string.isRequired,
};

export default BookingCards;
