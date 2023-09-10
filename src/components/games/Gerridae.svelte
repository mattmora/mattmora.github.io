<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <p>Gerridae is a sound toy heavily inspired by Electroplankton.</p>
  <p>
    Due to loose training, the ML agents don't behave exactly in the way that I had originally
    planned. While I intended for them to follow their targets, the result I got is that they kind
    of do, but are mostly bad at it. For a sound toy, I think this result is actually more
    interesting than if they strictly followed their targets because it produces more variation
    without feeling random.
  </p>
  <p>
    I'm honestly not particularly interested in ML and AI tools, but when I do use them, I think
    there's a lot of value in embracing their finickiness and imperfections.
  </p>
</Game>
