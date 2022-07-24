import { fetchFn, fetchRepos } from './gateway.js';
import { renderData } from './render.js';
import { renderRepos, clearRepos } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderData(defaultUser);

const inputUrl = document.querySelector('.name-form__input');
const showBtn = document.querySelector('.name-form__btn ');

const onSearchUser = async () => {
  showSpinner();
  clearRepos();

  const userName = inputUrl.value;
  try {
    const userData = await fetchFn(userName);
    renderData(userData);
    const reposList = await fetchRepos(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
};

showBtn.addEventListener('click', onSearchUser);
