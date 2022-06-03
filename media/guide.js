document.addEventListener("DOMContentLoaded", init);

let route, contents, exercises, errors;

function init() {
  let params = new URLSearchParams(window.location.search);
  let r = params.get('route').split('.');
  route = routes[r[0]][r[1]];
  contents = route.contents;
  document.getElementById('name').innerText = route.name;
  document.getElementById('module').innerText = route.module;
  exercises = params.get('exercises') || 0;
  errors = params.get('errors') || 0;
  showContents();
}

function showContents() {
  let se$ = document.getElementById('content');
  let d = '';
  for (let content of contents) {
    d += '<table>';
    d += '<tr><th colspan="2">' + content[0] + '</th></tr>';
    for (let i=1; i<content.length; i++){
      d += '<tr><td>' + content[i][0] + '</td>';
      d += '<td>' + content[i][1] + '</td></tr>';
    }
    d += '</table>';
  }
  se$.innerHTML = d;
}

function onNextClick() {
  window.location = `route.html?route=${route.next}&exercises=${exercises}&errors=${errors}`;
}
