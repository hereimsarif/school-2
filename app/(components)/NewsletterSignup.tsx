'use client';
import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
    setEmail('');
  }

  return (
    <div className="space-y-2 max-w-xs">
      <div className="font-bold">Newsletter</div>
      {submitted ? (
        <p className="text-green-50 text-sm">Thank you for subscribing!</p>
      ) : (
        <form aria-label="Newsletter signup" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            aria-label="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="email@domain.com"
            required
            className="rounded px-3 py-2 text-black"
          />
          <button type="submit" className="bg-white text-primary font-bold px-4 py-2 rounded-xl hover:bg-secondary hover:text-white transition">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}
