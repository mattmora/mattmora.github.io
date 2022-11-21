<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import About from '../components/About.svelte';
	import AutumnDay from '../components/games/AutumnDay.svelte';
	import StellataWaterway from '../components/games/StellataWaterway.svelte';
	import VioletSnail from '../components/games/VioletSnail.svelte';

	const gamesInfo = [
		{
			user: 'mattmora',
			game: 'stellata-waterway'
		},
		{
			user: 'mattmora',
			game: 'an-autumn-day'
		},
		{
			user: 'mattmora',
			game: 'the-harrowing-life-of-the-violet-snail'
		}
	];

	const gameComponents = {
		[gamesInfo[0].game]: StellataWaterway,
		[gamesInfo[1].game]: AutumnDay,
		[gamesInfo[2].game]: VioletSnail
	};

	let games = [];
	let gamesById = {};
	let ready = false;

	let focusElement;

	onMount(async () => {
		gamesInfo.forEach((info) => {
			Itch.getGameData({
				...info,
				onComplete: (data) => {
					data.id = info.game;
					data.url = `https://${info.user}.itch.io/${info.game}`;
					games = [...games, data];
					gamesById[data.id] = data;
					console.log(data);
					ready = true;
				}
			});
		});

		focusElement = document.getElementById('focus');
	});

	let focus = 'about';
	const setFocus = (id) => {
		focus = id;
		focusElement.scrollIntoView();
	};
</script>

<svelte:head>
	<script type="text/javascript" src="https://static.itch.io/api.js"></script>
</svelte:head>

<header>
	<button class="panel block" on:click={() => setFocus('about')} disabled={focus === 'about'}>
		<h1 id="name">Matt Wang</h1>
		<h5 id="aka">aka matt<a href="/mora" class="secret">mora</a></h5>
		<h2 id="roles">Game Designer, Programmer</h2>
		<a href="https://mattmora.itch.io">mattmora.itch.io</a>
	</button>
</header>
<main>
	<div id="focus" class="block">
		{#if focus === 'about'}
			<About />
		{:else}
			<svelte:component this={gameComponents[focus]} game={gamesById[focus]} />
		{/if}
	</div>
	<div class="games">
		{#each games as game}
			<div in:fade>
				<button class="panel" on:click={() => setFocus(game.id)} disabled={focus == game.id}>
					<figure>
						<img src={game.cover_image} alt="{game.title} cover image" />
						<figcaption>{game.title}</figcaption>
					</figure>
				</button>
			</div>
		{/each}
	</div>
</main>

<style>
	.games {
		display: grid;
		grid-template-columns: calc(50% - 0.5em) calc(50% - 0.5em);
		column-gap: 1em;
		row-gap: 1em;
	}

	figure {
		display: flex;
		flex-flow: column;
		width: fit-content;
		height: 100%;
		margin: 0;
	}

	img {
		width: 100%;
		/* filter: grayscale(1);/ */
		/* max-width: 200px; */
	}

	figcaption {
		font-weight: bold;
		width: calc(100% - 0.5em);
		height: calc(100% - 0.5em);
		padding: 0.25em;
		background-color: var(--text-faded);
		text-align: center;
	}

	#name {
		color: var(--text-primary);
		text-shadow: -0.04em 0 var(--accent);
		margin: 0;
		margin-bottom: 0.2em;
		line-height: 0.8em;
	}

	#aka {
		margin: 0;
		margin-top: -1em;
		color: var(--text-faded);
	}

	#roles {
		color: var(--text-faded);
		margin-top: 0;
		margin-bottom: 0.5em;
		margin-left: -2px;
	}

	#focus {
		min-height: 200px;
	}
</style>
