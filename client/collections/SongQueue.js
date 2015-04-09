// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', function() {
      console.log('song queue ended');
      this.shift();
      if(this.length > 0) {
        this.playFirst();
      }
    },this);

    this.on('add', function(){
      if (this.length === 1) {
        // this.collection.playFirst();  // if we call directly we will be blocked
        this.playFirst();
      }
    },this);

    this.on('dequeue', function(song) {
      this.dequeue(song);
    });


  },

  enqueue: function(song){
    this.push(song);
  },

  dequeue: function(song) {
  	this.remove(song);
  },

  // NEW NEW
  playFirst: function() {
  	if (this.length > 0) {
      this.at(0).play();
     // this.shift().play();  // was shift
     console.log("playFirst was called!");
    }
  }

});
