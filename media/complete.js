document.addEventListener("DOMContentLoaded", init);

function init() {
  let params = new URLSearchParams(window.location.search);
  document.getElementById('exercises-count').innerText = params.get('exercises');
  document.getElementById('errors-count').innerText = params.get('errors') || 0;
}
