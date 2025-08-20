'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { admissionsSchema, AdmissionsFormType } from '@lib/validators';
import { useState } from 'react';

export default function AdmissionsForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionsFormType>({
    resolver: zodResolver(admissionsSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: AdmissionsFormType) => {
    const res = await fetch('/api/admissions/submit', {
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
        Application submitted! We’ll be in touch soon.
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 bg-white dark:bg-gray-900 rounded-xl p-6 shadow">
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">Student Name *</label>
        <input id="name" {...register('name')} className="w-full input input-bordered rounded focus:ring focus:ring-secondary/50" />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="parentEmail" className="block font-semibold mb-1">Parent Email *</label>
        <input id="parentEmail" type="email" {...register('parentEmail')} className="w-full input input-bordered rounded focus:ring focus:ring-secondary/50" />
        {errors.parentEmail && <span className="text-red-500 text-sm">{errors.parentEmail.message}</span>}
      </div>
      <div>
        <label htmlFor="grade" className="block font-semibold mb-1">Applying for Grade *</label>
        <select id="grade" {...register('grade')} className="w-full input input-bordered rounded">
          <option value="">Select Grade</option>
          <option value="Primary">Primary (1-5)</option>
          <option value="Secondary">Secondary (6-10)</option>
          <option value="Higher Secondary">Higher Secondary (11-12)</option>
        </select>
        {errors.grade && <span className="text-red-500 text-sm">{errors.grade.message}</span>}
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold mb-1">Message</label>
        <textarea id="message" {...register('message')} rows={3} className="w-full input input-bordered rounded" />
      </div>
      <button disabled={isSubmitting} className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2.5 rounded-xl mt-2 shadow transition disabled:opacity-60">
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
