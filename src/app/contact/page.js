import ContactForm from "./ContactForm";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact XS1 Technologies",
  description:
    "Tell XS1 Technologies about your business technology, software, e-commerce, digital transformation, or training enquiry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Tell us what you are working on, what is getting in the way, or what skills your team wants to build. We will use the details to understand your enquiry."
        eyebrow="Contact XS1 Technologies"
        title="Let’s talk about what your business needs."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.65fr_1.35fr] lg:px-8 lg:py-20">
        <aside>
          <p className="eyebrow">Business enquiries</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-navy">A useful first step starts with the right context.</h2>
          <p className="mt-4 text-sm leading-7 text-ink/65">Share your organisation, the service you are interested in, and a little about the challenge or opportunity. XS1 Technologies has not configured public contact details in this website yet.</p>
          <div className="mt-7 border-l-2 border-turquoise bg-mist p-4 text-sm leading-6 text-ink/70">No address, phone number, or email has been invented. Enquiry delivery must be connected before submissions can be received.</div>
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
