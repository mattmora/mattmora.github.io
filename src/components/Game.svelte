<script>
  export let game;
  export let brief = false;
</script>

<section>
  <h3>{game.title ?? '. . .'} <span class="info"> / {game.role + ' / ' + game.date}</span></h3>
  {#if !brief && game.playable}
    <a href={game.link ?? game.url} target="_blank" rel="noopener noreferrer"
      >{game.link ?? game.url}</a
    >
    <hr />
  {/if}
  {#if brief}
    <p>{game.brief}</p>
    {#if game.playable}
      <!-- use custom link if defined, otherwise use itch url -->
      <a href={game.link ?? game.url} target="_blank" rel="noopener noreferrer">Play</a>
    {/if}
    {#if game.article}
      {#if game.playable}
        /
      {/if}<a href="/articles/{game.id}">Read</a>
    {/if}
    {#if game.video}
      {#if game.playable || game.article}
        /
      {/if}<a href="/articles/{game.id}">Watch</a>
    {/if}
  {:else}
    <div>
      {#if game.image}
        <div class="float">
          <img src={game.cover_image} alt="{game.title} cover image" />
        </div>
      {/if}
      <slot />
    </div>
  {/if}
</section>

<style>
  .float {
    float: right;
    display: flex;
    flex-flow: column;
    width: 38%;
    margin-left: 1em;
  }

  h3 {
    margin-bottom: 0.5em;
  }

  a {
    margin-bottom: 0.5em;
  }

  img {
    width: calc(100% - 4px);
    border: 2px inset var(--text-faded);
  }

  .info {
    font-size: medium;
    color: var(--text-faded);
  }

  p {
    overflow: auto;
    margin-bottom: 0;
  }
</style>
