import { GoLibertiesQuickCheck } from './GoLibertiesQuickCheck';
import { GoLessonDiagram } from './GoLessonDiagram';

export const stonesLibertiesTerritoryOutline = [
  { id: 'overview', title: 'Overview' },
  { id: 'stones', title: 'Stones' },
  { id: 'liberties', title: 'Liberties' },
  { id: 'capturing', title: 'Capturing' },
  { id: 'quick-check', title: 'Quick Check' },
  { id: 'summary', title: 'Summary' },
] as const;

export function StonesLibertiesTerritoryLesson() {
  return (
    <article className="flex min-w-0 flex-col gap-12 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:leading-relaxed [&_section]:flex [&_section]:scroll-mt-8 [&_section]:flex-col [&_section]:gap-5">
      <section id="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Overview</h2>
        <p>
          Go starts with an empty board. Two players take turns placing black
          and white stones, building connected groups and surrounding empty
          space. A move can protect your stones, threaten your opponent’s, or
          help claim territory.
        </p>
        <p className="text-muted-foreground">
          By the end of this lesson, you will be able to place a stone, count a
          group’s liberties, and recognize a capture. The small boards below
          show local examples of ideas that also apply on a full board.
        </p>
      </section>
      <section id="stones" aria-labelledby="stones-heading">
        <h2 id="stones-heading">Stones</h2>
        <p>
          Black plays first. Place a stone on an empty intersection, including
          an edge or corner, rather than inside a square. Once played, a stone
          stays there unless it is captured.
        </p>
        <p>
          Stones of the same color form a connected group when they touch along
          the grid lines. Diagonal neighbors are not connected.
        </p>
        <GoLessonDiagram
          label="A five by five grid with two connected black stones in the center and one separate white stone near the top right."
          caption="The two black stones share a line and form one group."
          stones={[
            { x: 1, y: 2, color: 'black' },
            { x: 2, y: 2, color: 'black' },
            { x: 3, y: 1, color: 'white' },
          ]}
        />
      </section>
      <section id="liberties" aria-labelledby="liberties-heading">
        <h2 id="liberties-heading">Liberties</h2>
        <p>
          A liberty is an empty intersection immediately next to a stone along a
          grid line. Diagonal spaces do not count. An isolated stone in the
          center has four liberties; on an empty edge it has three, and in a
          corner it has two.
        </p>
        <p>
          Connected stones share their liberties. Count each empty intersection
          touching the group once, even if it touches more than one stone in
          that group.
        </p>
        <GoLessonDiagram
          label="One black stone at the center with its four adjacent empty intersections marked."
          caption="The four highlighted points are this stone’s liberties."
          stones={[{ x: 2, y: 2, color: 'black' }]}
          markers={[
            { x: 1, y: 2 },
            { x: 3, y: 2 },
            { x: 2, y: 1 },
            { x: 2, y: 3 },
          ]}
        />
      </section>
      <section id="capturing" aria-labelledby="capturing-heading">
        <h2 id="capturing-heading">Capturing</h2>
        <p>
          When a move fills the last liberty of an opposing stone or connected
          group, that whole group is removed from the board. A group with only
          one liberty left is in <em>atari</em>.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            label="A white center stone surrounded by black on three sides, with one marked liberty below."
            caption="Before: White is in atari. The highlighted point is its last liberty."
            stones={[
              { x: 2, y: 2, color: 'white' },
              { x: 1, y: 2, color: 'black' },
              { x: 3, y: 2, color: 'black' },
              { x: 2, y: 1, color: 'black' },
            ]}
            markers={[{ x: 2, y: 3 }]}
          />
          <GoLessonDiagram
            label="Four black stones surround an empty center after the white stone has been captured."
            caption="After: Black fills the last liberty. The white stone is removed."
            stones={[
              { x: 1, y: 2, color: 'black' },
              { x: 3, y: 2, color: 'black' },
              { x: 2, y: 1, color: 'black' },
              { x: 2, y: 3, color: 'black' },
            ]}
          />
        </div>
        <p className="text-muted-foreground">
          Capturing opens new liberties. There are also rules about self-capture
          and repeating positions, including ko; this first example focuses on a
          straightforward capture.
        </p>
      </section>
      <section id="quick-check" aria-labelledby="quick-check-heading">
        <h2 id="quick-check-heading">Quick Check</h2>
        <GoLibertiesQuickCheck />
      </section>
      <section id="summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary</h2>
        <p>
          Territory is empty space enclosed by your living stones. The edges of
          the board can help form its boundary. Capturing is useful, but
          surrounding space is central to the game.
        </p>
        <GoLessonDiagram
          label="Black stones form a boundary around four marked empty intersections in the upper left corner."
          caption="The four highlighted points illustrate enclosed space. In a real game, territory depends on the surrounding groups remaining alive; scoring details vary by ruleset."
          stones={[
            { x: 2, y: 0, color: 'black' },
            { x: 2, y: 1, color: 'black' },
            { x: 2, y: 2, color: 'black' },
            { x: 1, y: 2, color: 'black' },
            { x: 0, y: 2, color: 'black' },
          ]}
          markers={[
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
          ]}
        />
        <ul className="flex list-disc flex-col gap-3 pl-5 leading-relaxed">
          <li>
            Place stones on intersections. Connected stones work as a group.
          </li>
          <li>Liberties are adjacent empty points along the grid lines.</li>
          <li>
            A group loses its place on the board when its last liberty is filled
            by an opponent.
          </li>
          <li>
            Build living groups that surround territory, rather than chasing
            every capture.
          </li>
        </ul>
        <p className="text-muted-foreground">
          Next, explore what makes a group live and why two eyes matter in
          Reading life and death.
        </p>
      </section>
    </article>
  );
}
