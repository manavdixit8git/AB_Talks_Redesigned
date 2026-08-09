import Link from "next/link";
import { Braces } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Brand({ dark = false, compact = false }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="ABTalks home">
      <span className={cn(
        "grid size-10 place-items-center rounded-xl transition-transform group-hover:-rotate-3",
        dark ? "bg-white text-slate-950" : "bg-slate-950 text-white"
      )}>
        <Braces className="size-5" strokeWidth={2.4} />
      </span>
      {!compact && (
        <span className={cn("text-xl font-black tracking-[-0.04em]", dark ? "text-white" : "text-slate-950")}>
          AB<span className="text-blue-500">Talks</span>
        </span>
      )}
    </Link>
  );
}
