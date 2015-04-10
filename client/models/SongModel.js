// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    if(!this.get('playCount')) {
      this.set('playCount',0);
    }
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount',this.get('playCount') + 1);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
    // trigger an 'enqueue' event, AppModel should be listening for it
  },
  dequeue: function() {
    // trigger a 'dequeue' event, AppModel should be listening for it
    this.trigger('dequeue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  }

});
