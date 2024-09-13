// Function to sort the derive traits based on the selected sorting type
function sortTraits() {
    const inputText = document.getElementById('input-field').value;
    const sortType = document.getElementById('sort-type').value;

    const outputText = process_text(inputText, undefined);

    document.getElementById('output-field').value = outputText;
}

function processText(text, strategy) {
    const endsWithNewline = text.endsWith('\n');
    if (!endsWithNewline) {
        // Add a newline to the text if it doesn't already have one
        text += '\n';
    }

    const lines = text.split('\n').filter(line => line !== ''); // Remove any empty lines
    const output = processLines(lines, strategy);

    let result = output.join('\n');
    if (endsWithNewline) {
        // Ensure the result ends with a newline if the original input did
        result += '\n';
    }

    return result;
}

function processLines(lines, strategy) {
    // Apply the strategy on the lines (for now, it just returns the lines unchanged)
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

function alphabeticalSort(traits) {
    return traits.sort();
}

module.exports = {
    processText,
    canonicalSort,
    alphabeticalSort
};
