const userAvatarEl = document.querySelector('.user__avatar');
const userNameEl = document.querySelector('.user__name');
const userLocationEl = document.querySelector('.user__location');

export const renderData = userData => {
  const { avatar_url, name, location } = userData;

  userAvatarEl.setAttribute('src', avatar_url);
  userNameEl.textContent = name;
  userLocationEl.textContent = location ? `from ${location}` : '';
};
