<script>
	import { ListedGames } from '../../lib/games';
</script>

<main>
	<div class="block">
		<p class="first">
			I haven't made this page yet. How'd you get here anyway? Snooping in the repo?
		</p>
		<a href="/">Back to home page</a>
		<ol>
			{#each ListedGames as game}
				<li>
					{#if game.url}
						<a href={game.url} target="_blank" rel="noopener noreferrer">{game.title}</a>
					{:else}
                    <p>{game.brief}</p>
                    {/if}
				</li>
			{/each}
		</ol>
	</div>
</main>
