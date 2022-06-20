document.addEventListener("DOMContentLoaded", init);

function init() {
  let params = new URLSearchParams(window.location.search);
  let exercises = parseInt(params.get('exercises') || '0');
  let errors = parseInt(params.get('errors') || '0');
  document.getElementById('exercises-count').innerText = exercises;
  document.getElementById('errors-count').innerText = errors;
  document.getElementById('score').innerText = parseInt((1 - (errors / exercises)) * 100) + "%";
}
