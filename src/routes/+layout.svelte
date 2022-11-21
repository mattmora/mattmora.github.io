<div class="content">
	<slot />
</div>

<style>
	.content {
		width: fit-content;
		max-width: 630px;
		margin: 0;
		margin-top: 1em;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(max(-50%, -50vw), max(-200%, -50vh));
		transform: translate(max(-50%, -50vw), max(-200%, -50vh));
	}
</style>
