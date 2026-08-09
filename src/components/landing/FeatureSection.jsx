import { Code2, UsersRound, Zap } from "lucide-react";
import { landingFeatures } from "@/data/challengeDays";

const icons = { code: Code2, users: UsersRound, zap: Zap };

export default function FeatureSection() {
  return (
    <section id="how-it-works" className="bg-white px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-kicker">A better learning loop</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] text-slate-950 sm:text-5xl">Learn less.<br />Remember more.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            ABTalks replaces endless watching with a simple rhythm: understand the idea, build something useful, get unstuck quickly, and show your work.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {landingFeatures.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <article key={feature.title} className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f7f2] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5">
                <span className="absolute right-5 top-3 text-7xl font-black tracking-[-0.08em] text-slate-200/80">{feature.number}</span>
                <div className={`relative grid size-12 place-items-center rounded-2xl ${index === 0 ? "bg-blue-600 text-white" : index === 1 ? "bg-orange-400 text-slate-950" : "bg-slate-950 text-white"}`}>
                  <Icon className="size-6" />
                </div>
                <div className="relative mt-20">
                  <h3 className="text-xl font-black tracking-[-0.03em] text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
