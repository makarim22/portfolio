import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '', show: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xqeyovyn', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ type: 'success', message: '✓ TRANSMISSION RECEIVED. STANDING BY.', show: true });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: '✕ SIGNAL LOST. TRY AGAIN.', show: true });
      }
    } catch {
      setStatus({ type: 'error', message: '✕ SYSTEM ERROR. USE DIRECT COMMS.', show: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-section-gap px-margin-mobile md:px-margin-desktop text-center border-t border-outline-variant"
    >
      {/* CTA headline */}
      <h2
        className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none tracking-tighter mb-12 transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.9)',
        }}
      >
        READY TO <br />
        <span className="text-primary-fixed text-glow">ACCELERATE?</span>
      </h2>

      <p
        className="font-body-lg text-body-lg max-w-xl mx-auto mb-16 text-on-surface-variant transition-all duration-700 delay-200"
        style={{
          opacity: visible ? 1 : 0,
          transitionDelay: '200ms',
        }}
      >
        I am currently accepting select high-impact projects. Let's discuss how we can
        engineer your brand for the future.
      </p>

      {/* Contact form */}
      <div
        className="max-w-2xl mx-auto neo-border p-8 bg-surface-container text-left transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(50px)',
          transitionDelay: '300ms',
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="font-label-caps text-primary-fixed block mb-2">PILOT NAME</label>
              <input
                type="text" name="name" value={formData.name} onChange={handleChange} required
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary-fixed outline-none py-2 text-on-surface transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div className="group">
              <label className="font-label-caps text-primary-fixed block mb-2">COMM CHANNEL</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary-fixed outline-none py-2 text-on-surface transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="font-label-caps text-primary-fixed block mb-2">MISSION PARAMETERS</label>
            <textarea
              name="message" value={formData.message} onChange={handleChange} rows="4" required
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary-fixed outline-none py-2 text-on-surface transition-colors duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit" disabled={isSubmitting}
            className="btn-race w-full bg-primary-fixed text-on-primary-fixed font-headline-lg py-6 text-2xl uppercase hover:scale-[1.02] transition-transform active:scale-95 relative overflow-hidden"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <span className="indicator-blink inline-block w-2 h-2 rounded-full bg-on-primary-fixed" />
                ENGINE STARTING...
              </span>
            ) : 'INITIATE CONTACT'}
          </button>

          {status.show && (
            <div
              className={`mt-4 p-4 text-center font-label-caps border animate-fade-in ${
                status.type === 'success'
                  ? 'text-primary-fixed border-primary-fixed bg-primary-fixed/5'
                  : 'text-error border-error bg-error/5'
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
