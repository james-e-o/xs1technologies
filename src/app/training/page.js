import Icon from "@/components/Icon";
import PageHero, { ActionLink } from "@/components/PageHero";
import Reveal from "@/components/training/Reveal";
import QuestionBlobs from "@/components/training/QuestionBlobs";
import { CorporateScene, IndividualScene, YouthScene } from "@/components/training/Scenes";

export const metadata = {
  title: "Technology Training",
  description:
    "Practical technology training for organisations, individuals and young people: web development, AI tools, digital productivity and business technology.",
};

const audiences = [
  {
    id: "corporate",
    number: "01",
    tag: "Organisations",
    label: "Corporate teams",
    icon: "building",
    summary: "Workshops shaped around your team's goals and tools.",
    points: ["Team workshops", "Business technology", "AI productivity"],
    card: "border-navy bg-navy text-white",
    chip: "bg-white/10 text-white",
  },
  {
    id: "individuals",
    number: "02",
    tag: "Personal growth",
    label: "Individuals",
    icon: "code",
    summary: "Build digital skills you can use straight away.",
    points: ["Web development", "AI tools", "Digital productivity"],
    card: "border-navy/10 bg-white text-navy",
    chip: "bg-navy/5 text-navy",
  },
  {
    id: "young-people",
    number: "03",
    tag: "Parents welcome",
    label: "Young people",
    icon: "graduation",
    summary: "A head start in tech for the next generation.",
    points: ["Web development", "AI tools", "Digital confidence"],
    card: "border-turquoise/40 bg-turquoise/25 text-navy",
    chip: "bg-white/60 text-navy",
  },
];

// Which audiences each topic is relevant to. Adjust if your offering differs.
const topics = [
  ["Web development", "How digital products are put together.", "code", ["Individuals", "Young people"]],
  ["Artificial intelligence", "AI tools and practical productivity uses.", "workflow", ["Teams", "Individuals", "Young people"]],
  ["Digital productivity", "Technology for clearer, more effective work.", "layers", ["Teams", "Individuals"]],
  ["Business technology", "Software and workflows for team roles.", "building", ["Teams"]],
  ["Corporate workshops", "Sessions shaped around organisational goals.", "graduation", ["Teams"]],
];

function Chips({ items }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          className="rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy transition hover:-translate-y-0.5 hover:border-turquoise hover:bg-turquoise/15"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Steps({ steps }) {
  return (
    <ol className="mt-7 grid gap-3 sm:grid-cols-3">
      {steps.map((step, i) => (
        <li
          className="group relative rounded-2xl border border-navy/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-turquoise hover:shadow-[0_18px_36px_-24px_rgba(16,42,67,0.55)]"
          key={step}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-turquoise transition group-hover:bg-turquoise group-hover:text-navy">
            {i + 1}
          </span>
          <p className="mt-3 text-sm font-semibold leading-5 text-navy">{step}</p>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-turquoise sm:block"
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function AudienceSection({ id, eyebrow, title, blurb, chips, steps, cta, scene, flip = false, bg = "" }) {
  return (
    <section className={`scroll-mt-24 py-14 lg:py-20 ${bg}`} id={id}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-3">{title}</h2>
          <p className="mt-4 max-w-xl leading-7 text-ink/65">{blurb}</p>
          <Chips items={chips} />
          <Steps steps={steps} />
          <div className="mt-8">
            <ActionLink>{cta}</ActionLink>
          </div>
        </Reveal>
        <Reveal className={flip ? "lg:order-1" : ""} delay={150}>
          <div className="rounded-[2rem] border border-navy/10 bg-white p-3 shadow-[0_30px_60px_-40px_rgba(16,42,67,0.55)] transition duration-500 hover:-rotate-1 hover:scale-[1.02]">
            {scene}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function TrainingPage() {
  return (
    <>
      <PageHero
        description="Practical technology learning for organisations, individuals and the next generation."
        eyebrow="Technology training"
        title="Training for every stage of the journey."
      >
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {audiences.map((a) => (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:border-turquoise hover:bg-turquoise/10"
              href={`#${a.id}`}
              key={a.id}
            >
              <Icon className="h-4 w-4 text-teal-800" name={a.icon} />
              {a.label}
            </a>
          ))}
        </div>
        <div className="mt-5">
          <ActionLink>Enquire About Training</ActionLink>
        </div>
      </PageHero>

      {/* Who we train: three at a glance */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <Reveal>
          <p className="eyebrow">Who we train</p>
          <h2 className="section-title mt-3">Three audiences. One practical approach.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal delay={i * 120} key={a.id}>
              <a
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(16,42,67,0.6)] ${a.card}`}
                href={`#${a.id}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-turquoise text-navy transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" name={a.icon} />
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] opacity-50">{a.number}</span>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] opacity-70">{a.tag}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{a.label}</h3>
                <p className="mt-3 text-sm leading-6 opacity-80">{a.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {a.points.map((point) => (
                    <li className={`rounded-full px-3 py-1 text-xs font-semibold ${a.chip}`} key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Explore <span className="transition duration-300 group-hover:translate-x-1.5">→</span>
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full border border-current opacity-10 transition duration-500 group-hover:scale-125"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <AudienceSection
        bg="bg-white"
        blurb="Workshops shaped around your goals, your roles and the way your team actually works."
        chips={["Business technology", "AI productivity", "Digital workflows", "Team workshops"]}
        cta="Enquire for your team"
        eyebrow="Corporate training"
        id="corporate"
        scene={<CorporateScene />}
        steps={["Share your goals", "We shape the session", "Your team practises"]}
        title="Upskill your team around the tools they use."
      />

      <AudienceSection
        blurb="Start from where you are and build skills you can put to work straight away."
        chips={["Web development", "AI tools", "Digital productivity"]}
        cta="Enquire as an individual"
        eyebrow="Individual training"
        flip
        id="individuals"
        scene={<IndividualScene />}
        steps={["Tell us where you are", "Pick your focus", "Learn by doing"]}
        title="Build skills you can use right away."
      />

      <AudienceSection
        bg="bg-[#eaf7f5]"
        blurb="For young people ready to explore tech beyond school. Parents and guardians are welcome to enquire on their behalf."
        chips={["Web development", "AI tools", "Digital confidence"]}
        cta="Enquire for a young person"
        eyebrow="Young people · parents welcome"
        id="young-people"
        scene={<YouthScene />}
        steps={["A parent or guardian enquires", "We find the right starting point", "They build and explore"]}
        title="Give the next generation a head start in tech."
      />

      {/* What we cover */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <Reveal>
          <p className="eyebrow">What we cover</p>
          <h2 className="section-title mt-3">Learning directions, at a glance.</h2>
          <p className="mt-4 max-w-xl leading-7 text-ink/65">
            Each topic can be shaped for the people in the room. Tags show who it is usually shaped for.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topics.map(([title, description, icon, who], i) => (
            <Reveal delay={i * 80} key={title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-turquoise">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-turquoise/20 text-teal-900 transition duration-300 group-hover:scale-110 group-hover:bg-turquoise">
                  <Icon className="h-5 w-5" name={icon} />
                </span>
                <h3 className="mt-4 font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {who.map((w) => (
                    <li className="rounded-full bg-mist px-2 py-0.5 text-[10px] font-semibold text-teal-900" key={w}>
                      {w}
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-turquoise transition duration-300 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="eyebrow">Quick answers</p>
            <h2 className="section-title mt-3">Questions people ask.</h2>
            <p className="mt-4 max-w-xl leading-7 text-ink/65">Hover over a bubble, or tap it, to see the answer.</p>
          </Reveal>
          <div className="mt-10">
            <QuestionBlobs />
          </div>
        </div>
      </section>

      {/* Closing enquiry */}
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-turquoise/40"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-turquoise/40"
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">Start an enquiry</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us who the training is for.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
              Share your goals and who will be learning. Availability, delivery and programme details are
              confirmed during enquiry.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionLink>Corporate enquiry</ActionLink>
              <ActionLink secondary>Individual enquiry</ActionLink>
              <ActionLink secondary>Young person enquiry</ActionLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}