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
    {#if game.video && game.embed}
      {#if game.article}
        <div class="float" style="width: 50%;">
          <iframe
            src={game.embed}
            title="Video player"
            frameborder="2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      {:else}
        <iframe
          src={game.embed}
          title="Video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      {/if}
    {:else if game.image}
      <div class="float">
        <img src={game.cover_image} alt="{game.title} cover image" />
      </div>
    {/if}
    <slot />
  {/if}
</section>

<style>
  iframe {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    border: 2px inset var(--text-faded);
    width: 100%;
    margin-top: 0.5em;
    aspect-ratio: 16 / 9;
  }

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
