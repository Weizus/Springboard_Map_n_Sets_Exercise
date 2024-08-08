// Quick Questions 
// new Set([1,1,2,2,3,4]) // set(4) {1, 2, 3, 4}

// [...new Set("referee")].join("") // ref

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// ANSWER Q3: Map(2) { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }

const hasDuplicate = (arr) => {return arr.length !== new Set(arr).size};

const vowelCount = (string) => {
    const vowelMap = new Map();
    const vowels = 'aeiou';
    check = string.toLowerCase();
    for (let i = 0; i < check.length; i++) {
        if (vowels.includes(check[i])) {
            if (vowelMap.has(check[i])) {
                vowelMap.set(check[i], vowelMap.get(check[i]) + 1);
            } else {
                vowelMap.set(check[i], 1);
            }
        }
    }
    return vowelMap;
};