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

const path = './src/data/itch-data.json';

const itchData = {};

Object.values(ItchInfo).forEach((info) => {
  Itch.getGameData({
    user: info.user,
    game: info.id,
    onComplete: (data) => {
      itchData[info.id] = data;
      itchData[info.id].url = `https://${info.user}.itch.io/${info.id}`;
      console.log(`${info.id} received.`);
      if (Object.keys(itchData).length == Object.keys(ItchInfo).length) {
        console.log('Writing itch-data.json.');
        const json = JSON.stringify(itchData);
        fs.writeFile(path, json, 'utf8', function (err) {
          if (err) {
            console.log(`An error occured while writing json.`);
            return console.log(err);
          }
        });
      }
    }
  });
});
