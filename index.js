/**
 * This is a function which returned masked value for given parameter.
 *
 * @param {string} input - Text needs to be masked
 * @param {number} startIndex - Starting index of the text for masking
 * @param {number} endIndex - Last index of the text for masking
 * @param {string} mask - A symbol aces as the mask
 * @return {string} masked text
 *
 */
module.exports = (input, startIndex, endIndex, mask) => {
    for (let i = 0; i < input.length; i++) {
        if (i >= startIndex && i <= endIndex) {
            input = setCharAt(input, i, mask)
        }
    }
    return input
}

const setCharAt = (str, index, chr) => {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
