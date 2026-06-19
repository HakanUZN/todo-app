interface ProgressRingProps {
  completed: number;
  total: number;
}

const RADIUS = 34;
const STROKE = 7;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ProgressRing({ completed, total }: ProgressRingProps) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;

  return (
    <div
      className="progress-ring"
      role="img"
      aria-label={`${completed} / ${total} görev tamamlandı, yüzde ${pct}`}
    >
      <svg width="84" height="84" viewBox="0 0 84 84">
        <circle
          cx="42"
          cy="42"
          r={RADIUS}
          className="progress-ring__bg"
          strokeWidth={STROKE}
          fill="none"
        />
        <circle
          cx="42"
          cy="42"
          r={RADIUS}
          className="progress-ring__fg"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 42 42)"
        />
        <text x="42" y="38" textAnchor="middle" className="progress-ring__pct">
          %{pct}
        </text>
        <text x="42" y="54" textAnchor="middle" className="progress-ring__label">
          {completed}/{total}
        </text>
      </svg>
    </div>
  );
}
