// react imports
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// components
import SubpageShell from "../../components/SubpageShell";
import Activity from "../../components/Activity";

// data
import { activities } from "../../data/activities";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);

  return {
    title: activity
      ? `${activity.title} | Krzysztof Wójtowicz`
      : "Krzysztof Wójtowicz",
    description: activity?.short,
  };
}

export default async function ActivityPage({ params }: Props) {
  const { slug } = await params;
  const index = activities.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const activity = activities[index];
  const next = activities[(index + 1) % activities.length];

  return (
    <SubpageShell back="/#activities">
      <Activity activity={activity} />
      <Link
        href={`/activities/${next.slug}`}
        className="self-end text-base md:text-lg font-semibold text-secondary transition duration-300 ease-in-out hover:text-primary"
      >
        {`next: ${next.title}() ->`}
      </Link>
    </SubpageShell>
  );
}
