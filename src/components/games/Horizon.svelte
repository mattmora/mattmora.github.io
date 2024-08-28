<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <p>
    My initial concept for Horizon was a space travel incremental game in which the main resource is
    the spacecraft's velocity. In particular, I was interested in the idea of managing a rate as a
    resource instead of a simple count, as is typical in incremental games.
  </p>
  <p>
    I had doubts at first that the idea was at all viable if I were to maintain some sense of
    physical realism. Prior to this project, my knowledge of the physics involved in this kind of
    scenario was limited to how velocity cannot exceed lightspeed (seemingly a big problem for an
    incremental game about velocity) and a vague idea of what time dilation is. However, after doing
    some reading about special relativity, I found that the physics don't conflict with my concept
    at all, and while they do complicate it, they also suggest some interesting system dynamics if I
    feature two reference frames. Without going into too much detail here, much thought has gone
    into the hypothetical “relativistic rocket,” which while unrealistic with today's technology,
    engages with real physics and can certainly work in a game. (<a
      href="https://math.ucr.edu/home/baez/physics/Relativity/SR/Rocket/rocket.html"
      target="_blank"
      rel="noopener noreferrer">This article</a
    > by Philip Gibbs summarizes most of the physics and science that inspired Horizon).
  </p>
  <h3>Implementation & Systems</h3>
  <p>
    Following ideation, research, and a bit of basic modelling to check that the idea seemed
    numerically viable, I moved on to implementation. As with systems in general, the best way to
    build an incremental game seems to be incrementally, starting with something simple, then adding
    components, so thats what I tried to do. I started with a basic system that takes a given thrust
    and increments a velocity using the correct math. From there I added engines to control the
    thrust, fuel and material to manage those engines, a research system to upgrades the engines,
    and so on. Where possible, but secondary to maintaining physical realism, I tried to make
    systems simple, as my premise had complicated things enough.
  </p>
  <figure>
    <img src="../horizon-diagram.png" alt="diagram of the main systems of Horizon" />
    <figcaption>
      A diagram of all the major components of the systems. The Lorentz factor, a quantification of
      effects like time dilation, creates a crucial point of feedback as it increases with velocity
      and increases the rate of research.
    </figcaption>
  </figure>
  <h3>Challenges</h3>
  <p>
    A major challenge was balancing realism against playability. Of course, there isn't really a
    need to attempt realism at all. Even if I ignored lightspeed as a limit, many players wouldn't
    care about or even notice the lack of realism, besides that I myself don't often value realism
    in games. Nevertheless, for Horizon, I wanted a sense of realism if only because the physics
    interest me and maybe doing so holds some educational value.
  </p>
  <p>
    That said I still had to forgo many potential features. I decided as a rule that unless I had a
    reason other than realism to include a feature, I wouldn't include it, but whatever I did
    include I would make some effort to make realistic. For an incremental game, this eliminated
    many features, and what remained was reasonable to manage. Even still, I had to make compromises
    on some features: research times are extremely short, the fuel capture system assumes there's
    much more gas in space than in reality (by about 10 orders of magnitude), and faster-than-light
    communication, which is fundamental to the game's premise, is not possible according to the
    no-communication theorem. But few players would notice or care about these things anyway.
  </p>
  <h3>Review</h3>
  <p>
    Overall, I'm quite happy with Horizon so far. I think it captures the interesting parts of its
    premise without being over-complicated, and aesthetically it's very crunchy and numerical in a
    way that I personally like.
  </p>
  <p>
    There are plenty of issues though. General clarity could be improved; some elements might be
    better represented graphically than numerically. I'd like there to be more feedback from Horizon
    to Earth (as suggested by Frank Lantz), like a data collection system to unlock research topics.
    And probably most lacking is the arc of progression. The start is very slow – in fact the
    combustion engines are so inefficient as to be basically a waste of fuel (maybe another place I
    should've compromised on realism!) – and the later stages of the game just spiral upward and end
    nowhere. But these are good issues in that they inspire ideas, so I think the current build at
    least serves as a strong proof of concept should I choose to work on this further.
  </p>
</Game>

<style>
  figure > img {
    width: 100%;
    object-fit: contain;
    border: 2px inset var(--text-faded);
  }

  figcaption {
    font-size: small;
  }
</style>
