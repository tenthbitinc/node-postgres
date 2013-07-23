var exec = require('child_process').exec;
exec('pg_config --version', function(err, stdout) {
  if(err) return err;
  var majorVersion = stdout.split(' ')[1].split('.')[0];
  if(parseInt(majorVersion) < 9) {
    console.log('ESCAPE_NOT_SUPPORTED')
  }
});
