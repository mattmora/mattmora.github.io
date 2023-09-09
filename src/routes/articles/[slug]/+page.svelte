<script>
  import itchData from '../../../data/itch-data.json';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="panel block">
  <a href="/">Return</a>
  <hr />
  <svelte:component this={data.component} game={{ ...(itchData?.[data.id] ?? {}), ...data }} />
  <hr />
  <a href="/">Return</a>
</div>
