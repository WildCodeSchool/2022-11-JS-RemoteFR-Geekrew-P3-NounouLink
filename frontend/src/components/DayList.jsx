import PropTypes from "prop-types";

function DayList({ days, onToggle }) {
  return (
    <ul>
      {days.map((day) => (
        <li key={day.id} className="flex flex-row items-center ">
          <label className="px-4">
            <input
              type="checkbox"
              className="appearance-none w-10 focus:outline-none checked:bg-purple-pro checked:bg-opacity-40 h-5 bg-grey-input rounded-full before:inline-block before:rounded-full before:bg-grey-placeholder checked:before:bg-purple before:h-5 before:w-5 checked:before:translate-x-full shadow-inner transition-all duration-300 "
              checked={day.pass}
              onChange={(e) => {
                onToggle(day.id, e.target.checked);
              }}
            />
          </label>
          {day.label}
        </li>
      ))}
    </ul>
  );
}

DayList.propTypes = {
  days: PropTypes.shape.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default DayList;
