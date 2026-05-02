var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'card-badges': function (t) {
    return t.card('checklists').then(function (card) {
      if (!card.checklists || card.checklists.length === 0) {
        return [];
      }

      var checklist = card.checklists[0];
      var next = checklist.items.find(function (i) {
        return i.state === 'incomplete';
      });

      if (!next) {
        return [{
          text: '✅ All done',
          color: 'green'
        }];
      }

      return [{
        text: '☐ Next: ' + next.name,
        color: 'blue',
        refresh: 10
      }];
    });
  }
});
