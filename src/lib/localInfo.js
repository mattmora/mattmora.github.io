import AutumnDay from '../components/games/AutumnDay.svelte';
import StellataWaterway from '../components/games/StellataWaterway.svelte';
import VioletSnail from '../components/games/VioletSnail.svelte';
import Stones from '../components/games/Stones.svelte';
import GoodbyeMonster from '../components/games/GoodbyeMonster.svelte';
import GridGarden from '../components/games/GridGarden.svelte';
import { GameIds } from './gameIds';

export const Games = {
  [GameIds.HORIZON]: {
    id: GameIds.HORIZON,
    role: 'Solo project',
    date: '2023',
    brief:
      'A text-based incremental game about the physics of long-distance, high-speed space travel.',
    image: false,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.SLIME_FOREST]: {
    id: GameIds.SLIME_FOREST,
    role: 'Engineer',
    date: '2023',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: true,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.CLOVER_PATCH]: {
    id: GameIds.CLOVER_PATCH,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: true,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.VALLEY]: {
    id: GameIds.VALLEY,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: true,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.CHESS]: {
    id: GameIds.CHESS,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: false,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.SCAFFOLD]: {
    id: GameIds.SCAFFOLD,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: true,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  //============================
  //============================
  [GameIds.INTERFERENCE]: {
    id: GameIds.INTERFERENCE,
    role: 'Solo project',
    date: '2020',
    brief:
      'A game-form networked multiplayer musical system for performance. Originally made for the Princeton Laptop Orchestra.',
    image: false,
    playable: false,
    article: false,
    video: true,
    component: StellataWaterway,
    title: 'Interference'
  },
  [GameIds.URSONATE]: {
    id: GameIds.URSONATE,
    role: 'Solo project',
    date: '2021',
    brief: 'A rhythm/typing game using Kurt Schwitters\' "Ursonate."',
    image: false,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.GOLF]: {
    id: GameIds.GOLF,
    role: 'Solo project',
    date: '2021',
    brief: 'A 2-button golf-like physics minigame.',
    image: true,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.KLAVIERING]: {
    id: GameIds.KLAVIERING,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: true,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  [GameIds.GERRIDAE]: {
    id: GameIds.GERRIDAE,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: false,
    playable: true,
    article: false,
    video: false,
    component: StellataWaterway
  },
  //============================
  [GameIds.STELLATA]: {
    id: GameIds.STELLATA,
    role: 'Solo project',
    date: '2022',
    brief:
      'A retro-styled infinite runner that takes inspiration from games of the 90s and early 2000s.',
    image: true,
    playable: true,
    article: true,
    video: false,
    component: StellataWaterway
  },
  [GameIds.AUTUMN_DAY]: {
    id: GameIds.AUTUMN_DAY,
    role: 'Solo project',
    date: '2022',
    brief: 'A game about sitting down and watching the wind.',
    image: true,
    playable: true,
    article: true,
    video: false,
    component: AutumnDay
  },
  [GameIds.VIOLET_SNAIL]: {
    id: GameIds.VIOLET_SNAIL,
    role: 'Solo project',
    date: '2022',
    brief:
      'An interactive rendering of an article about a sea snail by Dr. Rebecca Helm, professor of marine biology at Georgetown University.',
    image: false,
    playable: true,
    article: true,
    video: false,
    component: VioletSnail
  },
  [GameIds.STONES]: {
    id: GameIds.STONES,
    role: 'Solo project',
    date: '2022',
    brief: 'A small 3D physics-based sound toy.',
    image: true,
    playable: true,
    article: true,
    video: false,
    component: Stones
  },
  [GameIds.GRID_GARDEN]: {
    id: GameIds.GRID_GARDEN,
    role: 'Solo project',
    date: '2022',
    brief: 'An incremental game for Excel.',
    image: true,
    playable: true,
    article: true,
    video: false,
    component: GridGarden
  },
  [GameIds.GOODBYE_MONSTER]: {
    id: GameIds.GOODBYE_MONSTER,
    role: 'Designer, Programmer, Audio',
    date: '2023',
    brief:
      'An text-based adventure and pet game for the web that challenges the instrumentality of monsters in games.',
    image: true,
    playable: true,
    article: false,
    video: true,
    link: 'https://goodbye.monster',
    component: GoodbyeMonster
  }
};
