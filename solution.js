// Problem 2: Secure ID Generator
function generateIDs(count) {
    let ids = [];

    for (let i = 0; i < count; i++) {
        if (i === 5) {      // skip number 5
            continue;
        }
        ids.push(`ID-${i}`);
    }

    return ids;
}