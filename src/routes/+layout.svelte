<script>
</script>

<svelte:head>
  <script type="text/javascript" src="https://static.itch.io/api.js"></script>
  <script src="https://player.vimeo.com/api/player.js"></script>
</svelte:head>

<div class="body">
  <div class="content">
    <slot />
  </div>
  <footer>
    <p>© 2023 Matt Wang</p>
    <p>
      <a href="https://github.com/mattmora/mattmora.github.io"
        >https://github.com/mattmora/mattmora.github.io</a
      >
    </p>
  </footer>
</div>

<style>
  .content {
    width: fit-content;
    max-width: min(640px, 96%);
    margin: 0;
    margin-top: 1em;
    margin-bottom: 5.5em;
    position: relative;
    left: 50%;
    -ms-transform: translateX(max(-50%, -50vw));
    transform: translateX(max(-50%, -50vw));
  }

  .body {
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
  }

  footer {
    font-size: 0.8em;
    line-height: 0.8em;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0.5em 0 0.5em 0;
    height: 4em;
    background-color: var(--background);
    border-top: 4px ridge var(--text-faded);
    /* position: absolute; */
  }

  p {
    text-align: center;
  }
</style>
