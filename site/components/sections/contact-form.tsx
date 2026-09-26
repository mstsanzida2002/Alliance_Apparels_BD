// app/components/ContactForm.tsx
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: ''
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle field blur (mark as touched)
  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name as keyof FormData, formData[name as keyof FormData]);
  };

  // Validate single field
  const validateField = (name: keyof FormData, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Please enter a valid email address';
        break;
      
      case 'subject':
        if (!value) error = 'Subject is required';
        break;
      
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.length < 10) error = 'Message must be at least 10 characters';
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const fields: (keyof FormData)[] = ['name', 'email', 'subject', 'message'];
    let isValid = true;
    
    fields.forEach(field => {
      const fieldIsValid = validateField(field, formData[field]);
      if (!fieldIsValid) isValid = false;
    });
    
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true
    };
    setTouched(allTouched);
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      if (submitStatus.type === 'success') {
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      }
    }
  };

  // Input field classes based on validation state
  const getInputClasses = (fieldName: keyof FormData) => {
    const baseClasses = "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors";
    const errorClasses = "border-red-500 focus:ring-red-200";
    const normalClasses = "border-gray-300 focus:ring-blue-200 focus:border-blue-500";
    
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClasses} ${errorClasses}`;
    }
    return `${baseClasses} ${normalClasses}`;
  };

  return (
    <div className="h-full">
      <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm h-full">
        <h2 
          className="text-3xl font-bold text-slate-900 mb-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Send us a Message
        </h2>
        <p className="text-slate-500 mb-8 text-sm">Have questions? We'd love to hear from you.</p>
        
        {/* Status Messages */}
        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-100 text-green-700' 
              : 'bg-red-50 border border-red-100 text-red-700'
          }`}>
            <div className="flex items-center text-sm">
              {submitStatus.type === 'success' ? (
                <svg className="w-5 h-5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
              <span className="font-medium">{submitStatus.message}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${getInputClasses('name')} rounded-xl! py-3! px-5! text-sm! border-slate-200! focus:border-cyan-500! focus:ring-cyan-500/10! placeholder:text-slate-300`}
                placeholder="John Doe"
                disabled={isSubmitting}
              />
              {touched.name && errors.name && (
                <p className="mt-1.5 text-[11px] font-bold text-red-500 uppercase tracking-tight ml-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${getInputClasses('email')} rounded-xl! py-3! px-5! text-sm! border-slate-200! focus:border-cyan-500! focus:ring-cyan-500/10! placeholder:text-slate-300`}
                placeholder="john@example.com"
                disabled={isSubmitting}
              />
              {touched.email && errors.email && (
                <p className="mt-1.5 text-[11px] font-bold text-red-500 uppercase tracking-tight ml-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${getInputClasses('subject')} rounded-xl! py-3! px-5! text-sm! border-slate-200! focus:border-cyan-500! focus:ring-cyan-500/10! placeholder:text-slate-300`}
              placeholder="How can we help?"
              disabled={isSubmitting}
            />
            {touched.subject && errors.subject && (
              <p className="mt-1.5 text-[11px] font-bold text-red-500 uppercase tracking-tight ml-1">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${getInputClasses('message')} rounded-xl! py-3! px-5! text-sm! border-slate-200! focus:border-cyan-500! focus:ring-cyan-500/10! placeholder:text-slate-300 resize-none`}
              placeholder="Tell us about your sourcing needs..."
              disabled={isSubmitting}
            />
            {touched.message && errors.message && (
              <p className="mt-1.5 text-[11px] font-bold text-red-500 uppercase tracking-tight ml-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full min-h-[50px] px-[2em] py-[1em] rounded-xl
              text-white font-bold cursor-pointer border-none shadow-lg
              bg-[linear-gradient(325deg,hsla(217,100%,56%,1)_0%,hsla(194,100%,69%,1)_55%,hsla(217,100%,56%,1)_90%)] 
              bg-size-[280%_auto] bg-top-left transition-all duration-700 ease-in-out
              hover:bg-top-right hover:shadow-cyan-500/30 hover:-translate-y-0.5
              active:scale-[0.98]
              disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0
              flex items-center justify-center gap-3
            `}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;