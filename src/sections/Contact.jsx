import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Nattarin',
          from_email: form.email,
          to_email: 'nattarinchet@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
          setTimeout(() => {
            hideAlert(false);
          }, [3000]);
        },
      );
  }; 
  return (
    <section className='c-space my-20 font-generalsans' id='contact' >
        {alert.show && <Alert {...alert} />}
        <div className="relative min-h-screen flex items-center flex-col justify-center grid-container">
        <div className="contact-container w-full">
            <h3 className='head-text'>Let's talk</h3>
            <p className='text-lg text-white-600'>Let me know if you want to share anything!</p>
            <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                <label className='space-y-3'>
                    <span className='field-label'>Your name</span>
                    <input type="text" name='name' value={form.name} 
                    onChange={handleChange} required className='field-input' placeholder='Nattarin Chet'/>
                </label>
                <label className='space-y-3'>
                    <span className='field-label'>Your Email</span>
                    <input type="email" name='email' value={form.email} 
                    onChange={handleChange} required className='field-input' placeholder='nattarinchet@gmail.com'/>
                </label>
                <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="anything..."
              />
            </label>

                <button className='field-btn' type='submit' disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                    <img src="assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                </button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default Contact
