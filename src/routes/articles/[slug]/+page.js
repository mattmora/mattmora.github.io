import { error } from '@sveltejs/kit';
import { Games } from '../../../lib/localInfo';
import { GameIds } from '../../../lib/gameIds';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (Object.values(GameIds).includes(params.slug)) {
    return Games[params.slug];
  }

  throw error(404, 'Not found');
}
