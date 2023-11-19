const fs = require("fs");
const path = require("path");

const themes = require("./src/styles/themes.js");

const countColorsInTheme = (theme) => {
  const colorOccurrences = JSON.stringify(theme)
    .match(/rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d(\.\d+)?\)/g)
    .reduce((acc, color) => {
      acc[color] = (acc[color] || 0) + 1;
      return acc;
    }, {});

  const sortedColors = Object.entries(colorOccurrences).sort((a, b) => b[1] - a[1]);

  sortedColors.forEach(([color, count]) => {
    const [r, g, b] = color.match(/\d{1,3}/g);
    console.log(`\x1b[38;2;${r};${g};${b}m${color} - ${count} times\x1b[0m`);
  });
};

console.log("Light Theme Colors:");
countColorsInTheme(themes.lightTheme);

console.log("\nDark Theme Colors:");
countColorsInTheme(themes.darkTheme);
