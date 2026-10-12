// react imports
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// components
import SubpageShell from "../../components/SubpageShell";
import Project from "../../components/Project";

// data
import { projects } from "../../data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title} | Krzysztof Wójtowicz`
      : "Krzysztof Wójtowicz",
    description: project?.short,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <SubpageShell back="/#projects">
      <Project project={project} />
    </SubpageShell>
  );
}
