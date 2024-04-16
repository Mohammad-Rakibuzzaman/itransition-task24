function findLongestCommonSubstring(arr) {
    if (arr.length === 0) return "";
    const firstString = arr[0];
    let longestCommonSubstring = "";
    for (let i = 0; i < firstString.length; i++) {
        for (let j = i + 1; j <= firstString.length; j++) {
            const substring = firstString.substring(i, j);
            if (arr.every(str => str.includes(substring)) && substring.length > longestCommonSubstring.length) {
                longestCommonSubstring = substring;
            }
        }
    }
    return longestCommonSubstring;
}

const input = process.argv.slice(2);
const longestCommonSubstring = findLongestCommonSubstring(input);
console.log(longestCommonSubstring);
