import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_portfolio',
  templateId: 'template_contact',
  publicKey: 'your_public_key_here'
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send email function
export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'hasnainmakada@gmail.com'
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

// Alternative: Use Formspree as backup
export const sendEmailFormspree = async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.from_name,
        email: formData.from_email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Formspree email sending failed:', error);
    return { success: false, error };
  }
};