// Import the canonicalSort function
const processText = require('../js/sort').processText;
const canonicalSort = require('../js/sort').canonicalSort;
const alphabeticalSort = require('../js/sort').alphabeticalSort;

describe('processText', () => {
    test('handles empty text correctly', () => {
        const input = "";
        const expected = "";
        const result = processText(input, null); // No-op strategy
        expect(result).toEqual(expected);
    });

    test('processes text with a new line at the end', () => {
        const input = "line1\nline2\n";
        const expected = "line1\nline2\n";
        const result = processText(input, null); // No-op strategy
        expect(result).toEqual(expected);
    });

    test('processes text without a new line at the end', () => {
        const input = "line1\nline2";
        const expected = "line1\nline2";
        const result = processText(input, null); // No-op strategy
        expect(result).toEqual(expected);
    });
});

describe('canonicalSort', () => {
    test('sorts traits according to the canonical order', () => {
        const input = ["Debug", "Clone", "PartialEq", "Unknown", "Ord"];
        const expected = ["Clone", "PartialEq", "Ord", "Debug", "Unknown"];
        const result = canonicalSort(input);
        expect(result).toEqual(expected);
    });
});

describe('alphabeticalSort', () => {
    test('sorts traits according to the alphabetical order', () => {
        const input = ["Unknown", "Ord", "Clone"];
        const expected = ["Clone", "Ord", "Unknown"];
        const result = alphabeticalSort(input);
        expect(result).toEqual(expected);
    });
});
