function parseUser(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return null;
  }
}
