function findLongestWordLength(str) {
    return Math.max(
            ...str
                .split(" ")
                .map(word => word.length)
            );
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("Winner winner chicken dinner"));
console.log(findLongestWordLength("Don't call me by your name"));
console.log(findLongestWordLength(""));
