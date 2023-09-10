<script>
  let content;
</script>

<svelte:head>
  <script type="text/javascript" src="https://static.itch.io/api.js"></script>
  <script src="https://player.vimeo.com/api/player.js"></script>
</svelte:head>

<div class="page">
  <div class="background" />
  <div class="content">
    <slot />
  </div>
  <footer>
    <p>© 2023</p>
    <p>
      <a href="https://github.com/mattmora/mattmora.github.io"
        >https://github.com/mattmora/mattmora.github.io</a
      >
    </p>
  </footer>
</div>

<style>
  .page {
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    font-size: 1.6rem;
    font-family: 'Atkinson Hyperlegible', sans-serif;
    color: var(--text-primary);
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('path.png'),
      linear-gradient(
        -15deg,
        var(--backdrop),
        var(--background),
        var(--background),
        var(--backdrop)
      );
    z-index: -1;
  }

  .content {
    width: min(760px, 96%);
    margin: 0;
    margin-top: 1em;
    margin-bottom: 5.5em;
    position: relative;
    left: 50%;
    -ms-transform: translateX(max(-50%, -50vw));
    transform: translateX(max(-50%, -50vw));
  }

  footer {
    font-size: 0.8em;
    line-height: 0.8em;
    position: relative;
    width: 100%;
    bottom: 0;
    padding: 0.5em 0 0.5em 0;
    height: 4em;
    background-color: var(--background);
    border-top: 4px ridge var(--text-faded);
  }

  p {
    text-align: center;
  }
</style>
