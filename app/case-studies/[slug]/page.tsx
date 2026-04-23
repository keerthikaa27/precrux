import { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";
import { caseStudies } from "@/lib/caseStudies"; 

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const caseStudy = caseStudies.find(c => c.slug === params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study | Precrux",
    };
  }

  return {
    title: caseStudy.seoTitle || `${caseStudy.title} | Precrux`,

    description:
      caseStudy.seoDescription || caseStudy.result,

    openGraph: {
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      url: `https://precrux.com/case-studies/${caseStudy.slug}`,
      images: [
        {
          url: caseStudy.img,
          alt: caseStudy.title,
        },
      ],
    },

    twitter: {
      title: caseStudy.seoTitle,
      description: caseStudy.seoDescription,
      images: [caseStudy.img],
    },

    alternates: {
      canonical: `https://precrux.com/case-studies/${caseStudy.slug}`,
    },
  };
}

export default function Page({ params }: Props) {
  return <CaseStudyClient slug={params.slug} />;
}