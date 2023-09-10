import AutumnDay from '../components/games/AutumnDay.svelte';
import StellataWaterway from '../components/games/StellataWaterway.svelte';
import VioletSnail from '../components/games/VioletSnail.svelte';
import Stones from '../components/games/Stones.svelte';
import GoodbyeMonster from '../components/games/GoodbyeMonster.svelte';
import GridGarden from '../components/games/GridGarden.svelte';
import Horizon from '../components/games/Horizon.svelte';
import CloverPatch from '../components/games/CloverPatch.svelte';
import Gerridae from '../components/games/Gerridae.svelte';
import Interference from '../components/games/Interference.svelte';
import Klaviering from '../components/games/Klaviering.svelte';
import SlimeForest from '../components/games/SlimeForest.svelte';
import Ursonate from '../components/games/Ursonate.svelte';
import Valley from '../components/games/Valley.svelte';
import { GameIds } from './gameIds';

export const Games = {
  [GameIds.HORIZON]: {
    id: GameIds.HORIZON,
    role: 'Solo project',
    date: '2023',
    brief:
      'A text-based incremental game about the physics of long-distance, high-speed space travel.',
    image: true,
    playable: true,
    article: true,
    video: false,
    link: 'https://matt.mora.games/horizon',
    component: Horizon
  },
  [GameIds.SLIME_FOREST]: {
    id: GameIds.SLIME_FOREST,
    role: 'Engineer, Audio',
    date: '2023',
    brief: 'An unfair JRPG-inspired battle gauntlet.',
    image: true,
    playable: true,
    article: true,
    video: true,
    embed: 'https://www.youtube.com/embed/kRUBTgfcdYQ?si=reRirXIIZ76twmzl',
    component: SlimeForest
  },
  [GameIds.CLOVER_PATCH]: {
    id: GameIds.CLOVER_PATCH,
    role: 'Solo project',
    date: '2022',
    brief: 'A clover picking simulator.',
    image: true,
    playable: true,
    article: false,
    video: false,
    component: CloverPatch
  },
  [GameIds.VALLEY]: {
    id: GameIds.VALLEY,
    role: 'Solo project',
    date: '2022',
    brief: 'A small 2D platformer collect-a-thon.',
    image: true,
    playable: true,
    article: false,
    video: true,
    embed: 'https://www.youtube.com/embed/WXUh96q16KA?si=kBnH2qnr6ogtMMdo',
    component: Valley
  },
  [GameIds.CHESS]: {
    id: GameIds.CHESS,
    role: 'Solo project',
    date: '2022',
    brief: 'A tiny narrative game that plays with the rigidity of digital chess.',
    image: true,
    playable: true,
    article: false,
    video: false
  },
  [GameIds.SCAFFOLD]: {
    id: GameIds.SCAFFOLD,
    role: 'Solo project',
    date: '2022',
    brief: 'An abstract structure-matching puzzle game.',
    image: true,
    playable: true,
    article: false,
    video: false
  },
  [GameIds.INTERFERENCE]: {
    id: GameIds.INTERFERENCE,
    role: 'Solo project',
    date: '2020',
    brief:
      'A game-form networked multiplayer musical system for performance. Originally made for the Princeton Laptop Orchestra.',
    image: false,
    playable: false,
    article: true,
    video: true,
    component: Interference,
    title: 'Interference'
  },
  [GameIds.URSONATE]: {
    id: GameIds.URSONATE,
    role: 'Solo project',
    date: '2021',
    brief: 'A rhythm/typing game for Kurt Schwitters\' "Ursonate."',
    image: true,
    playable: true,
    article: false,
    video: true,
    embed: 'https://www.youtube.com/embed/Q4yaFviDVGk?si=A3sumWBrDk8mfnqq',
    component: Ursonate
  },
  [GameIds.GOLF]: {
    id: GameIds.GOLF,
    role: 'Solo project',
    date: '2021',
    brief: 'A 2-button golf-like physics minigame.',
    image: true,
    playable: true,
    article: false,
    video: false
  },
  [GameIds.KLAVIERING]: {
    id: GameIds.KLAVIERING,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: true,
    playable: true,
    article: false,
    video: true,
    embed: 'https://www.youtube.com/embed/fFsX6hjPEGI?si=g1OSvV3pn-JqXILl',
    component: Klaviering
  },
  [GameIds.GERRIDAE]: {
    id: GameIds.GERRIDAE,
    role: 'Solo project',
    date: '2022',
    brief: 'A sound toy driven by Unity ML-Agents.',
    image: true,
    playable: true,
    article: true,
    video: true,
    embed: 'https://www.youtube.com/embed/gvH6NGf_KOM?si=IhvaonG1I_PgEvuM',
    component: Gerridae
  },
  [GameIds.STELLATA]: {
    id: GameIds.STELLATA,
    role: 'Solo project',
    date: '2022',
    brief:
      'A retro-styled infinite runner that takes inspiration from games of the 90s and early 2000s.',
    image: true,
    playable: true,
    article: true,
    video: true,
    embed: 'https://www.youtube.com/embed/tWOmR3LsuU4?si=V796O_XIp_rdRIRn',
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
    image: true,
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
    video: true,
    embed: 'https://www.youtube.com/embed/DAWz8SXKhSo?si=UXBF1b1p2cu1LPpk',
    component: Stones
  },
  [GameIds.GRID_GARDEN]: {
    id: GameIds.GRID_GARDEN,
    role: 'Solo project',
    date: '2022',
    brief: 'An incremental game for Excel.',
    image: true,
    playable: false,
    article: true,
    video: true,
    embed: 'https://www.youtube.com/embed/ts6D_aYnd8g?si=90wEl3cEKesmBPXt',
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
    article: true,
    video: true,
    embed: 'https://www.youtube.com/embed/1tXSoDF18CA?si=Dpym31bXyPLfcL12',
    link: 'https://goodbye.monster',
    component: GoodbyeMonster
  }
};
