import { Hero } from "@/components/home/Hero";
import { AlDarbBanner } from "@/components/home/AlDarbBanner";
import { WhyQatar } from "@/components/home/WhyQatar";
import { Departments } from "@/components/home/Departments";
import { FeaturedRoles } from "@/components/home/FeaturedRoles";
import { Stories } from "@/components/home/Stories";
import { BenefitsTeaser } from "@/components/home/BenefitsTeaser";
import { LifeInDoha } from "@/components/home/LifeInDoha";
import { TalentCommunity } from "@/components/shared/TalentCommunity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qatar Airways Careers — Where your ambition meets the world",
  description:
    "Build your career with the World's Best Airline. Explore teams, the Al Darb Qatarisation programme, life in Doha and open roles across the Qatar Airways Group. An independent concept by Iain McMullan.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AlDarbBanner />
      <WhyQatar />
      <Departments />
      <FeaturedRoles />
      <Stories />
      <BenefitsTeaser />
      <LifeInDoha />
      <TalentCommunity />
    </>
  );
}
