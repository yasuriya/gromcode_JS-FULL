const userAvatarEl = document.querySelector('.user__avatar');
const userNameEl = document.querySelector('.user__name');
const userLocationEl = document.querySelector('.user__location');

const inputUrl = document.querySelector('.name-form__input');
const showBtn = document.querySelector('.name-form__btn ');

const fetchFn = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
};

const renderData = userData => {
  const { avatar_url, name, location } = userData;

  userAvatarEl.setAttribute('src', avatar_url);
  userNameEl.textContent = name;
  userLocationEl.textContent = location ? `from ${location}` : '';
};

const onSearchUser = () => {
  const userName = inputUrl.value;
  fetchFn(userName).then(userData => renderData(userData));
};

showBtn.addEventListener('click', onSearchUser);
