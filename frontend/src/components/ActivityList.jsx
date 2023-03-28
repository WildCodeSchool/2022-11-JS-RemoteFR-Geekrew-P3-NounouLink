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
  activity: PropTypes.shape.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ActivityList;
