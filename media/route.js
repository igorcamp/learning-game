document.addEventListener("DOMContentLoaded", init);

let route;

function init() {
  let params = new URLSearchParams(window.location.search);
  let r = params.get('route').split('.');
  route = routes[r[0]][r[1]];
  window.location.href = route.template + window.location.search; // Repeat source params.
}
