// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function(song){
    this.push(song);
  },

  dequeue: function() {
  	console.log('SongQueue.dequeue() called');
  },

  // NEW NEW
  playFirst: function() {
  	if (this.length >= 1) {
     this.shift().play();  // was shift
    }
  }

});
