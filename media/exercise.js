document.addEventListener("DOMContentLoaded", init);

let challenges, exercisesCount, errorsCount;
let currentChallenge = 0;

function init() {
  let params = new URLSearchParams(window.location.search);
  let r = params.get('route').split('.');
  route = routes[r[0]][r[1]];
  challenges = route.contents;
  exercisesCount = parseInt(params.get('exercises')) || 0;
  errorsCount = parseInt(params.get('errors')) || 0;

  shuffle(challenges);
  showChallenge();
}

function showChallenge() {
  let challenge = challenges[currentChallenge];
  let se$ = document.getElementById('sentence');
  se$.innerText = challenge[0] + "________(" + challenge[1] + ")";
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
    if (event.target.value === challenges[currentChallenge][2]) {
      ch$.classList.add('correct');
      setTimeout(()=>{ch$.classList.remove('correct');},3000);
      currentChallenge++;
      exercisesCount++;
      if (currentChallenge < challenges.length) {
        showChallenge();
      } else {
        alert("Muito bem! Você acertou tudo!");
        window.location.href = `route.html?route=${route.next}&exercises=${exercisesCount}&errors=${errorsCount}`;
      }
    } else {
      errorsCount++;
      ch$.classList.add('wrong');
      setTimeout(()=>{ch$.classList.remove('wrong');},3000);
    }
    event.target.value = '';
  }
}
