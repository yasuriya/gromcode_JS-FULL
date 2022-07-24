const getUsersBlogs = users => {
  try {
    const promises = users.map(async el => {
      const response = await fetch(`https://api.github.com/users/${el}`);
      if (!response.ok) return null;

      return response.json().then(user => user.blog);
    });

    return Promise.all(promises);
  } catch (err) {
    throw new Error('Fail');
  }
};

getUsersBlogs(['google', 'facebook', 'reactjs', 'github']).then(linksList =>
  console.log(linksList),
);
