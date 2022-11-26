<script>
	export let game;
</script>

<section>
	<h2>{game.title}</h2>
	<hr />
	<p>
		<img src={game.cover_image} alt="{game.title} cover image" />
		This site is a work in progress. I'll be writing about the games I post here.
		<slot />
	</p>
	<a href={game.url}>Play on itch.io</a>
</section>

<style>
	img {
		float: left;
		width: 30%;
		margin-right: 0.5em;
		border: 2px solid var(--text-faded);
	}

	P {
		overflow: auto;
	}
</style>
