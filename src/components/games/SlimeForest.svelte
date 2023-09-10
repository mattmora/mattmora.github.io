<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <p>
    Slime Forest is a gauntlet of battles inspired old JRPGs. The player takes on the role of a
    community of slimes in the forest are a repeatedly assailed by intruder from nearby
    civilization.
  </p>
  <p>
    Filled with hidden character abilities and mechanics, the design is, in a sense, intentionally
    unfair. Player can try to survive through persistent trial and error and careful observation or
    seek advice outside the game from other players, similar to how players have always approached
    sprawling JRPGs filled with secrets and obscure mechanics.
  </p>
  <p>
    Made alongside <a href="https://beckettrowan.itch.io/" target="_blank" rel="noopener noreferrer"
      >Beckett</a
    >, <a href="https://lorgoncewas.itch.io/" target="_blank" rel="noopener noreferrer">Lorg</a>,
    and <a href="https://rookliu.itch.io/" target="_blank" rel="noopener noreferrer">Rook</a>.
  </p>
</Game>
