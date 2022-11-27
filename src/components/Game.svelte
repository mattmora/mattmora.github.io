<script>
	export let game;
</script>

<section>
	<h2>{game.title}</h2>
	<hr />
	<p><b>{game.brief}</b></p>
	<div>
		<div class="float">
			<a href={game.url} target="_blank" rel="noopener noreferrer">Play on itch.io</a>
			<img src={game.cover_image} alt="{game.title} cover image" />
		</div>
		<slot />
	</div>
</section>

<style>
	.float {
		float: left;
		display: flex;
		flex-flow: column;
		width: 38%;
		margin-right: 1em;
	}

	a {
		margin-bottom: 0.5em;
	}

	img {
		width: calc(100% - 4px);
		border: 2px solid var(--text-faded);
	}

	p {
		overflow: auto;
	}
</style>
