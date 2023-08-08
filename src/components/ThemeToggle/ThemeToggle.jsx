import PropTypes from "prop-types";

export const ThemeToggle = ({ toggleTheme }) => {
	return <button onClick={toggleTheme}>Switch Theme</button>;
};

ThemeToggle.propTypes = {
	theme: PropTypes.object.isRequired,
	toggleTheme: PropTypes.func.isRequired,
};
