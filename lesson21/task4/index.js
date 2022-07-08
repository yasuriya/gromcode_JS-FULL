export function getTitle() {
  const titleText = document.querySelector('.title').textContent;
  return titleText;
}
console.log(getTitle());

export function getDescription() {
  const descriptionText = document.querySelector('.about').innerText;
  return descriptionText;
}
console.log(getDescription());

export function getPlans() {
  const plansText = document.querySelector('.plans').innerHTML;
  return plansText;
}
console.log(getPlans());

export function getGoal() {
  const goalsText = document.querySelector('.goal').outerHTML;
  return goalsText;
}
console.log(getGoal());
