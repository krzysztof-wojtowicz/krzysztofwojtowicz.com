// react imports
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// components
import SubpageShell from "../../components/SubpageShell";
import InterestCard from "../../components/InterestCard";

// data
import { interests } from "../../data/interests";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return interests.map((interest) => ({ slug: interest.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const interest = interests.find((item) => item.slug === slug);

  return {
    title: interest
      ? `${interest.title} | Krzysztof Wójtowicz`
      : "Krzysztof Wójtowicz",
    description: interest?.short,
  };
}

export default async function InterestPage({ params }: Props) {
  const { slug } = await params;
  const interest = interests.find((item) => item.slug === slug);

  if (!interest) notFound();

  // TODO: real content, for now only the card is shown
  return (
    <SubpageShell back="/#interests">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <InterestCard interest={interest} clickable={false} />
      </div>
    </SubpageShell>
  );
}
