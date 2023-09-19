/**
 * Shortens a string to a maximum length and appends specified text if needed.
 *
 * @param {string} inputString - The input string to be shortened.
 * @param {number} maxLength - The maximum length allowed for the string.
 * @param {string} appendText - The text to append if the string is shortened.
 * @returns {string} The shortened string.
 */

export const shortenString = (inputString, maxLength, appendText) => {
  if (inputString.length > maxLength) {
    return inputString.slice(0, maxLength - appendText.length) + appendText;
  }
  return inputString;
};
