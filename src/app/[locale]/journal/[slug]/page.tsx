import { Link } from '@/shared/i18n/navigation';
import Image from 'next/image';

import { Container } from '@/shared/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/shared/ui/breadcrumb';
import { getArticleById, getArticles } from '@/features/journal/api/articles';
import { RelatedArticles } from '@/features/journal/ui/RelatedArticles';

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleById(slug);

  const articles = await getArticles();
  const related = articles.slice(0, 3);

  if (!article) {
    return null;
  }

  return (
    <Container className="py-10">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/journal">Journal</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{article.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="article-header">
        <div className="text-muted-foreground mb-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase">
          <span className="text-primary">{article.tag}</span> &middot;{' '}
          <span>{article.date}</span> &middot; <span>{article.read}</span>
        </div>

        <h1 className="mb-6 text-7xl leading-[1.05] font-medium tracking-tight text-balance">
          {article.title}
        </h1>

        <p className="text-muted-foreground text-lg leading-[1.4] text-pretty">
          Roman soldiers played it across an empire of three continents, but the
          exact rules vanished with Rome itself. A century of scholarship has
          tried to reassemble them from poems, mosaics, and broken boards — with
          predictably partial results.
        </p>
      </header>

      <div className="mx-auto mb-20 max-w-6xl px-10">
        <div className="relative aspect-video overflow-hidden border">
          <Image
            src={article.image}
            alt={article.title}
            width={1280}
            height={720}
            loading="eager"
            className="h-full w-full object-cover"
          />
          <span className="bg-background text-muted-foreground absolute bottom-6 left-6 px-3 py-2 text-xs tracking-wider uppercase">
            Photo &middot; Latrunculi board, Vindolanda c. 200 CE
          </span>
        </div>
        <div className="text-muted-foreground mt-4 max-w-[80ch] text-xs tracking-wide uppercase">
          A gaming board scratched into a paving stone at the Roman fort of
          Vindolanda, on Hadrian's Wall. The 8×8 grid is unmistakable. What was
          played on it is not.
        </div>
      </div>

      <article className="article-content">
        <p>
          When the legions stopped marching, the games they played stopped being
          remembered. For six centuries Romans hunched over their wooden boards
          in barrack rooms and basilicas, at the steps of the Forum, in the back
          rooms of taverns from Britannia to Syria. And then, with the slow
          contraction of the empire, the game vanished — not all at once, but
          the way a campfire goes out, the rules drifting away with the last
          people who cared to teach them.
        </p>
        <p>
          We know what survived. Ovid mentions the game by name, twice. Varro
          defines it in a catalogue of Latin words. A scholiast on Martial gives
          a tantalizing four-line description. There are at least a hundred and
          twenty archaeological boards, scratched or chiseled into stone across
          the territory of the empire. There is a single fully reconstructed
          Roman game-piece, made of bone, found in a tomb in Pompeii.
        </p>
        <p>What we do not have is anything resembling a rulebook.</p>
        <blockquote>
          Discit eques tabulam latrunculorum.
          <cite>— Martial, Epigrams XIV.20</cite>
        </blockquote>
        <h2>
          <span className="num">01 — Sources</span>
          <span>Three poets and a polymath</span>
        </h2>
        <p>
          Almost everything we know about the rules of latrunculi comes from
          four ancient authors. None of them set out to describe the game; they
          mention it in passing, because their readers already knew how it
          worked. The result is a set of observations that read like overheard
          fragments of a conversation.
        </p>
        <p>
          Varro, in De Lingua Latina, defines a latro as a mercenary soldier and
          notes the derivation of the game's name. Ovid, in the Ars Amatoria,
          recommends the game as a courtship skill — and uses the word
          incitus("without movement," i.e. stalemated) as a synonym for utter
          defeat. Martial gives us the word tabula for the board, and the bone
          game-piece — thecalculus — that we now find in every other Roman tomb.
        </p>
        <p>
          The most generous source is the seven-century-later commentator
          Isidore of Seville, who reports a tradition that Pyrrhus of Epirus
          invented the game from his experience of war. Isidore is writing
          centuries after the empire that played latrunculi has dissolved, but
          he had access to texts now lost. His brief account names the pieces as
          milites (soldiers) and gives us the word for the game's central
          tactical idea: captura, the capture.
        </p>

        <h2>
          <span className="num">02 — The reconstruction</span>
          <span>Schädler, 1994</span>
        </h2>
        <p>
          Modern attempts at reconstructing latrunculi go back to the 16th
          century — but the most cited modern version is Ulrich Schädler's,
          published in 1994 in the journal Board Game Studies. Schädler proposed
          a complete ruleset by working backwards from three constraints: the
          games had to be playable, the rules had to be consistent with every
          textual source, and the resulting play had to match the metaphors
          Roman writers used to describe it.
        </p>
        <p>
          That last constraint is the one that does most of the work. When Ovid
          writes that a skilled player "loses no piece while his opponent loses
          many," we can rule out a ruleset where captures happen by chance or by
          a die. When Martial calls a certain piece vagus — wandering, loose,
          exposed — we can guess that the game distinguishes between connected
          and isolated stones. When Isidore reports that the game has a dux, a
          chief, we can rule out rulesets where every piece is equal.
        </p>
        <blockquote>
          Cum medius gemino calculus hoste perit.
          <cite>— Ovid, Tristia II.477</cite>
        </blockquote>
        <p>
          The line from Ovid above —{' '}
          <em>cum medius gemino calculus hoste perit</em>, roughly "when the
          middle stone perishes between two enemies" — is the single sentence on
          which the entire modern reconstruction rests. It tells us that
          captures happen by flanking, that a single stone is taken at a time,
          and that the flanking is symmetric: two enemies, one in the middle.
        </p>
        <h2>
          <span className="num">03 — What we still don't know</span>
          Three open questions
        </h2>
        <p>
          Schädler's reconstruction is the working consensus. It is also
          incomplete. Three large questions remain genuinely unsettled, and the
          literature on each is contradictory enough that a tournament organizer
          running a latrunculi event today still has to choose a side.
        </p>
        <p>
          <strong>First: the role of the dux.</strong> Isidore tells us the game
          has a chief piece, but says nothing about how it moves or what its
          capture costs. Some reconstructions treat the dux as a king — capture
          it and the game ends. Others treat it as a piece that moves like a
          queen, or like a knight. A small minority — including Schädler — argue
          from the silence of Varro and Ovid that the dux did nothing special at
          all, and was merely a marker for identifying the last piece to fall.
        </p>
        <p>
          <strong>Second: the board size.</strong> The archaeological boards
          survive in sizes from 7x8 to 12x8 to 17x18. There are far more 8x8
          boards than any other size, but there are enough of the others that a
          single canonical board cannot be argued from the evidence alone. The
          boards may correspond to regional variants; they may correspond to
          different games entirely. We cannot tell.
        </p>
        <p>
          <strong>Third: what the soldiers actually look like.</strong> The
          Pompeii game-piece is a smooth bone disc, undistinguished. But mosaics
          depict pieces of many shapes, and the Roman writers use a vocabulary —{' '}
          <em>calculus</em>,<em> latro</em>, <em>miles</em>, <em>nummus</em> —
          that suggests several different objects could serve. Were they always
          discs? Were some pieces marked? Did each side have visibly distinct
          pieces, or were they distinguished only by color? We do not know.
        </p>
        <h2>
          <span className="num">04 — Playing it today</span>A game with a
          footnote
        </h2>
        <p>
          Online clubs play latrunculi today by the Schädler rules, which they
          treat the way modern chess players treat the en passant rule — as a
          settled convention, not a historical fact. Tournaments specify an 8×8
          board, a flanking capture, a king-equivalent dux, and a
          stalemate-is-loss rule for endings. The games are short, sharp, and
          somewhat resemble checkers played by chess rules; a competent player
          can finish a match in eight minutes.
        </p>
        <p>
          Whether any of this resembles what a centurion at Vindolanda actually
          played in 200 CE is a question on which the literature remains, in the
          polite phrase of professional historians, divided. The board scratched
          into that Roman pavement is real. The rules we play on it are a
          careful, well-defended guess.
        </p>
        <p>
          Which is, in the end, the only honest way to revive a game that has
          been dead for fifteen hundred years. To play it at all is already to
          know that you might be playing it wrong.
        </p>
      </article>

      <section className="border-t px-10 py-12">
        <RelatedArticles articles={related} />
      </section>
    </Container>
  );
}
