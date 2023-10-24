/**
 * Shortens a string to a maximum length and appends specified text if needed.
 *
 * @param {String} inputString - The input string to be shortened.
 * @param {Number} maxLength - The maximum length allowed for the string.
 * @param {String} appendText - The text to append if the string is shortened.
 * @returns {String} The shortened string.
 */

export const shortenString = (inputString, maxLength, appendText) => {
  if (inputString.length > maxLength) {
    return inputString.slice(0, maxLength - appendText.length) + appendText;
  }
  return inputString;
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The input string with the first letter capitalized.
 */

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncates a given input string by keeping a specified number of sentences.
 * @param {string} inputString - The input string to truncate.
 * @param {number} numSentences - The number of sentences to keep.
 * @returns {string} The truncated string.
 */
export const truncateSentences = (inputString, numSentences) => {
  const regex = new RegExp(`^((.*?[.?!]\\s*){${numSentences}})(.*)$`);
  const truncatedString = inputString.replace(regex, (match, sentences) => {
    return `${sentences}...`;
  });
  return truncatedString;
};

export const limitTextLength = (str, maxSentences, maxCharacters, appendText) => {
  return shortenString(truncateSentences(str, maxSentences), maxCharacters, appendText);
};
