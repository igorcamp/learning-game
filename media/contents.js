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
      "next": "present.complete",
      "contents": [
        ['Je', 'être', 'suis'],
        ['Tu', 'être', 'es'],
        ['Il', 'être', 'est'],
        ['Nous', 'être', 'sommes'],
        ['Vous', 'être', 'êtes'],
        ['Ils', 'être', 'sont'],
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
        ["J'", 'avoir', 'ai'],
        ['Tu', 'avoir', 'as'],
        ['Il', 'avoir', 'a'],
        ['Nous', 'avoir', 'avons'],
        ['Vous', 'avoir', 'avez'],
        ['Ils', 'avoit', 'ont'],
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
        ["J'", 'être', 'ai été'],
        ['Tu', 'être', 'as été'],
        ['Il', 'être', 'a été'],
        ['Nous', 'être', 'avons été'],
        ['Vous', 'être', 'avez été'],
        ['Ils', 'être', 'ont été'],
      ]
    },

    "complete": {"template": "complete.html"},
  }
}
