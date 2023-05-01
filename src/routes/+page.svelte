<script>
  import { onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  import { PostedGames } from '../lib/games';
  import About from '../components/About.svelte';
  import AutumnDay from '../components/games/AutumnDay.svelte';
  import StellataWaterway from '../components/games/StellataWaterway.svelte';
  import VioletSnail from '../components/games/VioletSnail.svelte';
  import Stones from '../components/games/Stones.svelte';
  import GoodbyeMonster from '../components/games/GoodbyeMonster.svelte';
  import GridGarden from '../components/games/GridGarden.svelte';

  /**
   * TODO:
   * Games List
   * Settings
   * 	Flat layout
   * 	Animations toggle
   * 	Sounds toggle
   * Secrets
   * Monster cries
   * Little animations
   * Sound elements
   */

  const gameComponents = {
    [PostedGames.ids.STELLATA]: StellataWaterway,
    // [PostedGames.ids.AUTUMN_DAY]: AutumnDay,
    [PostedGames.ids.VIOLET_SNAIL]: VioletSnail,
    [PostedGames.ids.STONES]: Stones,
    [PostedGames.ids.GRID_GARDEN]: GridGarden
    // [PostedGames.ids.GOODBYE_MONSTER]: GoodbyeMonster
  };

  let gameData = [];
  let gameDataById = {};
  let ready = false;

  let focusElement;

  onMount(async () => {
    PostedGames.info.forEach((info) => {
      if (info.type === 'itch') {
        Itch.getGameData({
          user: info.user,
          game: info.id,
          onComplete: (data) => {
            data = Object.assign(data, info);
            data.url = `https://${info.user}.itch.io/${info.id}`;
            gameData = [...gameData, data];
            gameDataById[data.id] = data;
            // console.log(data);
            ready = true;
          }
        });
      } else if (info.type === 'built-in') {
      }
    });

    focusElement = document.getElementById('focus');
  });

  let focus = 'about';
  const setFocus = (id) => {
    focus = id;
    const focusBox = focusElement.parentElement.getBoundingClientRect();
    if (focusBox.top < 0 || focusBox.top > windowHeight / 2) {
      focusElement.parentElement.scrollIntoView();
    }
  };

  let gridWidth;
  let windowWidth;
  let windowHeight;
  let gridStyle = 'grid-template-columns: calc(50% - 0.5em) calc(50% - 0.5em)';
  $: {
    const minColWidth = Math.min(300, windowWidth / 3);
    const col = Math.floor(gridWidth / minColWidth);
    const colString = `calc(${100 / col}% - ${(col - 1) / col}em)`;
    gridStyle = `grid-template-columns: ${colString.repeat(col)}`;
  }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<header>
  <button class="panel block" on:click={() => setFocus('about')} disabled={focus === 'about'}>
    <h1 id="name">Matt Wang</h1>
    <h5 id="aka">aka matt<a href="/mora" class="secret">mora</a>, (he/him)</h5>
    <h2 id="roles">Game Designer, Programmer</h2>
    <hr />
    <a href="https://mattmora.itch.io" target="_blank" rel="noopener noreferrer">mattmora.itch.io</a
    >
  </button>
</header>
<main>
  <div id="focus" class="block">
    {#if focus === 'about'}
      <About />
    {:else}
      <svelte:component this={gameComponents[focus]} game={gameDataById[focus]} />
    {/if}
  </div>
  <div class="games" style={gridStyle} bind:clientWidth={gridWidth}>
    {#each gameData as data}
      <div in:fade>
        <button class="panel" on:click={() => setFocus(data.id)} disabled={focus == data.id}>
          <p class="overlay">
            {data.brief}
          </p>
          <figure>
            <img src={data.cover_image} alt="{data.title} cover image" />
            <figcaption>{data.title}</figcaption>
          </figure>
        </button>
      </div>
    {/each}
  </div>
</main>

<style>
  .games {
    display: grid;
    column-gap: 1em;
    row-gap: 1em;
  }

  figure {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  figcaption {
    font-weight: bold;
    width: calc(100% - 0.5em);
    height: calc(100% - 0.5em);
    padding: 0.25em;
    background-color: var(--text-faded);
    text-align: center;
  }

  .overlay {
    position: absolute;
    width: calc(100% - 2em);
    overflow: hidden;
    max-height: 0;
    margin: 0;
    padding: 0 1em;
    top: 0;
    left: 0;
    background-color: var(--text-faded);
    font-weight: bold;
    transition: max-height 0.1s, padding 0.1s;
  }

  button:enabled:focus > .overlay,
  button:enabled:hover > .overlay {
    max-height: 100%;
    padding: 1em 1em;
  }

  #name {
    color: var(--text-primary);
    text-shadow: -0.04em 0 var(--accent);
    margin: 0;
    margin-bottom: 0.2em;
    line-height: 0.8em;
  }

  #aka {
    margin: 0;
    margin-top: -1em;
    color: var(--text-faded);
  }

  #roles {
    color: var(--text-faded);
    margin-top: 0;
    margin-bottom: 0.5em;
    margin-left: -2px;
  }

  #focus {
    min-height: 200px;
    overflow: auto;
  }
</style>
