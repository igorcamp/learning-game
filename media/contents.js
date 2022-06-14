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
        ['Je + être (présent)', "Je suis"],
        ['Tu + être (présent)', 'Tu es'],
        ['Il + être (présent)', 'Il est'],
        ['Elle + être (présent)', 'Elle est'],
        ['On + être (présent)', 'On est'],
        ['Nous + être (présent)', 'Nous sommes'],
        ['Vous + être (présent)', 'Vous êtes'],
        ['Ils + être (présent)', 'Ils sont'],
        ['Elles + être (présent)', 'Elles sont']
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
      "next": "present.guide3",
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

    "guide3": {
      "template": "guide.html",
      "name": "Dica 3",
      "module": "Présent",
      "next": "present.exercise3",
      "contents": [
        [
          'aller',
          ['Je', 'vais'],
          ['Tu', 'vas'],
          ['Il/Elle/On', 'va'],
          ['Nous', 'allons'],
          ['Vous', 'allez'],
          ['Ils/Elles', 'vont'],
        ],
        [
          'pouvoir',
          ['Je', 'peux'],
          ['Tu', 'peux'],
          ['Il/Elle/On', 'peut'],
          ['Nous', 'pouvons'],
          ['Vous', 'pouvez'],
          ['Ils/Elles', 'peuvent'],
        ],
        [
          'vouloir',
          ['Je', 'veux'],
          ['Tu', 'veux'],
          ['Il/Elle/On', 'veut'],
          ['Nous', 'voulons'],
          ['Vous', 'voulez'],
          ['Ils/Elles', 'veulent'],
        ],
        [
          'faire',
          ['Je', 'fais'],
          ['Tu', 'fais'],
          ['Il/Elle/On', 'fait'],
          ['Nous', 'faisons'],
          ['Vous', 'faites'],
          ['Ils/Elles', 'font'],
        ]
      ]
    },

    "exercise3": {
      "template": "exercise.html",
      "next": "present.guide4",
      "contents": [
        // aller
        ['Je + aller (présent)', 'Je vais'],
        ['Tu + aller (présent)', 'Tu vas'],
        ['Il + aller (présent)', 'Il va'],
        ['Nous + aller (présent)', 'Nous allons'],
        ['Vous + aller (présent)', 'Vous allez'],
        ['Ils + aller (présent)', 'Ils vont'],
        // pouvoir
        ['Je + pouvoir (présent)', 'Je peux'],
        ['Tu + pouvoir (présent)', 'Tu peux'],
        ['Elle + pouvoir (présent)', 'Elle peut'],
        ['Nous + pouvoir (présent)', 'Nous pouvons'],
        ['Vous + pouvoir (présent)', 'Vous pouvez'],
        ['Ils + pouvoir (présent)', 'Ils peuvent'],
        // vouloir
        ['Je + vouloir (présent)', 'Je veux'],
        ['Tu + vouloir (présent)', 'Tu veux'],
        ['On + vouloir (présent)', 'On veut'],
        ['Nous + vouloir (présent)', 'Nous voulons'],
        ['Vous + vouloir (présent)', 'Vous voulez'],
        ['Elles + vouloir (présent)', 'Elles veulent'],
        // faire
        ['Je + faire (présent)', 'Je fais'],
        ['Tu + faire (présent)', 'Tu fais'],
        ['On + faire (présent)', 'On fait'],
        ['Nous + faire (présent)', 'Nous faisons'],
        ['Vous + faire (présent)', 'Vous faites'],
        ['Elles + faire (présent)', 'Elles font'],
      ]
    },

    "guide4": {
      "template": "guide.html",
      "name": "Dica 4",
      "module": "Présent",
      "next": "present.exercise4",
      "contents": [
        [
          'prendre',
          ['Je', 'prends'],
          ['Tu', 'prends'],
          ['Il/Elle/On', 'prend'],
          ['Nous', 'prenons'],
          ['Vous', 'prenez'],
          ['Ils/Elles', 'prennent'],
        ],
        [
          'devoir',
          ['Je', 'dois'],
          ['Tu', 'dois'],
          ['Il/Elle/On', 'doit'],
          ['Nous', 'devons'],
          ['Vous', 'devez'],
          ['Ils/Elles', 'doivent'],
        ],
        [
          'mettre',
          ['Je', 'mets'],
          ['Tu', 'mets'],
          ['Il/Elle/On', 'met'],
          ['Nous', 'mettons'],
          ['Vous', 'mettez'],
          ['Ils/Elles', 'mettent'],
        ],
        [
          'venir',
          ['Je', 'viens'],
          ['Tu', 'viens'],
          ['Il/Elle/On', 'vient'],
          ['Nous', 'venons'],
          ['Vous', 'venez'],
          ['Ils/Elles', 'viennent'],
        ]
      ]
    },

    "exercise4": {
      "template": "exercise.html",
      "next": "present.complete",
      "contents": [
        ['Je + prendre (présent)', 'Je prends'],
        ['Tu + prendre (présent)', 'Tu prends'],
        ['Il + prendre (présent)', 'Il prend'],
        ['Nous + prendre (présent)', 'Nous prenons'],
        ['Vous + prendre (présent)', 'Vous prenez'],
        ['Ils + prendre (présent)', 'Ils prennent'],

        ['Je + devoir (présent)', 'Je dois'],
        ['Tu + devoir (présent)', 'Tu dois'],
        ['Il + devoir (présent)', 'Il doit'],
        ['Nous + devoir (présent)', 'Nous devons'],
        ['Vous + devoir (présent)', 'Vous devez'],
        ['Ils + devoir (présent)', 'Ils doivent'],

        ['Je + mettre (présent)', 'Je mets'],
        ['Tu + mettre (présent)', 'Tu mets'],
        ['Il + mettre (présent)', 'Il met'],
        ['Nous + mettre (présent)', 'Nous mettons'],
        ['Vous + mettre (présent)', 'Vous mettez'],
        ['Ils + mettre (présent)', 'Ils mettent'],

        ['Je + venir (présent)', 'Je viens'],
        ['Tu + venir (présent)', 'Tu viens'],
        ['Il + venir (présent)', 'Il vient'],
        ['Nous + venir (présent)', 'Nous venons'],
        ['Vous + venir (présent)', 'Vous venez'],
        ['Ils + venir (présent)', 'Ils viennent'],
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

  "participepasse": {
    "guide1": {
      "template": "guide.html",
      "name": "Dica 1",
      "module": "Participe Passé",
      "next": "participepasse.exercise1",
      "contents": [
        [
          'Participe Passé',
          ['| Verbe |', '| Participe |'],
          ["être", "été"],
          ["avoir", "eu"],
          ["apprendre", "appris"],
          ["boire", "bu"],
          ["comprendre", "compris"],
          ["connaître", "connu"],
          ["couvrir", "couvert"],
          ["croire", "cru"],
          ["devoir", "dû"],
          ["dire", "dit"],
          ["ecrire", "ecrit"],
          ["faire", "fait"],
          ["lire", "lu"],
          ["mettre", "mis"],
          ["mourir", "mort"],
          ["naitre", "né"],
          ["offrir", "offert"],
          ["ouvrir", "ouvert"],
          ["paraître", "paru"],
          ["peindre", "peint"],
          ["pouvoir", "pu"],
          ["prendre", "pris"],
          ["recevoir", "reçu"],
          ["savoir", "su"],
          ["souffrir", "souffert"],
          ["suivre", "suivi"],
          ["venir", "venu"],
          ["vivre", "vécu"],
          ["voir", "vu"],
          ["vouloir", "voulu"],
        ]
      ]
    },

    "exercise1": {
      "template": "exercise.html",
      "next": "participepasse.complete",
      "contents": [
        ["Apprendre (Participe Passé)" , "appris"],
        ["Avoir (Participe Passé)" , "eu"],
        ["Boire (Participe Passé)" , "bu"],
        ["Comprendre (Participe Passé)" , "compris"],
        ["Connaître (Participe Passé)" , "connu"],
        ["Couvrir (Participe Passé)" , "couvert"],
        ["Croire (Participe Passé)" , "cru"],
        ["Devoir (Participe Passé)" , "dû"],
        ["Dire (Participe Passé)" , "dit"],
        ["Ecrire (Participe Passé)" , "ecrit"],
        ["Être (Participe Passé)" , "été"],
        ["Faire (Participe Passé)" , "fait"],
        ["Lire (Participe Passé)" , "lu"],
        ["Mettre (Participe Passé)" , "mis"],
        ["Mourir (Participe Passé)" , "mort"],
        ["Naitre (Participe Passé)" , "né"],
        ["Offrir (Participe Passé)" , "offert"],
        ["Ouvrir (Participe Passé)" , "ouvert"],
        ["Paraître (Participe Passé)" , "paru"],
        ["Peindre (Participe Passé)" , "peint"],
        ["Pouvoir (Participe Passé)" , "pu"],
        ["Prendre (Participe Passé)" , "pris"],
        ["Recevoir (Participe Passé)" , "reçu"],
        ["Savoir (Participe Passé)" , "su"],
        ["Souffrir (Participe Passé)" , "souffert"],
        ["Suivre (Participe Passé)" , "suivi"],
        ["Venir (Participe Passé)" , "venu"],
        ["Vivre (Participe Passé)" , "vécu"],
        ["Voir (Participe Passé)" , "vu"],
        ["vouloir (Participe Passé)" , "voulu"],
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
        ['Elle + avoir (passé composé)', 'Elle a eu'],
        ['On + avoir (passé composé)', 'On a eu'],
        ['Nous + avoir (passé composé)', 'Nous avons eu'],
        ['Vous + avoir (passé composé)', 'Vous avez eu'],
        ['Ils + avoir (passé composé)', 'Ils ont eu'],
        ['Elles + avoir (passé composé)', 'Elles ont eu'],
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
        ['Elle + avoir (plus que parfait)', 'Elle avait eu'],
        ['On + avoir (plus que parfait)', 'On avait eu'],
        ['Nous + avoir (plus que parfait)', 'Nous avions eu'],
        ['Vous + avoir (plus que parfait)', 'Vous aviez eu'],
        ['Ils + avoir (plus que parfait)', 'Ils avaient eu'],
        ['Elles + avoir (plus que parfait)', 'Elles avaient eu']
      ]
    },
    "complete": {"template": "complete.html"},
  }
}
