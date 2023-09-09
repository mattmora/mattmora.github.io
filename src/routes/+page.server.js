import * as fs from 'fs';
import { GameIds } from '../lib/gameIds';
import { ItchInfo } from '../lib/itchInfo';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let gameData = {};

  Object.values(GameIds).forEach((id) => {
    const info = ItchInfo[id];
    if (info) {
      const itchData = JSON.parse(fs.readFileSync(`./src/data/${id}.json`, 'utf8'));
      gameData[id] = itchData;
      gameData[id].url = `https://${info.user}.itch.io/${info.id}`;
    }
  });

  return gameData;
}
