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

    test('processes single text with a new line at the end', () => {
        const input = "line\n";
        const expected = "line\n";
        const result = processText(input, null); // No-op strategy
        expect(result).toEqual(expected);
    });

    test('processes single text without a new line at the end', () => {
        const input = "line";
        const expected = "line";
        const result = processText(input, null); // No-op strategy
        expect(result).toEqual(expected);
    });

    test('processes multiline text with a new line at the end', () => {
        const input = `line1
        line2
        `;
        const expected = `line1
        line2
        `;
        const result = processText(input, null); // No-op strategy
        expect(result).toEqual(expected);
    });

    test('processes multiline text without a new line at the end', () => {
        const input = `line1
        line2`;
        const expected = `line1
        line2`;
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

    test('processes single line derive', () => {
        const input = "#[derive(Debug, Clone, PartialEq, Unknown, Ord)]";
        const expected = "#[derive(Clone, PartialEq, Ord, Debug, Unknown)]";
        const result = processText(input, 'CanonicalSort');
        expect(result).toEqual(expected);
    });

    test('processes multi-line derive', () => {
        const input = `#[derive(
            Debug,
            Clone,
            PartialEq,
            Unknown,
            Ord
        )]`;
        const expected = "#[derive(Clone, PartialEq, Ord, Debug, Unknown)]";
        const result = processText(input, 'CanonicalSort');
        expect(result).toEqual(expected);
    });
});

describe('alphabeticalSort', () => {
    test('sorts traits according to the alphabetical order', () => {
        const input = ["serde::Serialize", "Unknown", "Ord", "Clone", "c", "b", "a", "C", "B", "A", "Serialize"];
        const expected = [
            "A",
            "B",
            "C",
            "Clone",
            "Ord",
            "Serialize",
            "serde::Serialize",
            "Unknown",
            "a",
            "b",
            "c",
        ];
        const result = alphabeticalSort(input);
        expect(result).toEqual(expected);
    });

    test('processes single line derive', () => {
        const input = "#[derive(serde::Serialize, Unknown, Ord, Clone, c, b, a, C, B, A, Serialize)]";
        const expected = "#[derive(A, B, C, Clone, Ord, Serialize, serde::Serialize, Unknown, a, b, c)]";
        const result = processText(input, 'AlphabeticalSort');
        expect(result).toEqual(expected);
    });

    test('processes multi-line derive', () => {
        const input = `#[derive(
            serde::Serialize,
            Unknown,
            Ord,
            Clone,
            c,
            b,
            a,
            C,
            B,
            A,
            Serialize,
        )]`;
        const expected = "#[derive(A, B, C, Clone, Ord, Serialize, serde::Serialize, Unknown, a, b, c)]";
        const result = processText(input, 'AlphabeticalSort');
        expect(result).toEqual(expected);
    });
});
