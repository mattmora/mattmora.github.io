import AutumnDay from '../components/games/AutumnDay.svelte';
import StellataWaterway from '../components/games/StellataWaterway.svelte';
import VioletSnail from '../components/games/VioletSnail.svelte';
import Stones from '../components/games/Stones.svelte';
import GoodbyeMonster from '../components/games/GoodbyeMonster.svelte';
import GridGarden from '../components/games/GridGarden.svelte';

export const InfoType = {
  ITCH: 'itch',
  LOCAL: 'local'
};

export const GameIds = {
  GOODBYE_MONSTER: 'goodbyemonster',
  STELLATA: 'stellata-waterway',
  GRID_GARDEN: 'grid-garden',
  AUTUMN_DAY: 'an-autumn-day',
  VIOLET_SNAIL: 'the-harrowing-life-of-the-violet-snail',
  STONES: 'stones',
  INTERFERENCE: 'interference'
};

export const Games = {
  [GameIds.STELLATA]: {
    type: 'itch',
    user: 'mattmora',
    id: GameIds.STELLATA,
    role: 'Solo project',
    date: '2022',
    brief:
      'A retro-styled infinite runner that takes inspiration from games of the 90s and early 2000s.',
    article: true,
    video: false,
    component: StellataWaterway
  },
  [GameIds.AUTUMN_DAY]: {
    type: 'itch',
    user: 'mattmora',
    id: GameIds.AUTUMN_DAY,
    role: 'Solo project',
    date: '2022',
    brief: 'A game about sitting down and watching the wind.',
    article: true,
    video: false,
    component: AutumnDay
  },
  [GameIds.VIOLET_SNAIL]: {
    type: 'itch',
    user: 'mattmora',
    id: GameIds.VIOLET_SNAIL,
    role: 'Solo project',
    date: '2022',
    brief: 'An interactive rendering of an article about a sea snail by Dr. Rebecca Helm.',
    article: true,
    video: false,
    component: VioletSnail
  },
  [GameIds.STONES]: {
    type: 'itch',
    user: 'mattmora',
    id: GameIds.STONES,
    role: 'Solo project',
    date: '2022',
    brief: 'A small 3D physics-based sound toy.',
    article: true,
    video: false,
    component: Stones
  },
  [GameIds.GRID_GARDEN]: {
    type: 'itch',
    user: 'mattmora',
    id: GameIds.GRID_GARDEN,
    role: 'Solo project',
    date: '2022',
    brief: 'An incremental game for Excel.',
    article: true,
    video: false,
    component: GridGarden
  },
  [GameIds.GOODBYE_MONSTER]: {
    type: 'itch',
    user: 'beckettrowan',
    id: GameIds.GOODBYE_MONSTER,
    role: 'Designer, Programmer, Audio',
    date: '2023',
    brief:
      'An text-based adventure and pet game for the web that challenges the instrumentality of monsters in games.',
    article: false,
    video: true,
    link: 'https://goodbye.monster',
    component: GoodbyeMonster
  }
};
