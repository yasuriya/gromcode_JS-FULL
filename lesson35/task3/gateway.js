export const fetchFn = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(response => {
    if (response.ok) {
      response.json();
    }

    throw new Error('Failed to load data');
  });
};

export const fetchRepos = url =>
  fetch(url).then(response => {
    if (response.ok) {
      response.json();
    }

    throw new Error('Failed to load data');
  });
