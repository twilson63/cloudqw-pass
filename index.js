var Worker = require('cloudq-worker').Worker,
  request = require('request');

// cloudq pass worker
//
// This worker picks up a job from a given queue and
// posts the job to a specified url 
// then runs the callback when completed
//
// var pass = require('cloudqw-pass');
// pass(config, urlObj.href, function(err, res){
//  console.log('passed job to ' + urlObj.href);
//});
module.exports = function(qConfig, destUrl, callback) {
  var worker = new Worker(qConfig, function(err, doc, done) {
    request.post(destUrl, { json: doc }, function(e,r,b) {
      done(doc.id, callback);
    });
  });
}