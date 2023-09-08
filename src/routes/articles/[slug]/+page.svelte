<script>
  import { onMount } from 'svelte';
  import { Games, InfoType } from '../../../lib/games';

  /** @type {import('./$types').PageData} */
  export let data;

  let game;
  let ready = false;

  onMount(async () => {
    if (data.type === InfoType.ITCH) {
      Itch.getGameData({
        user: data.user,
        game: data.id,
        onComplete: (itchData) => {
          game = Object.assign(itchData, data);
          game.url = `https://${data.user}.itch.io/${data.id}`;
          ready = true;
        }
      });
    } else if (data.type === InfoType.LOCAL) {
    }
  });
</script>

{#if ready}
  <div class="panel block">
    <a href="/">Return</a>
    <hr />
    <svelte:component this={game.component} {game} />
    <hr />
    <a href="/">Return</a>
  </div>
{/if}
