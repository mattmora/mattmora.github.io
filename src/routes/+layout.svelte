<script>
</script>

<div class="body">
	<div class="content">
		<slot />
	</div>
	<footer>
		<p>© 2022 Matt Wang</p>
		<p>
			<a href="https://github.com/mattmora/matt-mora-games">github.com/mattmora/matt-mora-games</a>
		</p>
	</footer>
</div>

<style>
	.content {
		width: fit-content;
		max-width: 630px;
		margin: 0;
		margin-top: 1em;
		margin-bottom: calc(100px + 1em);
		position: relative;
		left: 50%;
		-ms-transform: translateX(max(-50%, -50vw));
		transform: translateX(max(-50%, -50vw));
	}

	.body {
		position: absolute;
		width: 100%;
		min-height: 100%;
		top: 0;
		left: 0;
	}

	footer {
		font-size: 0.8em;
		line-height: 0.8em;
		position: absolute;
		width: 100%;
		bottom: 0;
		padding: 0.5em;
		height: 4em;
		background-color: var(--background);
		border-top: 4px ridge var(--text-faded);
		/* position: absolute; */
	}

	p {
		text-align: center;
	}
</style>
