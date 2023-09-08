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
  <iframe
    src="https://www.youtube.com/embed/1tXSoDF18CA?si=Dpym31bXyPLfcL12"
    title="goodbye.monster trailer"
    frameborder="1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
  <iframe
    title="goodbye.monster gameplay video"
    src="https://player.vimeo.com/video/851962984?h=d7ced28ac1&byline=0&portrait=0"
    frameborder="1"
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
