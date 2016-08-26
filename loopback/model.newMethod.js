module.exports = function(Model) {
  // remote method
  Model.NewMethod = function(sound, cb) {
    cb(null, sound + ' ' + sound + ' ' + sound);
  };
  Model.remoteMethod(
    'NewMethod',
    {
      accepts: [{arg: 'sound', type: 'string'}],
      returns: {arg: 'engineSound', type: 'string'},
      http: {path:'/NewMethod', verb: 'post'}
    }
  );
  // remote method before hook
  Model.beforeRemote('NewMethod', function(context, unused, next) {
    console.log('Putting in the car key, starting the engine.');
    next();
  });
  // remote method after hook
  Model.afterRemote('NewMethod', function(context, remoteMethodOutput, next) {
    console.log('Turning off the engine, removing the key.');
    next();
  });

}
