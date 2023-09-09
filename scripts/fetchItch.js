import * as fs from 'fs';
import XMLHttpRequest from 'xhr2';
import { ItchInfo } from '../src/lib/itchInfo.js';

// https://static.itch.io/api.js, adapted to work on node server
let Itch = {};

Itch.getGameData = function (opts) {
  var domain, url, xhr;
  if (opts == null) {
    opts = {};
  }
  domain = opts.domain || 'itch.io';
  if (!opts.user) {
    throw new Error('Missing user');
  }
  if (!opts.game) {
    throw new Error('Missing game');
  }
  url = 'https://' + opts.user + '.' + domain + '/' + opts.game + '/data.json';
  if (opts.secret) {
    url = url + '?secret=' + opts.secret;
  }
  xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener(
    'readystatechange',
    (function (_this) {
      return function (e) {
        var game;
        if (xhr.readyState !== 4) {
          return;
        }
        game = JSON.parse(xhr.responseText);
        return typeof opts.onComplete === 'function' ? opts.onComplete(game) : void 0;
      };
    })(this)
  );
  return xhr.send();
};

fs.rmSync('./static/itch-data.json');
Object.values(ItchInfo).forEach((info) => {
  // get itch data
  Itch.getGameData({
    user: info.user,
    game: info.id,
    onComplete: (data) => {
      const json = JSON.stringify(data);
      fs.appendFile('./static/itch-data.json', json, 'utf8', function (err) {
        if (err) {
          console.log(`An error occured while writing json.`);
          return console.log(err);
        }
        console.log(`${info.id} has been saved.`);
      });
    }
  });
});
