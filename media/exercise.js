document.addEventListener("DOMContentLoaded", init);

let challenges, exercisesCount, errorsCount;
let currentChallenge = 0;
let errors = [];

function init() {
  let params = new URLSearchParams(window.location.search);
  let r = params.get('route').split('.');
  route = routes[r[0]][r[1]];
  challenges = route.contents;
  if (route.name) {
    document.getElementById('name').innerText = route.name;
  }
  exercisesCount = parseInt(params.get('exercises')) || 0;
  errorsCount = parseInt(params.get('errors')) || 0;

  shuffle(challenges);
  if (route.limit) {
    challenges = challenges.splice(0, route.limit);
  }
  showChallenge();
}

function showChallenge() {
  let challenge = challenges[currentChallenge];
  let se$ = document.getElementById('sentence');
  se$.innerText = challenge[0];
  document.getElementById('progress').innerText = (currentChallenge + 1) + ' de ' + challenges.length;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function responseKeyUp(event) {
  if (event.key === 'Enter') {
    let ch$ = document.getElementById('challenge');
    ch$.classList.remove('correct');
    ch$.classList.remove('wrong');
    if (event.target.value.toLowerCase() === challenges[currentChallenge][1].toLowerCase()) {
      ch$.classList.add('correct');
      setTimeout(()=>{
        ch$.classList.remove('correct');
        event.target.value = '';
        nextQuestion();
      },800);
    } else {
      errorsCount++;
      errors.push([event.target.value, ...challenges[currentChallenge]]);
      ch$.classList.add('wrong');
      setTimeout(()=>{
        ch$.classList.remove('wrong');
        event.target.value = '';
        nextQuestion();
      },800);
    }
  }
}

function nextQuestion() {
  currentChallenge++;
  exercisesCount++;
  if (currentChallenge < challenges.length) {
    showChallenge();
  } else {
    document.getElementById('challenge').classList.add('hide');
    document.getElementById('results').classList.remove('hide');
    if (errors.length === 0){
      document.getElementById('results-message').innerText = 'Parabéns, você acertou tudo!';
    } else {
      let d = "<p>Veja aqui o que errou:</p>";
      d += "<table><tr><th></th><th>resposta correta</th><th>Sua resposta</th></tr>";
      for (let err of errors) {
        d += "<tr><td>" + err[1] + "</td><td>" + err[2] + "</td><td>" + err[0] + "</td>";
      }
      d += "</table>";
      document.getElementById('results-message').innerHTML = d;
    }
  }
}

function onNextButton() {
  window.location.href = `route.html?route=${route.next}&exercises=${exercisesCount}&errors=${errorsCount}`;
}
