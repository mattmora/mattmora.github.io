<script>
  export let game;
  export let brief = false;
</script>

<section>
  <h3>{game.title ?? '. . .'}</h3>
  <h4>{game.role + ' / ' + game.date}</h4>
  {#if !brief}
    <a href={game.link ?? game.url} target="_blank" rel="noopener noreferrer">Play</a>
  {/if}
  <hr />
  {#if brief}
    <p>{game.brief}</p>
    <!-- use custom link if defined, otherwise use itch url -->
    <a href={game.link ?? game.url} target="_blank" rel="noopener noreferrer">Play</a>
    {#if game.article}
      / <a href="/{game.id}">Read</a>
    {/if}
    {#if game.video}
      / <a href="/{game.id}">Watch</a>
    {/if}
  {:else}
    <div>
      <div class="float">
        <img src={game.cover_image} alt="{game.title} cover image" />
      </div>
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

  a {
    margin-bottom: 0.5em;
  }

  img {
    width: calc(100% - 4px);
    border: 2px inset var(--text-faded);
  }

  h4 {
    color: var(--text-faded);
  }

  p {
    overflow: auto;
  }
</style>
