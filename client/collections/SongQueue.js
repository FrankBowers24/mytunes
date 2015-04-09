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
      this.at(0).play();
     // this.shift().play();  // was shift
     console.log("playFirst was called!");
    }
  }

});
