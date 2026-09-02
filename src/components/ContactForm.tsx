"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-line bg-white/40 px-5 py-6" role="status">
        Got it. If a reply is needed, it will go to the address you left. This is not a meal-prep
        order window.
      </p>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit}>
      <label className="block">
        <span className="kicker">Name</span>
        <input name="name" required className="field" autoComplete="name" />
      </label>
      <label className="block">
        <span className="kicker">Email</span>
        <input name="email" type="email" required className="field" autoComplete="email" />
      </label>
      <label className="block">
        <span className="kicker">Message</span>
        <textarea name="message" required rows={6} className="field min-h-36" />
      </label>
      <button type="submit" className="btn w-fit">
        Send
      </button>
    </form>
  );
}
