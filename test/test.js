function getURL(userInput) {
  const regex = /\b[\w.-]+\.[a-z]{2,}\b/g;
  const res = userInput.match(regex);
  return res;
}
getURL("I learned a lot from exercism.org");
// => ["exercism.org"];
