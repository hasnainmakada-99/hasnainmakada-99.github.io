import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const ContactForm = () => {
  const { contactSettings: contact } = useContent();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contact.web3formsAccessKey,
          name: formData.from_name,
          email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          replyto: formData.from_email,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');

        setFormData({
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(`Failed to send message. Please try again or contact me directly at ${contact.fallbackEmail}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-3 py-2 bg-transparent border border-[var(--border-color)] rounded-md focus:outline-none focus:border-[var(--text-muted)] transition-colors duration-200 text-[var(--text-primary)] placeholder-[var(--text-muted)]';

  return (
    <div className="w-full">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your name"
          />
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your email"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Subject"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Message"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 border border-[var(--text-primary)] rounded-md text-[var(--text-primary)] font-medium hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
