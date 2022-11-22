<script>
	export let game;
</script>

<h2>{game.title}</h2>
<sub><a href={game.url}>Play on itch.io</a></sub>
<p>
	<img src={game.cover_image} alt="{game.title} cover image" />
	This site is a work in progress. I'll be writing about the games I post here.
	<slot />
</p>

<style>
	img {
		float: left;
		width: 30%;
		margin-right: 0.5em;
		border: 2px solid var(--text-faded);
	}

	P {
		overflow: auto;
		margin-bottom: 0;
	}
    
</style>
