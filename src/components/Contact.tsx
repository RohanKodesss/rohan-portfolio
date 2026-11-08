import { useState, type FormEvent } from "react";
import { email, github, positioningShort } from "../content";

export function Contact() {
  const [user, domain] = email.split("@");
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Intro: ${name.trim() || "portfolio"}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\n${name.trim()}\n${replyTo.trim()}`.trim(),
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="mono-label">04. // CONTACT</span>
          <div className="section-head__row">
            <h2>Have a <em>fuzzy idea</em>?</h2>
            <p className="section-intro">
              A product, a role, or a question. Tell me what you are trying to make and I will tell
              you how I would start.
            </p>
          </div>
        </div>

        <div className="contact__grid">
          <div className="contact__copy">
            <p className="contact__lede" data-reveal>
              {positioningShort} If you have a fuzzy idea or a role to fill, write to me.
            </p>

            <a
              className="contact__email"
              href={`mailto:${email}`}
              data-reveal
              style={{ ["--d" as string]: "80ms" }}
            >
              <span>
                {user}@<wbr />
              </span>
              <span>{domain}</span>
            </a>

            <p
              className="contact__status"
              data-reveal
              style={{ ["--d" as string]: "120ms" }}
            >
              <span className="status-dot" aria-hidden="true" />
              STATUS: Available for work
            </p>
            <p className="contact__response">I reply within one business day.</p>

            <div className="contact__meta" data-reveal style={{ ["--d" as string]: "160ms" }}>
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

          <form
            className="contact-form card"
            onSubmit={onSubmit}
            data-reveal
            style={{ ["--d" as string]: "100ms" }}
          >
            <div className="contact-form__row">
              <div className="field">
                <label className="mono" htmlFor="contact-name">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setStatus("");
                  }}
                  required
                />
              </div>
              <div className="field">
                <label className="mono" htmlFor="contact-email">
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={replyTo}
                  onChange={(event) => {
                    setReplyTo(event.target.value);
                    setStatus("");
                  }}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="mono" htmlFor="contact-message">
                What do you have in mind?
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setStatus("");
                }}
                placeholder="A product idea, a role, or a question."
                required
              />
            </div>

            <button type="submit" className="btn">
              Start an email
            </button>
            <p className="contact-form__status" role="status">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
