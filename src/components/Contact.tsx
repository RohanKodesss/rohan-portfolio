import { email, github } from "../content";

export function Contact() {
  const [user, domain] = email.split("@");

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <h2 className="sec-title" data-reveal>
          Contact
        </h2>

        <p className="contact-lede" data-reveal style={{ ["--d" as string]: "80ms" }}>
          Have a product in mind, or a role to fill? Write to me. I answer every message.
        </p>

        <a
          className="contact-email"
          href={`mailto:${email}`}
          data-reveal
          style={{ ["--d" as string]: "140ms" }}
        >
          <span>
            {user}@<wbr />
          </span>
          <span>{domain}</span>
        </a>

        <div className="contact-meta">
          <span>India</span>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://inkloom.art" target="_blank" rel="noreferrer">
            Inkloom
          </a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </section>
  );
}
