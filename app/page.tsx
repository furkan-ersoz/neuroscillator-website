import {
  DemoVideo,
  Faq,
  Footer,
  Header,
  Hero,
  HowWorks,
  KeyBenefits,
  PrivateDemoSignup,
  ProductExplanation,
} from "@/components";

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-7xl px-6 pb-16 pt-4 lg:px-10">
      <Header />
      <Hero />
      <DemoVideo />
      <ProductExplanation />
      <HowWorks />
      <KeyBenefits />
      <PrivateDemoSignup />
      <Faq />
      <Footer />
    </main>
  );
}
