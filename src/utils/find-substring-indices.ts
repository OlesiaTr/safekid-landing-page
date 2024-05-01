export const findSubstringIndices = (fullString: string, substring: string) => {
  const startIndex = fullString.indexOf(substring);
  const endIndex = startIndex + substring.length;
  return { startIndex, endIndex };
};
