<script>
  import { onMount } from 'svelte';
  import { GameIds, Games, InfoType } from '../lib/games';
  import Game from '../components/Game.svelte';

  let gameDataById = {};
  let ready = false;

  Object.values(Games).forEach((info) => {
    // populate with local data before mount
    gameDataById[info.id] = info;
    gameDataById[info.id].url = `https://${info.user}.itch.io/${info.id}`;
  });

  onMount(async () => {
    Object.values(Games).forEach((info) => {
      if (info.type === InfoType.ITCH) {
        // get itch data
        Itch.getGameData({
          user: info.user,
          game: info.id,
          onComplete: (data) => {
            gameDataById[info.id] = Object.assign(data, gameDataById[info.id]);
            // console.log(data);
            ready = true;
          }
        });
      } else if (info.type === InfoType.LOCAL) {
      }
    });
  });

  let windowWidth;
  let windowHeight;
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<header>
  <div class="panel block">
    <h1 id="name">Matt Mora</h1>
    <h3 id="roles">Game Designer, Programmer</h3>
    <!-- <a href="https://mattmora.itch.io" target="_blank" rel="noopener noreferrer">mattmora.itch.io</a> -->
    <hr />
    <p>
      I'm a game designer with a background in music composition and audio programming. I'm
      especially interested in systems design, web games, experimental games, music games, and more.
    </p>
    <p>
      You can play most of my games on my
      <a href="https://mattmora.itch.io" target="_blank" rel="noopener noreferrer">itch.io</a> page,
      and you can read about some of them at the links below.
    </p>
    <p class="final">
      You can contact me at <a href="mailto:mattwmora@gmail.com">mattwmora@gmail.com</a>
      or on Discord as mattmora.
      <!-- , and you can see my resume
          <a href="/Matt_Wang_Resume.pdf" target="_blank" rel="noopener noreferrer">here</a>. -->
    </p>
  </div>
</header>
<main>
  <div class="games panel block">
    {#each Object.values(GameIds) as id}
      {@const data = gameDataById[id]}
      {#if data}
        <article class="row">
          <div class="brief" style="width: 100%;">
            <Game game={data} brief />
          </div>
          {#if data.cover_image}
            <div class="panel" style="width: 27%">
              <a href="/{data.id}">
                <figure>
                  <img src={data.cover_image} alt="{data.title} cover image" />
                </figure></a
              >
            </div>
          {/if}
        </article>
      {/if}
    {/each}
  </div>
</main>

<style>
  .games {
    position: relative;
    display: grid;
    column-gap: 1em;
    row-gap: 1em;
    padding: 1em;
  }

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid var(--text-faded);
  }

  .brief {
    padding: 1em;
  }

  figure {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  #name {
    color: var(--text-primary);
    text-shadow: -0.05em 0 var(--accent);
    margin: 0;
  }

  #roles {
    color: var(--text-faded);
    margin-top: 0;
  }
</style>
