document.addEventListener("DOMContentLoaded", init);

let challenges, exercisesCount, errorsCount;
let currentChallenge = 0;
let errors = [];

function init() {
  let params = new URLSearchParams(window.location.search);

  showConf();

  exercisesCount = parseInt(params.get('exercises')) || 0;
  errorsCount = parseInt(params.get('errors')) || 0;
}

let tenses = [];
let selectedVerbs = [];

function showConf() {
  let tensesHTML = '';
  for (t of verbs.tenses) {
    tensesHTML += `<div class="pop-button" onclick="tenseClick(event, '${t}')">${t}</div>`;
  }
  document.getElementById('tenses').innerHTML = tensesHTML;

  let verbsHTML = '';
  for (v of verbs.commonVerbs) {
    verbsHTML += `<div class="pop-button" onclick="verbClick(event, '${v}')">${v}</div>`;
  }
  document.getElementById('verbs').innerHTML = verbsHTML;
}
function tenseClick(e, tense){
  e.target.classList.toggle('active');
  if (e.target.classList.contains('active')) {
    tenses.push(tense);
  }
  else {
    if (tenses.indexOf(tense) > -1) {
      tenses.splice(tenses.indexOf(tense), 1);
    }
  }
}
function verbClick(e, verb){
  e.target.classList.toggle('active');
  if (e.target.classList.contains('active')) {
    selectedVerbs.push(verb);
  }
  else {
    if (tenses.indexOf(verb) > -1) {
      selectedVerbs.splice(selectedVerbs.indexOf(verb), 1);
    }
  }
}
function configComplete() {
  challenges = [];
  for (let v of selectedVerbs) {
    for (let t of tenses) {
      challenges = [...challenges, ...verbs.verbsList[v][t]];
    }
  }
  document.getElementById('configure').classList.add('hide');
  if (document.getElementById('show-guide').checked){
    showGuide();
  } else {
    document.getElementById('challenge').classList.remove('hide');
    shuffle(challenges);
    showChallenge();
  }
}

function showGuide() {
  document.getElementById('guide').classList.remove('hide');

  let d = "";

  d += "<table><tr><th>verbo</th><th>resposta</th></tr>";
  for (let c of challenges) {
    d += "<tr><td>" + c[0] + "</td><td>" + c[1] + "</td>";
  }
  d += "</table>";

  document.getElementById('guide-content').innerHTML = d;
}

function endGuide() {
  document.getElementById('guide').classList.add('hide');
  document.getElementById('challenge').classList.remove('hide');
  shuffle(challenges);
  showChallenge();
}

function showChallenge() {
  let challenge = challenges[currentChallenge];
  let se$ = document.getElementById('sentence');
  se$.innerText = challenge[0];
  document.getElementById('response').focus();
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
  window.location.href = `complete.html?exercises=${exercisesCount}&errors=${errorsCount}`;
}

function restartCustom() {
  currentChallenge = 0;
  exercisesCount = 0;
  errors = [];
  document.getElementById('response').value = "";
  document.getElementById('challenge').classList.add('hide');
  document.getElementById('results').classList.add('hide');
  document.getElementById('configure').classList.remove('hide');
}
function addChar(char) {
  let r$ = document.getElementById('response');
  r$.value = r$.value + char;
  r$.focus();
}
