// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());

    if(localStorage.myTunesQueue){
      this.set('songQueue', new SongQueue(JSON.parse(localStorage.myTunesQueue)));
    } else {
      this.set('songQueue', new SongQueue());
    }

    localStorage['myTunesLibrary'] = JSON.stringify(params.library.toJSON());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    console.log("Setting up play listener");
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('change', function() {
      localStorage['myTunesLibrary'] = JSON.stringify(params.library.toJSON());
      console.log("Detected library change.")
    },this);

    this.get('songQueue').on('add remove', function(){
      localStorage['myTunesQueue'] = JSON.stringify(this.get('songQueue').toJSON());
      console.log("Detected queue change.")
    },this);

    params.library.on('enqueue', function(song){
      // add song parameter to the SongQueue collection
      //this.set('songToBeEnqueued', song);
      this.get('songQueue').add(song);
    }, this);

    // params.library.on('dequeue', function(song){
    //   // remove song parameter from the SongQueue collection
    //   this.get('songQueue').playFirst();
    // }, this);

    // params.library.on('ended', function(song){
    //   console.log('AppModel: ended');
    //   this.get('songQueue').shift();
    //   this.get('songQueue').playFirst();
    // }, this);
  }

});
