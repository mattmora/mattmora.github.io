<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <p>
    <i>Stellata Waterway</i> started as a recreation of certain systems and mechanics from one of my
    favorite games as kid (and still), <i>Klonoa 2: Lunatea's Veil</i>. Specifically, my design is
    directly based on
    <a href="https://youtu.be/6JQQhQK05SY?t=205" target="_blank" rel="noopener noreferrer"
      >the first phase of the game's final boss</a
    >.
  </p>
  <h3>Making the game</h3>
  <p>
    I started with the space and movement system, trying to recreate aspects of <i>Klonoa</i>'s
    design that I liked. One was the movement around the tunnel, which has a certain sense of
    inertia. The tunnel and camera don't immediately rotate to center the player and they don't
    immediately stop rotating when the player stops moving to the side. Another was the camera
    position, which is slightly below the tunnel's center and angled slightly downward, which
    compared to a centered and forward facing camera, as I first tried, is more readable and makes
    the space feel larger.
  </p>
  <p>
    But for various parts of the movement system, I chose to stray from <i>Klonoa</i>'s design.
    <i>Klonoa</i> is a rather slow game which suits its tone. But I was interested in making
    something more action-oriented, so the player moves much faster than in <i>Klonoa</i>. Likewise,
    <i>Klonoa</i>
    has a midair "flutter" mechanic that aids slow, deliberate platforming. That didn't feel suited to
    what I was making, so I left it out. In general, as my game came together, it started to form its
    own identity and I moved away from simply recreating a reference. I did, however, arrive at a similar
    double jump system to <i>Klonoa</i>, though more organically than as a recreation.
  </p>
  <p>
    Coming up with the double jump system was a memorable moment to me in "finding the fun" in a
    system. I had implemented nearly every other mechanic in the game and while testing just
    happened to hit a star while midair. It was immediately obvious that doing so should give the
    player another jump. This mechanic became a central part of what makes the game fun and
    challenging. It's by no means an innovative mechanic (plenty of platformers including <i
      >Klonoa</i
    > feature similar mechanics), but the way I arrived at it through making and testing is a process
    I hope to repeat.
  </p>
  <p>
    The last thing I made was the level. As another game made in one week, making a boss or a level
    with a satisfying end seemed out of scope, so I decided to again diverge from <i>Klonoa</i> and create
    an infinite runner. I designed a basic level that could loop, added a scoring system to provide a
    clear goal, and linked the score to the player's speed as a basic difficulty ramp. There are a few
    issues with the design, such as level readability at high speed and extreme bias towards certain
    scoring strategies, but there's nothing beyond fixing and things mostly function as I'd hoped.
  </p>
  <h3>Playing my own games</h3>
  <p>
    Of all of my games, this is the one I probably enjoy playing the most, which I don't think means
    it's better (certainly it's hard to properly enjoy narrative, puzzle, or other
    one-time-experience games as their designer, but that doesn't mean they're worse), but it's a
    valuable observation to make in developing my design process. I enjoy action-oriented games and
    I can apparently make one, at least to my own taste, yet I have rarely made such games. If I
    want to make more action-oriented games, I need to question what about my current circumstances,
    intuitions, and processes as designer might be drawing me away from doing so.
  </p>
  <p>
    One idea is that I often get caught up in the idea of having a higher concept or purpose for the
    game than simply to be fun. I avoided that thinking with <i>Stellata Waterway</i> because it was
    intended as just a mechanical homage. Instead of concept, I was able to focus on small features and
    interactions that I enjoyed, and I found that even without a driving concept, new and interesting
    ideas came out of the processing of making. Maybe if I want to make more games like this, I need
    to think less conceptually and just incrementally build on small features that excite me.
  </p>
  <h3>Tunnel runners</h3>
  <p class="final">
    Since finishing this game, I've also enjoyed hearing what games it reminds people of. People
    have likened it to Vectrex games, a sequence in <i>Spyro the Dragon</i>, and
    <i>Sonic the Hedgehog 2</i>. While none of those were on my mind when making this, it's
    interesting to see more instances of what I've come to call "tunnel runners" as a relatively
    uncommon spatial system.
  </p>
</Game>
