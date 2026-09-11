import { GoLessonDiagram } from './GoLessonDiagram';
import { GoEyesQuickCheck } from './GoEyesQuickCheck';
import {
  eyeExample,
  eyePoints,
  falseEye,
  falseEyeCaptured,
  oneEye,
  oneEyeCaptured,
  twoEyes,
  unsettled,
} from './life-and-death-positions';

export const readingLifeAndDeathOutline = [
  { id: 'overview', title: 'Can this group survive?' },
  { id: 'eyes', title: 'What is an eye?' },
  { id: 'one-eye', title: 'Why one eye is not enough' },
  { id: 'two-eyes', title: 'Why two eyes keep a group alive' },
  { id: 'group-status', title: 'Alive, dead, or undecided?' },
  { id: 'false-eyes', title: 'False eyes' },
  { id: 'quick-check', title: 'Quick Check' },
  { id: 'summary', title: 'Summary' },
] as const;

export function ReadingLifeAndDeathLesson() {
  return (
    <article className="flex min-w-0 flex-col gap-12 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:leading-relaxed [&_section]:flex [&_section]:scroll-mt-8 [&_section]:flex-col [&_section]:gap-5">
      <section id="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Can this group survive?</h2>
        <p>
          You already know how groups share liberties and how captures work. Now
          look one step further: can a group keep its liberties even when the
          opponent surrounds it? Reading means imagining the next moves before
          playing them.
        </p>
        <GoLessonDiagram
          stones={unsettled}
          label="A black group in the upper left corner is surrounded by white stones. Three adjacent empty points remain inside along the top edge."
          caption="Black to play. Does being surrounded mean this group must be captured? Keep this question in mind."
        />
        <p className="text-muted-foreground">
          By the end, you will recognize simple eyes, explain why two eyes
          protect a group, and spot a false eye. These small boards show local
          positions; assume the surrounding white stones are safe and Black
          cannot escape through them.
        </p>
      </section>

      <section id="eyes" aria-labelledby="eyes-heading">
        <h2 id="eyes-heading">What is an eye?</h2>
        <p>
          An eye is an enclosed space inside a group. Start with the simplest
          kind: one empty intersection surrounded by friendly stones. At an edge
          or corner, the board boundary helps enclose it.
        </p>
        <GoLessonDiagram
          stones={eyeExample}
          markers={[{ x: 0, y: 0 }]}
          label="Three connected black stones enclose the marked upper left corner intersection. Empty intersections also remain outside the group."
          caption="The marked corner point is an eye. Empty points beside the outside of the group are outside liberties."
        />
        <p>
          An eye is still a liberty. Its value comes from being enclosed, but
          enclosure alone does not make a group safe. We also need to check
          whether the stones around it can be captured.
        </p>
      </section>

      <section id="one-eye" aria-labelledby="one-eye-heading">
        <h2 id="one-eye-heading">Why one eye is not enough</h2>
        <p>
          Once all outside liberties are filled, a group with just one
          single-point eye has only one liberty left. The opponent can play
          inside that eye and capture the whole group.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            stones={oneEye}
            markers={[{ x: 0, y: 0 }]}
            label="Three connected black stones in the upper left corner are surrounded by White. Their only liberty is the marked corner eye."
            caption="Before: White to play. The corner eye is Black’s last liberty."
          />
          <GoLessonDiagram
            stones={oneEyeCaptured}
            label="White has played in the upper left corner. All three black stones have been removed, leaving new liberties beside the white stone."
            caption="After: White fills the eye and captures all three black stones."
          />
        </div>
        <p>
          These examples use the usual rule that self-capture is forbidden.
          First remove any enemy stones captured by a move, then check the
          liberties of the stone just played. White’s move is legal because
          removing Black creates new liberties.
        </p>
        <p className="text-muted-foreground">
          One eye does not guarantee safety. That does not mean every group with
          one eye is dead: it might still make another eye or connect to safety.
        </p>
      </section>

      <section id="two-eyes" aria-labelledby="two-eyes-heading">
        <h2 id="two-eyes-heading">Why two eyes keep a group alive</h2>
        <GoLessonDiagram
          stones={twoEyes}
          markers={eyePoints}
          label="One connected black group has two separate marked eyes on the top edge, at columns one and three. White occupies every outside liberty."
          caption="White to play. Both marked points are genuine eyes of the same connected black group."
        />
        <p>
          Imagine White playing in either marked eye. Black would still have the
          other eye as a liberty, so no black stones would be captured. White’s
          new stone would have no liberties: that move is illegal.
        </p>
        <p>
          White cannot fill both eyes in one turn. With two separate, genuine
          eyes, this group is alive without needing help from other groups.
          Black does not need to add a stone inside either eye.
        </p>
        <p className="text-muted-foreground">
          Count separate spaces, not empty points. Two adjacent empty points
          inside one enclosure are one eye space, not two eyes.
        </p>
      </section>

      <section id="group-status" aria-labelledby="group-status-heading">
        <h2 id="group-status-heading">Alive, dead, or still undecided?</h2>
        <ul className="flex list-disc flex-col gap-3 pl-5 leading-relaxed">
          <li>
            <strong>Alive:</strong> the group can survive correct attack. The
            two-eye group above is already safe, even if White moves first.
          </li>
          <li>
            <strong>Dead:</strong> the group cannot avoid eventual capture, even
            with best defense. The surrounded one-eye example cannot escape or
            make another eye. Dead stones may still be on the board.
          </li>
          <li>
            <strong>Undecided:</strong> the next move matters. A group may be
            able to live if it gets the chance to make its second eye.
          </li>
        </ul>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            stones={unsettled}
            markers={[{ x: 1, y: 0 }]}
            label="The opening position, with three empty points along the top edge inside Black’s boundary. The middle point, column two, is marked."
            caption="Black to play: place a stone at the marked middle point. Three empty points are currently one space."
          />
          <GoLessonDiagram
            stones={twoEyes}
            markers={eyePoints}
            label="Black has played at column two on the top edge, dividing the enclosed space into two separate marked eyes."
            caption="After Black’s move: two eyes. The new stone connects to the black row below."
          />
        </div>
        <p>
          This answers the opening question: Black can live by dividing the
          space. If White plays at that middle point first, Black cannot make
          two eyes here and will eventually be captured. Before calling a group
          dead, ask what it can still do and whose turn it is.
        </p>
      </section>

      <section id="false-eyes" aria-labelledby="false-eyes-heading">
        <h2 id="false-eyes-heading">
          False eyes: check the surrounding stones
        </h2>
        <p>
          A false eye looks enclosed by friendly stones, but part of its
          boundary is vulnerable. The stones beside that space may not belong to
          the same connected group. An opponent can sometimes play there and
          capture just one part of the boundary.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 [&_figure]:p-3 [&_svg]:max-w-40">
          <GoLessonDiagram
            stones={falseEye}
            markers={[{ x: 0, y: 0 }]}
            label="The marked upper left corner touches two separate black groups. The lone black stone immediately to its right has only that corner as a liberty."
            caption="Before: White to play. The black stone just right of the marked corner is not connected to the black stones below."
          />
          <GoLessonDiagram
            stones={falseEyeCaptured}
            label="White has played in the upper left corner and captured only the black stone immediately to its right. The lower black group remains."
            caption="After: White captures the lone stone. The apparent eye opens up; the lower black stones remain on the board."
          />
        </div>
        <p>
          White’s move gains a liberty by capturing that lone stone. The other
          black stones do not protect it just because they touch the same empty
          point. When counting eyes, check whether their surrounding stones are
          secure. This example identifies a false eye; it does not decide the
          eventual fate of the lower group.
        </p>
      </section>

      <section id="quick-check" aria-labelledby="quick-check-heading">
        <h2 id="quick-check-heading">Quick Check</h2>
        <GoEyesQuickCheck />
      </section>

      <section id="summary" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Summary</h2>
        <ul className="flex list-disc flex-col gap-3 pl-5 leading-relaxed">
          <li>Identify the connected group you are trying to save.</li>
          <li>
            Look for separate enclosed spaces, rather than counting empty
            points.
          </li>
          <li>Check the boundary stones: an apparent eye may be false.</li>
          <li>Two genuine eyes make the group independently alive.</li>
          <li>
            With fewer eyes, ask whether a move can make another eye or connect
            to safety.
          </li>
        </ul>
        <p className="text-muted-foreground">
          Later lessons can explore seki, where groups survive through mutual
          dependence, and ko, where repeating positions changes the fight.
          Capturing races, scoring disputes, and advanced life-and-death puzzles
          also come later. For now, practice explaining why each eye is safe.
        </p>
      </section>
    </article>
  );
}
