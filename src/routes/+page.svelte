<div class="content">
	<header>
		<!-- <div class="navigation" /> -->
		<div class="name">
			<h1>Matt Wang</h1>
			<h3>aka mattmora</h3>
			<h2>Game Designer & Developer</h2>
			<a href="https://mattmora.itch.io/">mattmora.itch.io</a>
		</div>
	</header>
	<!-- <hr> -->
	<main>
		<div class="block left">
			<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
		</div>
		<!-- <hr> -->
		<div class="block left">
			<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
		</div>
	</main>
</div>

<style>
	.content {
		width: fit-content;
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(max(-50%, -50vw), max(-80%, -50vh));
		transform: translate(max(-50%, -50vw), max(-80%, -50vh));
		background-color: var(--background);
		border: 10px ridge var(--text-faded);
	}

	.name {
		padding: 1em;
		/* border-style: none none none solid;
		border-color: var(--accent);
		border-width: 0.5em; */
	}

	.block {
		padding: 1em;
		/* border-color: var(--accent);
		border-width: 0.5em; */
	}

	.block.left {
		/* border-style: none none none solid; */
	}

	.block.right {
		/* border-style: none solid none none ; */
	}

	header {
		display: flex;
	}

	h1 {
		color: var(--text-primary);
		text-shadow: 0px 0.04em var(--accent);
		margin: 0;
		margin-bottom: 0.2em;
		line-height: 0.8em;
	}

	h3 {
		margin: 0;
		margin-top: -0.5em;
		color: var(--text-faded);
	}

	h2 {
		color: var(--text-faded);
		margin-top: 0;
		margin-bottom: 0.5em;
	}
</style>
