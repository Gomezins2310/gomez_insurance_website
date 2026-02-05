
    import React, { useState } from 'react';
    const FORMSPREE_ID = 'https://formspree.io/f/xzdvllvo'; // replace with your Formspree form id (the part after /f/)
    export default function GomezWebsite() {
      const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
      const [sent, setSent] = useState(false);
      const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Simple Formspree JSON submission
        try {
          const res = await fetch(FORMSPREE_ID, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
          });
  
          if (res.ok) {
            setSent(true);
            setForm({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSent(false), 4000);
          } else {
            alert('Something went wrong sending your message. Please try again later.');
          }
        } catch (err) {
          alert('Error sending message. Please check your internet connection.');
        }
      };

      return (
        <div className="min-h-screen bg-white text-slate-800">
          <header className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white" aria-hidden>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L6 10v10c0 11 7 21 18 24 11-3 18-13 18-24V10L24 4z" fill="#0B4DA8"/>
                    <path d="M24 6.5L10 12.5v8c0 9.25 5.75 17.5 14 19.5 8.25-2 14-10.25 14-19.5v-8L24 6.5z" stroke="#C79C3C" strokeWidth="1.8" fill="none"/>
                    <text x="50%" y="60%" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill="white">GI</text>
                  </svg>
                </div>

                <div>
                  <h1 className="text-2xl font-serif text-[#0B4DA8]">GOMEZ</h1>
                  <div className="text-xs uppercase tracking-widest text-slate-600">Insurance Agency</div>
                </div>
              </div>

              <nav className="hidden md:flex items-center space-x-6 text-slate-700">
                <a href="#services" className="hover:text-[#0B4DA8]">Services</a>
                <a href="#about" className="hover:text-[#0B4DA8]">About</a>
                <a href="#contact" className="hover:text-[#0B4DA8]">Contact</a>
                <a href="#privacy" className="hover:text-[#0B4DA8]">Privacy Policy</a>
                <a href="tel:+19182809100" className="px-4 py-2 bg-[#0B4DA8] text-white rounded-md">Call Us</a>
              </nav>
            </div>
          </header>

          <main>
            <section className="bg-white">
              <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#0B4DA8] leading-tight">Trusted, local insurance for families and businesses</h2>
                  <p className="mt-4 text-slate-600 max-w-xl">At Gomez Insurance Agency we simplify coverage. Auto, home, business, and commercial auto insurance — clear advice, tailored plans, and fast support when you need it most.</p>

                  <div className="mt-6 flex items-center gap-4">
                    <a href="#contact" className="px-6 py-3 bg-[#0B4DA8] text-white rounded-md shadow">Get a Quote</a>
                    <a href="#about" className="px-6 py-3 border rounded-md text-slate-700">Learn More</a>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md p-6 rounded-xl shadow-lg border">
                    <h3 className="font-semibold text-lg text-[#0B4DA8]">Quick Quote</h3>
                    <p className="text-sm text-slate-600 mt-2">Tell us a bit and we'll send a personalized quote.</p>

                    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                      <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Full name" />
                      <input name="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Email" />
                      <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Phone (optional)" />
                      <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Type of insurance or message"></textarea>
                      <button type="submit" className="w-full bg-[#0B4DA8] text-white py-2 rounded">Request Quote</button>
                    </form>

                    {sent && <div className="mt-3 text-sm text-green-600">Your inquiry has been sent! We'll contact you soon.</div>}
                  </div>
                </div>
              </div>
            </section>

            <section id="services" className="bg-[#f8fafc]">
              <div className="max-w-6xl mx-auto px-6 py-12">
                <h3 className="text-2xl font-semibold text-[#0B4DA8]">Our Services</h3>
                <p className="text-slate-600 mt-2 max-w-2xl">Comprehensive coverage and straightforward advice — built around your needs.</p>

                <div className="mt-8 grid md:grid-cols-4 gap-6">
                  {[
                    { title: 'Auto Insurance', desc: 'Competitive rates, fast claims support.' },
                    { title: 'Homeowners', desc: 'Protect your home, property and belongings.' },
                    { title: 'Business Insurance', desc: 'Customized plans for business owners and professionals.' },
                    { title: 'Commercial Auto', desc: 'Coverage for vehicles used in your business operations.' },
                  ].map((s) => (
                    <div key={s.title} className="p-5 bg-white rounded-lg border shadow-sm">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-slate-800">{s.title}</h4>
                        <div className="text-[#0B4DA8] font-bold">→</div>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="about" className="max-w-6xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0B4DA8]">About Gomez Insurance Agency</h3>
                  <p className="mt-3 text-slate-600">Founded on a commitment to clear communication and local service, Gomez Insurance Agency helps clients find the right coverage — not the most expensive one. Our brokers compare trusted carriers to match price and protection.</p>

                  <ul className="mt-4 space-y-2 text-slate-700">
                    <li>• Licensed, experienced brokers</li>
                    <li>• Personalized policy reviews</li>
                    <li>• Fast claims assistance</li>
                  </ul>
                </div>

                <div className="rounded-lg overflow-hidden shadow">
                  <img src="./assets/office.jpg" alt="Office team" className="w-full h-56 object-cover" />
                </div>
              </div>
            </section>

            <section id="contact" className="bg-[#f8fafc]">
              <div className="max-w-6xl mx-auto px-6 py-12">
                <h3 className="text-2xl font-semibold text-[#0B4DA8]">Contact Us</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-600">Reach out for a quote or policy review. We're happy to help.</p>

                    <div className="mt-6 space-y-4 text-sm text-slate-700">
                      <div>
                        <strong>Address</strong>
                        <div>123 Main Street, Suite 100<br/>Tulsa, OK 74104</div>
                      </div>

                      <div>
                        <strong>Phone</strong>
                        <div><a href="tel:+19182809100" className="text-[#0B4DA8]">(918) 280-9100</a></div>
                      </div>

                      <div>
                        <strong>Email</strong>
                        <div><a href="mailto:gomezinstulsa@gmail.com" className="text-[#0B4DA8]">gomezinstulsa@gmail.com</a></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <form onSubmit={handleSubmit} className="space-y-3 bg-white p-6 rounded-lg border shadow-sm">
                      <div className="grid md:grid-cols-2 gap-3">
                        <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Full name" />
                        <input name="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Email" />
                      </div>

                      <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Phone" />
                      <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 h-28" placeholder="How can we help?"></textarea>

                      <div className="flex items-center justify-between">
                        <button type="submit" className="px-5 py-2 bg-[#0B4DA8] text-white rounded">Submit</button>
                        <div className="text-sm text-slate-500">We'll reply within 1 business day.</div>
                      </div>

                      <p className="text-xs text-slate-500 mt-2">
                        By clicking SUBMIT you consent to receiving SMS messages. Messages and data rates may apply. Message frequency will vary. Reply HELP for more assistance or STOP to opt-out.
                      </p>
                    </form>

                    {sent && <div className="mt-3 text-sm text-green-600">Your inquiry has been sent! We'll contact you soon.</div>}
                  </div>
                </div>
              </div>
            </section>

            <section id="privacy" className="max-w-6xl mx-auto px-6 py-12">
              <h3 className="text-2xl font-semibold text-[#0B4DA8] mb-4">Privacy Policy</h3>
              <p className="text-slate-600 max-w-3xl">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p className="text-slate-600 mt-4">
                If you have any questions about our privacy practices, please contact us at <a href="mailto:gomezinstulsa@gmail.com" className="text-[#0B4DA8]">gomezinstulsa@gmail.com</a> or call us at <a href="tel:+19182809100" className="text-[#0B4DA8]">(918) 280-9100</a>.
              </p>
            </section>
          </main>

              <footer className="border-t">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
                  <div>© {new Date().getFullYear()} Gomez Insurance Agency</div>
                  <div className="mt-3 md:mt-0">Designed for trust — royal blue brand color</div>
                </div>
              </footer>
            </div>
          );
        }