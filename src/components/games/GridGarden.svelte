<script>
  import Game from '../Game.svelte';

  export let game;
</script>

<Game {game}>
  <p>
    <i>Grid Garden</i> is my attempt at an incremental game for the spreadsheet. My goal was to
    leverage the ways we normally interact with spreadsheets - typing, copying, pasting, selecting,
    and deleting text in cells - and the data organization affordances of the grid. I was also
    inspired by
    <a href="https://everest-pipkin.com/barnacle-goose/" target="_blank" rel="noopener noreferrer"
      >Everest Pipkin's <i>Barnacle Goose</i></a
    > and its item combinations and non-clicker incremental systems, which both felt suited for adaptation
    to the spreadsheet.
  </p>
  <h3>Process</h3>
  <p>
    I started with the ideas of creating items by typing, combining items, and creating an abstract
    garden on the grid of the spreadsheet. From there I decided on treating the spreadsheet as a
    space in which items can be combined and compartmentalizing item creation to an item that has a
    sort of input field. That then presented the question of what should happen when the player
    tries to create an invalid item or makes an error. While it may have worked for nothing to
    happen, it seemed more interesting to convert the invalid text by length into an item, compost,
    which could serve as the substrate for the garden. Around the same time, I thought of digging up
    buried items as another interaction, as only typing into a single cell to generate items felt
    too restrictive.
  </p>
  <p>
    I then broke down the information that might need to exist for a cell in the garden and for an
    item. A single cell might need to hold item text placed by the player, a flag for compost, and
    text or an ID for a buried item. Items might need counts, descriptions, recipes, and visual
    information.
  </p>
  <p>
    As I figured out what information was needed, I also started to lay out the structure of the
    workbook. I realized that for the amount of information a given cell needed it would be easiest
    to use multiple sheets in parallel, such that A1 of one sheet corresponds to A1 of the others. I
    created the main garden sheet that uses cell fills and conditional formatting for display and
    other only holds item text, a surface sheet that holds compost information, and an underground
    sheet that holds buried items. Structuring the information for items was simpler as that could
    exist in basic tables, organized in different sheets, and be easily accessed with Match and
    VLookup functions.
  </p>
  <p>
    From there, implementation was relatively straightforward, learning VBA aside. And the project
    does use a significant amount of VBA, but its purpose is not to fight the inherent affordances
    of the spreadsheet. Rather the code mainly serves to apply complex comparisons and operations
    across worksheets and react to user input in a way that basic Excel functions cannot.
  </p>
  <h3>VBA and Excel</h3>
  <p>
    Working in VBA was a challenge. I don't like the syntax and the errors are not especially clear
    or helpful. Working in Excel generally, however, was convenient in that it's very natural to
    edit and access tabular information, such as the inventory or item recipes. It calls for a
    different, more data driven kind of design and thinking than I'm used to and which I hope to
    transfer to games outside of spreadsheets.
  </p>
  <h3>Shovels</h3>
  <p>
    A small feature I really like and would like to highlight is the dig-area scaling with shovels.
    Aside from the comedic gaminess of more shovels allowing you to dig more efficiently, I like the
    scaling system I ended up with where each shovel allows you to dig in an area one row or column
    larger. I first tried having each shovel increase the area by one cell, but the growth of that
    felt much too slow and didn't adequately incentivize making shovels. Squaring the number of
    shovels is another obvious option, and one that might even work well, but I suspected it would
    scale too quickly. The row and column system is a middle ground. The current system may also be
    somewhat unintuitive, but in a game that isn't too complicated overall, I think the bit of extra
    complexity in one of the primary interactions (digging) is a benefit.
  </p>
  <h3>Improvement</h3>
  <p class="final">
    If I had more time to work on this or were to continue work on it, I'd look at tuning the
    incremental systems, which I didn't have much time to do, improving logging, easing recipe
    discovery, and adding more items, especially items with special behaviors like the materializer
    and automaton. One of the more exciting things to me currently is the little machine that can be
    created by placing an automaton below a materializer, and I would like to have more of those be
    possible. And of course, there are probably bugs that I haven't found and fixed.
  </p>
</Game>
