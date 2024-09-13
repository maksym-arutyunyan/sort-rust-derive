// Import the canonicalSort function
const canonicalSort = require('../js/sort').canonicalSort;

describe('canonicalSort', () => {
    test('sorts traits according to the canonical order', () => {
        const input = ["Debug", "Clone", "PartialEq", "Unknown", "Ord"];
        const expected = ["Clone", "PartialEq", "Ord", "Debug", "Unknown"];
        const result = canonicalSort(input);
        expect(result).toEqual(expected);
    });

    // test('sorts traits with alphabetical fallback', () => {
    //     const traits = ["Foo", "Bar", "Clone", "Eq"];
    //     const sortedTraits = canonicalSort(traits);
    //     const expected = ["Clone", "Eq", "Bar", "Foo"];
        
    //     // Assert that traits not in the canonical order are sorted alphabetically
    //     expect(sortedTraits).toEqual(expected);
    // });
});
