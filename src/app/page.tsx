import CallToAction from "@/components/landing-page/CallToAction";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import PublicNavbar from "@/components/landing-page/PublicNavbar";
import Stats from "@/components/landing-page/Stats";
import Testimonials from "@/components/landing-page/Testimonials";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function LandingPage() {
  const { userId } = await auth();

  if (userId) redirect("/dashboard");

  return (
    <div>
      <PublicNavbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
