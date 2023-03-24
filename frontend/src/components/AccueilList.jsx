import PropTypes from "prop-types";

function AccueilList({ accueil, onToggle }) {
  return (
    <ul>
      {accueil.map((acc) => (
        <li key={acc.id}>
          <label>
            <input
              type="checkbox"
              checked={acc.pass}
              onChange={(e) => {
                onToggle(acc.id, e.target.checked);
              }}
            />
            {acc.label}
          </label>
        </li>
      ))}
    </ul>
  );
}

AccueilList.propTypes = {
  accueil: PropTypes.shape.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AccueilList;
