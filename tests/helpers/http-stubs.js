export default {
  stubBands: function(pretender, data) {
    pretender.get('/bands', function() {
      return [200, {"Content-Type": "application/json"}, JSON.stringify(data) ];
    });
  },

  stubCreateBand: function(pretender, id) {
    pretender.post('/bands', function(request) {
      var payload = JSON.parse(request.requestBody);
      payload.band.id = id;
      return [200, {"Content-Type": "application/json"}, JSON.stringify(payload)];
    });
  },

  stubCreateSong: function(pretender, id) {
    pretender.post('/songs', function(request) {
      var payload = JSON.parse(request.requestBody);
      payload.song.id = id;
      return [200, {"Content-Type": "application/json"}, JSON.stringify(payload)];
    });
  }
};
