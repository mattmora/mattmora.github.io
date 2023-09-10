<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <p>
    goodbye.monster is an ongoing project. Players meet and care for monsters in a dark and
    ambiguous world. In many ways, it's a response to the instrumental role of creatures in creature
    collector games.
  </p>
  <p>
    Made alongside <a href="https://beckettrowan.itch.io/" target="_blank" rel="noopener noreferrer"
      >Beckett</a
    >, <a href="https://lorgoncewas.itch.io/" target="_blank" rel="noopener noreferrer">Lorg</a>,
    and <a href="https://rookliu.itch.io/" target="_blank" rel="noopener noreferrer">Rook</a>.
  </p>
  <iframe
    title="goodbye.monster gameplay video"
    src="https://player.vimeo.com/video/851962984?h=d7ced28ac1&byline=0&portrait=0"
    frameborder="2"
    allow="autoplay; fullscreen; picture-in-picture"
    allowfullscreen
  />
</Game>

<style>
  iframe {
    position: relative;
    box-sizing: border-box;
    border: 2px inset var(--text-faded);
    width: 100%;
    margin-top: 0.5em;
    aspect-ratio: 16 / 9;
  }
</style>
