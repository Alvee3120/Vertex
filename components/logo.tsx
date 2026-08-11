import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import logoImage from "@/app/logo.png";

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
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link href={href} className={cn("flex items-center", className)}>
      <Image
        src={logoImage}
        alt="Vertex Security Solutions"
        priority
        className="h-14 w-auto"
      />
    </Link>
  );
}
