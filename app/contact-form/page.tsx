import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      const errorData = await response.json();
      console.error('Failed to send message:', errorData.message || 'Unknown error');
    }
  } catch (error) {
    console.error('Error submitting form:', (error as Error).message);
  }
};
