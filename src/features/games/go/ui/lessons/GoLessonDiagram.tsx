type Point = { x: number; y: number };
type Stone = Point & { color: 'black' | 'white' };

type GoLessonDiagramProps = {
  label: string;
  caption: string;
  size?: number;
  stones: readonly Stone[];
  markers?: readonly Point[];
};

export function GoLessonDiagram({
  label,
  caption,
  size = 5,
  stones,
  markers = [],
}: GoLessonDiagramProps) {
  const cell = 40;
  const padding = 24;
  const end = padding + (size - 1) * cell;
  const extent = end + padding;
  return (
    <figure className="bg-card flex flex-col items-center gap-3 rounded-xl border p-4 sm:p-5">
      <svg
        viewBox={`0 0 ${extent} ${extent}`}
        role="img"
        aria-label={label}
        className="aspect-square w-full max-w-52 rounded-md border border-amber-950/25 bg-amber-200 shadow-sm"
      >
        {Array.from({ length: size }, (_, index) => (
          <g key={index} className="stroke-amber-950/70" strokeWidth="1">
            <line
              x1={padding}
              y1={padding + index * cell}
              x2={end}
              y2={padding + index * cell}
            />
            <line
              y1={padding}
              x1={padding + index * cell}
              y2={end}
              x2={padding + index * cell}
            />
          </g>
        ))}
        {stones.map(({ x, y, color }) => (
          <image
            key={`${x}-${y}`}
            href={`/figures/stones/go_stone_${color}.svg`}
            x={padding + x * cell - 17}
            y={padding + y * cell - 17}
            width="34"
            height="34"
          />
        ))}
        {markers.map(({ x, y }) => (
          <circle
            key={`${x}-${y}`}
            cx={padding + x * cell}
            cy={padding + y * cell}
            r="6"
            className="fill-primary stroke-background"
            strokeWidth="2"
          />
        ))}
      </svg>
      <figcaption className="text-muted-foreground max-w-prose text-center text-sm leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
