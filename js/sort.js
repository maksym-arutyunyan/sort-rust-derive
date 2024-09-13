// Function to sort the derive traits based on the selected sorting type
function sortTraits() {
    const inputText = document.getElementById('input-field').value;
    const sortType = document.getElementById('sort-type').value;

    const outputText = process_text(inputText, undefined);

    document.getElementById('output-field').value = outputText;
}

function process_text(text, strategy) {
    return text;
}

function process(lines, strategy) {
    return lines;
}

function canonicalSort(traits) {
    // Define the canonical order of traits
    const canonicalOrder = [
        "Copy",
        "Clone",
        "Eq",
        "PartialEq",
        "Ord",
        "PartialOrd",
        "Hash",
        "Debug",
        "Display",
        "Default"
    ];

    // Create a mapping from trait to its canonical index
    const canonicalIndex = new Map(canonicalOrder.map((trait, index) => [trait, index]));

    // Sort traits by canonical index, and by trait name if indices are the same
    return traits.sort((a, b) => {
        const indexA = canonicalIndex.get(a) !== undefined ? canonicalIndex.get(a) : Number.MAX_SAFE_INTEGER;
        const indexB = canonicalIndex.get(b) !== undefined ? canonicalIndex.get(b) : Number.MAX_SAFE_INTEGER;

        return [indexA, a].toString().localeCompare([indexB, b].toString());
    });
}

module.exports = {
    canonicalSort
};
