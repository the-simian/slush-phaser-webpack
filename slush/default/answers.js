'use strict';


var path = require('path'),
  iniparser = require('iniparser'),
  fs = require('fs');

function makeDefaults() {

  var workingDirName = path.basename(process.cwd()),
    homeDir,
    osUserName,
    configFile,
    user;

  if (process.platform === 'win32') {
    homeDir = process.env.USERPROFILE || '';
    osUserName = process.env.USERNAME || path.basename(homeDir);
  } else {
    homeDir = process.env.HOME || process.env.HOMEPATH || '';
    osUserName = homeDir && homeDir.split('/').pop() || 'root';
  }

  configFile = path.join(path.resolve(homeDir), '.gitconfig');

  user = fs.existsSync(configFile) ? iniparser.parseSync(configFile).user : {};
  
  console.log(user)
  
  return {
    appName: workingDirName,
    userName: osUserName || '',
    authorName: user.name || '',
    authorEmail: user.email || ''
  };
}


module.exports = makeDefaults;
