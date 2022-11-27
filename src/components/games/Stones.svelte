<script>
	import Game from '../Game.svelte';

	export let game;
</script>

<Game {game}>
	<h3>Sound toys and instruments</h3>
	<p>
		I like to think about sound toys as musical instruments. I don't mean that they should be suited
		for performance or be capable of producing conventional music, but that they are interfaces that
		map to sound, and the affordances of their interfaces define them. There isn't a fundamental
		difference between the input-mapping-to-sound structure of an instrument in a DAW and <i
			>Electroplankton</i
		>; they just differ in their affordances.
	</p>
	<p>
		Maybe that's self-evident (the structure described is extremely broad), but the point is that
		the affordances of an instrument's interface define that instrument even more than the sounds it
		produces. This is important because while game engines, DAWs, and other digital sound-making
		tools can produce the same sounds, they have vastly different built-in affordances, which will
		tend to be expressed in their instruments. If I want to make a certain kind of instrument, I
		should choose a tool with the appropriate affordances. If I want to use a specific tool to make
		an instrument, I should leverage what that tool is good at.
	</p>
	<h3>Stones</h3>
	<p>
		<i>Stones</i> is a small exploration of one special affordance of Unity and many game engines: physics
		simulation. It uses a 3D point-and-click interface to move around blocks whose linear and angular
		velocity map to sound.
	</p>
	<p>
		The sound generation is actually extremely simple. Each block plays a looping drone sound with a
		different sound for each texture, then linear velocity controls its volume and angular velocity
		controls its pitch. Even with this simple mapping, the physics can produce some very dynamic
		sounds, such as impact transients when the velocities abruptly change on collision. The
		different weights of each block texture also create different volume and pitch curves when
		dragging them around.
	</p>
	<h3>Problems</h3>
	<p class="final">
		<i>Stones</i> definitely has some issues. Some of the physics are too sensitive, there's an odd disconnect
		between the player cursor and moving around blocks, the isometric view and lack of lighting hurts
		depth perception, and I don't think the pitch quantization works. Nevertheless, I think it's an interesting
		prototype and an idea I might like to do more with at some point.
	</p>
</Game>
