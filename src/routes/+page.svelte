<script>
  import { Games } from '../lib/localInfo';
  import Game from '../components/Game.svelte';
  import { GameIds } from '../lib/gameIds';

  /** @type {import('./$types').PageServerData} */
  export let itchData;

  let gameData = {};

  Object.values(GameIds).forEach((id) => {
    gameData[id] = Games[id];
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
    <h2>Projects</h2>
    {#each Object.values(GameIds) as id}
      {@const data = { ...(itchData?.[id] ?? {}), ...gameData[id] }}
      {#if data}
        <article class="row">
          {#if data.title}
            <div class="brief" style="width: 100%;">
              <Game game={data} brief />
            </div>
            {#if data.image && data.cover_image}
              <div class="panel" style="width: 25%">
                <a href="/articles/{id}">
                  <figure>
                    <img src={data.cover_image} alt="{data.title} cover image" />
                  </figure></a
                >
              </div>
            {/if}
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
    padding: 1rem;
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
