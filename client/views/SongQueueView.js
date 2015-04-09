// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({


  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add', function(song){
      this.render();
      if (this.collection.length === 1) {
        //this.collection.playFirst();  // if we call directly we will be blocked
        song.play();
      }

    },this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },




  enqueue: function(song) { //remove?
    this.collection.enqueue(song);
    this.render();
  }




});
