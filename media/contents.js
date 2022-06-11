let routes = {
  "present": {
    "guide1": {
      "template": "guide.html",
      "name": "Dica 1",
      "module": "Présent",
      "next": "present.exercise1",
      "contents": [
        [
          'être',
          ['Je', 'suis'],
          ['Tu', 'es'],
          ['Il/Elle/On', 'est'],
          ['Nous', 'sommes'],
          ['Vous', 'êtes'],
          ['Ils/Elles', 'sont'],
        ]
      ]
    },

    "exercise1": {
      "template": "exercise.html",
      "next": "present.guide2",
      "contents": [
        [ 'Je + être (présent)', "Je suis" ],
        [ 'Tu + être (présent)', 'Tu es' ],
        [ 'Il + être (présent)', 'Il est' ],
        [ 'Elle + être (présent)', 'Elle est' ],
        [ 'On + être (présent)', 'On est' ],
        [ 'Nous + être (présent)', 'Nous sommes' ],
        [ 'Vous + être (présent)', 'Vous êtes' ],
        [ 'Ils + être (présent)', 'Ils sont' ],
        [ 'Elles + être (présent)', 'Elles sont' ]
      ]
    },

    "guide2": {
      "template": "guide.html",
      "name": "Dica 2",
      "module": "Présent",
      "next": "present.exercise2",
      "contents": [
        [
          'avoir',
          ["J'", 'ai'],
          ['Tu', 'as'],
          ['Il/Elle/On', 'a'],
          ['Nous', 'avons'],
          ['Vous', 'avez'],
          ['Ils/Elles', 'ont'],
        ],
      ]
    },

    "exercise2": {
      "template": "exercise.html",
      "next": "present.complete",
      "contents": [
        [ 'Je + avoir (présent)', "J'ai" ],
        [ 'Tu + avoir (présent)', 'Tu as' ],
        [ 'Il + avoir (présent)', 'Il a' ],
        [ 'Elle + avoir (présent)', 'Elle a' ],
        [ 'On + avoir (présent)', 'On a' ],
        [ 'Nous + avoir (présent)', 'Nous avons' ],
        [ 'Vous + avoir (présent)', 'Vous avez' ],
        [ 'Ils + avoir (présent)', 'Ils ont' ],
        [ 'Elles + avoir (présent)', 'Elles ont' ]
      ]
    },

    "exercise3": {
      "template": "exercise.html",
      "next": "present.complete",
      "contents": [
        // avoir
        ["J'", 'avoir', 'ai'],
        ['Tu', 'avoir', 'as'],
        ['Il', 'avoir', 'a'],
        ['Nous', 'avoir', 'avons'],
        ['Vous', 'avoir', 'avez'],
        ['Ils', 'avoir', 'ont'],
        // être
        ['Je', 'être', 'suis'],
        ['Tu', 'être', 'es'],
        ['Il', 'être', 'est'],
        ['Nous', 'être', 'sommes'],
        ['Vous', 'être', 'êtes'],
        ['Ils', 'être', 'sont'],
        // aller
        ['Je', 'aller', 'vais'],
        ['Tu', 'aller', 'vas'],
        ['Il', 'aller', 'va'],
        ['Nous', 'aller', 'allons'],
        ['Vous', 'aller', 'allez'],
        ['Ils', 'aller', 'vont'],
        // pouvoir
        ['Je', 'pouvoir', 'peux'],
        ['Tu', 'pouvoir', 'peux'],
        ['Il', 'pouvoir', 'peut'],
        ['Nous', 'pouvoir', 'pouvons'],
        ['Vous', 'pouvoir', 'pouvez'],
        ['Ils', 'pouvoir', 'peuvent'],
        // vouloir
        ['Je', 'vouloir', 'veux'],
        ['Tu', 'vouloir', 'veux'],
        ['Il', 'vouloir', 'veut'],
        ['Nous', 'vouloir', 'voulons'],
        ['Vous', 'vouloir', 'voulez'],
        ['Ils', 'vouloir', 'veulent'],
        // faire
        ['Je', 'faire', 'fais'],
        ['Tu', 'faire', 'fais'],
        ['Il', 'faire', 'fait'],
        ['Nous', 'faire', 'faisons'],
        ['Vous', 'faire', 'faites'],
        ['Ils', 'faire', 'font'],
      ]
    },

    "complete": {"template": "complete.html"},
  },

  "passecompose": {
    "guide1": {
      "template": "guide.html",
      "name": "Dica 1",
      "module": "Passé Composé",
      "next": "passecompose.exercise1",
      "contents": [
        [
          'être',
          ["J'", 'ai été'],
          ['Tu', 'as été'],
          ['Il/Elle/On', 'a été'],
          ['Nous', 'avons été'],
          ['Vous', 'avez été'],
          ['Ils/Elles', 'ont été'],
        ]
      ]
    },

    "exercise1": {
      "template": "exercise.html",
      "next": "passecompose.complete",
      "contents": [
        [ 'Je + être (passé composé)', "J'ai été" ],
        [ 'Tu + être (passé composé)', 'Tu as été' ],
        [ 'Il + être (passé composé)', 'Il a été' ],
        [ 'Elle + être (passé composé)', 'Elle a été' ],
        [ 'On + être (passé composé)', 'On a été' ],
        [ 'Nous + être (passé composé)', 'Nous avons été' ],
        [ 'Vous + être (passé composé)', 'Vous avez été' ],
        [ 'Ils + être (passé composé)', 'Ils ont été' ],
        [ 'Elles + être (passé composé)', 'Elles ont été' ]
      ]
    },

    "complete": {"template": "complete.html"},
  },

  "words": {
    "exercise1": {
      "template": "exercise.html",
      "next": "words.complete",
      "name": "Traduza as palavras a seguir",
      "limit": 10,
      "contents": [
      ]
    },

    "complete": {"template": "complete.html"},
  },

  "desafio1": {
    "exercise1": {
      "template": "exercise.html",
      "next": "words.complete",
      "name": "Conjugue os verbos indicados",
      "contents": [
        ['Je + être (présent)', 'Je suis'],
        ['Tu + être (présent)', 'Tu es'],
        ['Il + être (présent)', 'Il est'],
        ['Elle + être (présent)', 'Elle est'],
        ['On + être (présent)', 'On est'],
        ['Nous + être (présent)', 'Nous sommes'],
        ['Vous + être (présent)', 'Vous êtes'],
        ['Ils + être (présent)', 'Ils sont'],
        ['Elles + être (présent)', 'Elles sont'],
        ['Je + être (passé composé)', "J'ai été"],
        ['Tu + être (passé composé)', 'Tu as été'],
        ['Il + être (passé composé)', 'Il a été'],
        ['Elle + être (passé composé)', 'Elle a été'],
        ['On + être (passé composé)', 'On a été'],
        ['Nous + être (passé composé)', 'Nous avons été'],
        ['Vous + être (passé composé)', 'Vous avez été'],
        ['Ils + être (passé composé)', 'Ils ont été'],
        ['Elles + être (passé composé)', 'Elles ont été'],
        ['Je + être (imparfait)', "J'étais"],
        ['Tu + être (imparfait)', 'Tu étais'],
        ['Il + être (imparfait)', 'Il était'],
        ['Elle + être (imparfait)', 'Elle était'],
        ['On + être (imparfait)', 'On était'],
        ['Nous + être (imparfait)', 'Nous étions'],
        ['Vous + être (imparfait)', 'Vous étiez'],
        ['Ils + être (imparfait)', 'Ils étaient'],
        ['Elles + être (imparfait)', 'Elles étaient'],
        ['Je + être (plus que parfait)', "J'avais été"],
        ['Tu + être (plus que parfait)', 'Tu avais été'],
        ['Il + être (plus que parfait)', 'Il avait été'],
        ['Elle + être (plus que parfait)', 'Elle avait été'],
        ['On + être (plus que parfait)', 'On avait été'],
        ['Nous + être (plus que parfait)', 'Nous avions été'],
        ['Vous + être (plus que parfait)', 'Vous aviez été'],
        ['Ils + être (plus que parfait)', 'Ils avaient été'],
        ['Elles + être (plus que parfait)', 'Elles avaient été'],
        ['Je + avoir (présent)', "J'ai"],
        ['Tu + avoir (présent)', 'Tu as'],
        ['Il + avoir (présent)', 'Il a'],
        ['Elle + avoir (présent)', 'Elle a'],
        ['On + avoir (présent)', 'On a'],
        ['Nous + avoir (présent)', 'Nous avons'],
        ['Vous + avoir (présent)', 'Vous avez'],
        ['Ils + avoir (présent)', 'Ils ont'],
        ['Elles + avoir (présent)', 'Elles ont'],
        ['Je + avoir (passé composé)', "J'ai eu"],
        ['Tu + avoir (passé composé)', 'Tu as eu'],
        ['Il + avoir (passé composé)', 'Il a eu'],
        ['Elle + avoir (passé composé)', 'Elle a eue'],
        ['On + avoir (passé composé)', 'On a eu'],
        ['Nous + avoir (passé composé)', 'Nous avons eu'],
        ['Vous + avoir (passé composé)', 'Vous avez eu'],
        ['Ils + avoir (passé composé)', 'Ils ont eu'],
        ['Elles + avoir (passé composé)', 'Elles ont eue'],
        ['Je + avoir (imparfait)', "J'avais"],
        ['Tu + avoir (imparfait)', 'Tu avais'],
        ['Il + avoir (imparfait)', 'Il avait'],
        ['Elle + avoir (imparfait)', 'Elle avait'],
        ['On + avoir (imparfait)', 'On avait'],
        ['Nous + avoir (imparfait)', 'Nous avions'],
        ['Vous + avoir (imparfait)', 'Vous aviez'],
        ['Ils + avoir (imparfait)', 'Ils avaient'],
        ['Elles + avoir (imparfait)', 'Elles avaient'],
        ['Je + avoir (plus que parfait)', "J'avais eu"],
        ['Tu + avoir (plus que parfait)', 'Tu avais eu'],
        ['Il + avoir (plus que parfait)', 'Il avait eu'],
        ['Elle + avoir (plus que parfait)', 'Elle avait eue'],
        ['On + avoir (plus que parfait)', 'On avait eu'],
        ['Nous + avoir (plus que parfait)', 'Nous avions eu'],
        ['Vous + avoir (plus que parfait)', 'Vous aviez eu'],
        ['Ils + avoir (plus que parfait)', 'Ils avaient eu'],
        ['Elles + avoir (plus que parfait)', 'Elles avaient eue']
      ]
    },
    "complete": {"template": "complete.html"},
  }
}
