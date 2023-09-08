<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <h3>Concept</h3>
  <p>
    The initial idea for this game came from the prompt "non-human POV." Approaching this prompt, I
    knew I wanted to make a game from the perspective of an animal with a much more limited
    perception of the world than humans. First, I feel such perspectives are underexplored in games,
    and second, I had one week to make the game and thought a highly restricted perspective would be
    more reasonable to implement in that timeframe.
  </p>
  <p>
    My first idea was to make a game about a jellyfish, but a bit of research suggested to me that
    both a jellyfish's sensory and locomotive systems are much more complicated than I assumed. But
    in my research, I happened to find <a
      href="https://jellybiologist.com/"
      target="_blank"
      rel="noopener noreferrer">Dr. Helm's blog</a
    >
    and
    <a
      href="https://jellybiologist.com/2020/08/03/the-harrowing-life-of-the-violet-snail/"
      target="_blank"
      rel="noopener noreferrer">her article</a
    > about the violet snail caught my eye. The perspective depicted in the article was exactly what
    I was looking for, and with its descriptive writing, dramatic tone, and second person perspective,
    it felt natural feature the text in the game.
  </p>
  <h3>Development</h3>
  <p>
    With the concept and permission from Dr. Helm to use her text, putting together the actual game
    was relatively straightforward as I aimed to emphasize and add to the text through pacing,
    visual representation, and interaction.
  </p>
  <p>
    Concerning pacing, the source text has a very clear voice and sense of drama, so I took care to
    split the text into sort of poetic lines and time each line accordingly. Where I saw lists or
    parallel phrases in the text, I created parallel lines and paced them as continuous sequences.
    Where I saw turns in the narrative, I let the critical phrases stand alone and/or put a pause.
  </p>
  <p>
    Creating the visual representation was a less clear process. Aside from the technical
    difficulties of working with some new tools and learning more about shaders, interpretation was
    challenge. While the source text is very descriptive, there are some gray areas, such as to what
    extent the snail is blind (completely blind versus an extremely limited sense of light). With
    the limited timeframe, I made choices based on intuition and convenience while trying to achieve
    a balance between creative license and realism. I wanted to make the game interesting to play
    but not misrepresent the science.
  </p>
  <p>
    For interaction, I wanted to help the player engage with the snail's perspective beyond just
    reading about it. I avoided anything complex that might conflict with the simple existence of
    the snail. Instead I focused on minimalistically representing the actions described in the text,
    looking, clinging, and making bubbles. I also decided that none of these interactions should
    significantly impact what happens in the game (for example, letting go of Space causing you to
    stop clinging and sink) both for simplicity's sake and because the closing point of the text is
    that the perception of effort and struggle that we impose on the snail isn't necessarily
    accurate, and therefore the snail may not need to consciously cling to its raft at all.
  </p>
  <p class="final">
    All said and done, I'm very happy with how the game turned out, and there are honestly no major
    changes I would make in retrospect. Thanks to Dr. Rebecca Helm for generously allowing me to use
    her text and for her immensely positive response to the result.
  </p>
</Game>
