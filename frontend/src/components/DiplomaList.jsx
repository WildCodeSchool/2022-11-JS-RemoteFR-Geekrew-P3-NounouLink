import PropTypes from "prop-types";

function DiplomaList({ diplomas, onToggle }) {
  return (
    <ul>
      {diplomas.map((dipl) => (
        <li key={dipl.id}>
          <label>
            <input
              type="checkbox"
              checked={dipl.pass}
              onChange={(e) => {
                onToggle(dipl.id, e.target.checked);
              }}
            />
            {dipl.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

DiplomaList.propTypes = {
  diplomas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      pass: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default DiplomaList;
