'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormType } from '@lib/validators';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: ContactFormType) => {
    const res = await fetch('/api/contact/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
      reset();
    } else {
      alert('Submission failed. Please try again.');
    }
  };

  if (submitted)
    return (
      <div className="bg-green-50 border border-green-300 rounded-lg p-4 text-green-800 shadow">
        Thank you! We’ve received your message.
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">Your Name *</label>
        <input id="name" {...register('name')} className="w-full input input-bordered rounded" />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-1">Email *</label>
        <input id="email" type="email" {...register('email')} className="w-full input input-bordered rounded" />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold mb-1">Message *</label>
        <textarea id="message" {...register('message')} rows={4} className="w-full input input-bordered rounded" />
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      </div>
      <button disabled={isSubmitting} className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2.5 rounded-xl mt-2 shadow transition disabled:opacity-60">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
