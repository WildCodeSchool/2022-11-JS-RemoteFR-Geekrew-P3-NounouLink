import PropTypes from "prop-types";

function ActivityList({ activity, onToggle }) {
  return (
    <ul>
      {activity.map((act) => (
        <li key={act.id}>
          <label>
            <input
              type="checkbox"
              checked={act.pass}
              onChange={(e) => {
                onToggle(act.id, e.target.checked);
              }}
            />
            {act.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

ActivityList.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      pass: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ActivityList;
