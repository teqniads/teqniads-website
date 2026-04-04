import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Teqnia Digital Solutions. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative pt-24 md:pt-32">
        <div
          className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.09) 0%, transparent 70%)",
          }}
        />
        <Container>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl text-white mb-4">
              Contact Us
            </h1>
            <p className="text-(--color-muted) text-lg max-w-xl">
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              get back to you shortly.
            </p>
          </div>
        </Container>
      </Section>

      {/* Form section */}
      <Section className="border-t border-(--color-slate)/50">
        <Container>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>

          {/* Secondary contact info */}
          <div className="max-w-xl mx-auto mt-14 pt-10 border-t border-(--color-slate)/50 flex flex-col gap-6">
            <p className="text-(--color-muted) text-sm">
              Or reach us directly at{" "}
              <a
                href="mailto:info@teqniads.com"
                className="text-white hover:text-(--color-teal) transition-colors"
              >
                info@teqniads.com
              </a>
            </p>
            <SocialLinks />
          </div>
        </Container>
      </Section>
    </>
  );
}
