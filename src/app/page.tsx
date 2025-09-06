import CallToAction from "@/components/landing-page/CallToAction";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import SignedOutNav from "@/components/landing-page/SignedOutNav";
import Stats from "@/components/landing-page/Stats";
import Testimonials from "@/components/landing-page/Testimonials";

export default function LandingPage() {
  return (
    <div>
      <SignedOutNav />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
