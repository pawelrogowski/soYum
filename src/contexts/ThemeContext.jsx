import { createContext, useState, useEffect } from "react";
import propTypes from "prop-types";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		setTheme(newTheme);

		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;

ThemeContextProvider.propTypes = {
	children: propTypes.node,
};
