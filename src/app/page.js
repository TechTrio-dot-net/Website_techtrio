
import TestimonialSection from "./../components/testimonial";
import Products from "../components/Products";
import ClientLogosCarousel from "../components/ClientCarousel";
import ContactForm from "../components/ContactForm";
import TechStack from "../components/TechStack";
import Marquee from "../components/HomeHero";

export default function Home() {
  return (
    <main className="pt-16 min-h-screen">
      <Marquee/>
      <Products />
      <TestimonialSection />
      <TechStack />
      <ClientLogosCarousel />
      <ContactForm />
    </main>
  );
}
