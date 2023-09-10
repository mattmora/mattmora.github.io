<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <p>
    I originally developed Interference in 2019 as my undergraduate thesis project to be performed
    by the Princeton Laptop Orchestra (PLOrk). Over the following year, I made some revisions,
    mostly to the sound design, and I presented a paper about the project at the Web Audio
    Conference 2019 in Trondheim, Norway.
  </p>
  <p>
    I originally chose to build Interference as a web app simply for the availability of tools and
    packages and the ease of setup for performers. But when COVID came around in 2020 and in-person
    musical performance became more difficult, that choice ended up being even better than I
    anticipated, as it made the piece well-suited for remote performance. This gave PLOrk at the
    time at least one piece to continue performing.
  </p>
  <p>
    Below are the original in-person performance from 2019 and the remote performance from 2020.
  </p>
  <iframe
    src="https://www.youtube.com/embed/C-5P3hXuGfs?si=7lKrMdmQYdJ-yjnW"
    title="YouTube video player"
    frameborder="2"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
  <iframe
    src="https://www.youtube.com/embed/uD4tDYiHQnM?si=kBCJN8GN-mxESGA0&amp;start=1330"
    title="YouTube video player"
    frameborder="2"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
