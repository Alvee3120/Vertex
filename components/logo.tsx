import Link from "next/link";
import { cn } from "@/lib/utils";

const SHIELD_PATH =
  "M8,10 L38,2 L50,16 L62,2 L92,10 L92,52 C92,84 74,104 50,116 C26,104 8,84 8,52 Z";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 116"
      className={className}
      role="img"
      aria-label="Vertex Security Solutions shield emblem"
    >
      <defs>
        <clipPath id="vertex-shield-clip">
          <path d={SHIELD_PATH} />
        </clipPath>
      </defs>
      <path d={SHIELD_PATH} fill="#023880" />
      <g clipPath="url(#vertex-shield-clip)">
        <polygon points="34,48 92,8 92,54 76,98 52,116" fill="#e40a2d" />
        <path
          d="M20,56 L42,80 L82,26"
          fill="none"
          stroke="#ffffff"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function Logo({
  className,
  showTagline = false,
  href = "/",
}: {
  className?: string;
  showTagline?: boolean;
  href?: string;
}) {
  return (
    <Link href={href} className={cn("group flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-auto shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-heading text-[1.6rem] font-extrabold tracking-tight text-navy uppercase">
          Vertex
        </span>
        <span className="font-heading -mt-0.5 text-[0.62rem] font-bold tracking-[0.22em] text-red uppercase">
          Security Solutions
        </span>
        {showTagline && (
          <span className="mt-1.5 text-[0.7rem] text-steel italic">
            Protecting People &bull; Assets &bull; Reputation
          </span>
        )}
      </div>
    </Link>
  );
}
