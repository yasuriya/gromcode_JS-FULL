export const fetchFn = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => {
    if (response.ok) return response.json();

    throw new Error('Failed to load data');
  });

export const fetchRepos = url =>
  fetch(url).then(response => {
    if (response.ok) return response.json();

    throw new Error('Failed to load data');
  });
