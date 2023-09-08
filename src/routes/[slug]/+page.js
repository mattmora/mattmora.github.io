import { error } from '@sveltejs/kit';
import { GameIds, Games, InfoType } from '../../lib/games';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (Object.values(GameIds).includes(params.slug)) {
    return Games[params.slug];
  }

  throw error(404, 'Not found');
}
