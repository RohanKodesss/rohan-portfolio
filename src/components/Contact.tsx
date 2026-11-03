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
    <section className="contact" id="contact">
      <div className="contact-inner">
        <h2 className="sec-title" data-reveal>
          Contact
        </h2>

        <p className="contact-lede" data-reveal style={{ ["--d" as string]: "80ms" }}>
          {positioningShort} If you have a fuzzy idea or a role to fill, write to me.
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

        <p className="contact-response">
          <span className="contact-status" data-reveal style={{ ["--d" as string]: "100ms" }}>
            <span className="status-dot" aria-hidden="true" />
            Available for work
          </span>
          <span>I reply within one business day.</span>
        </p>

        <form className="contact-form" onSubmit={onSubmit} data-reveal>
          <div className="contact-form__row">
            <label>
              Your name
              <input
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
            </label>
            <label>
              Your email
              <input
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
            </label>
          </div>

          <label>
            What do you have in mind?
            <textarea
              name="message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                setStatus("");
              }}
              placeholder="A product idea, a role, or a question."
              required
            />
          </label>

          <button type="submit" className="btn btn--deep">
            Start an email
          </button>
          <p className="contact-form__status" role="status">
            {status}
          </p>
        </form>

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
