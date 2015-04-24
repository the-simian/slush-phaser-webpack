'use strict';


var path = require('path'),
  iniparser = require('iniparser'),
  fs = require('fs');

function formatName(string) {
  return string.toLowerCase().replace(/\s/g, '');
}

function makeDefaults() {

  var workingDirName = path.basename(process.cwd()),
    homeDir,
    osUserName,
    configFile,
    user;

  if (process.platform === 'win32') {
    homeDir = process.env.USERPROFILE;
    osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
  } else {
    homeDir = process.env.HOME || process.env.HOMEPATH;
    osUserName = homeDir && homeDir.split('/').pop() || 'root';
  }

  console.log('homeDir', homeDir, __dirname);
  
  configFile = path.join(homeDir, '.gitconfig');

  console.log('configFile', fs.existsSync(configFile) , configFile);
  
  user = fs.existsSync(configFile) ?
    iniparser.parseSync(configFile).user : 
    {};

  
  console.log('user =>', user);
  
  return {
    appName: workingDirName,
    userName: osUserName || formatName(user.name || ''),
    authorName: user.name || '',
    authorEmail: user.email || ''
  };
}


module.exports = makeDefaults;