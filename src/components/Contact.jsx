import { useRef, useState } from 'react'
import { ArrowUpRight, CheckCircle, Envelope, Phone } from '@phosphor-icons/react'
import { offerings } from '../data/offerings'
import Reveal from './Reveal'

const initialForm = { name: '', email: '', company: '', offering: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const inFlight = useRef(false)
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  const emailBody = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nInterest: ${form.offering || 'Exploring Enterprise AI'}\n\n${form.message}`
  const emailHref = `mailto:info@softmatrices.com?subject=${encodeURIComponent(`Enterprise AI enquiry${form.company ? ` — ${form.company}` : ''}`)}&body=${encodeURIComponent(emailBody)}`

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }))
    setSubmitError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (inFlight.current) return
    if (!form.name.trim() || !form.message.trim()) {
      setSubmitError('Please add your name and a short description of your use case.')
      return
    }
    if (!accessKey) {
      window.location.href = emailHref
      setStatus('email')
      return
    }
    inFlight.current = true
    setStatus('sending')
    setSubmitError('')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          message: form.message.trim(),
          access_key: accessKey,
          subject: 'New Enterprise AI enquiry — Softmatrices',
          from_name: 'Softmatrices Enterprise AI',
          botcheck: false,
        }),
        signal: AbortSignal.timeout(15000),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission failed')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setSubmitError('Your enquiry could not be sent. Please try again or email us directly.')
    } finally {
      inFlight.current = false
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container contact-layout">
        <Reveal className="contact-intro">
          <span className="eyebrow">WORK WITH SOFTMATRICES</span>
          <h2>
            Discuss your
            <br />
            <span className="muted-heading">Enterprise AI priorities.</span>
          </h2>
          <p>
            Have a workflow in mind? Exploring where agentic AI fits? Tell us what you’re working
            toward, and let’s find a useful place to start.
          </p>
          <div className="contact-details">
            <a href="mailto:info@softmatrices.com">
              <Envelope size={21} />
              <span>
                <small>WRITE TO US</small>info@softmatrices.com
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a href="tel:+919766476600">
              <Phone size={21} />
              <span>
                <small>GIVE US A CALL</small>+91 97664 76600
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
          <span className="contact-hours">
            Mon–Sat, 10 AM – 7 PM IST · Working with enterprises globally
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          {status === 'success' ? (
            <div className="contact-form form-success" role="status">
              <CheckCircle size={48} weight="light" />
              <h3>Let’s put intelligence to work.</h3>
              <p>
                Your enquiry has been sent. The Softmatrices team will be in touch to discuss your
                next step.
              </p>
              <button className="button" onClick={() => setStatus('idle')}>
                Send another enquiry <ArrowUpRight size={17} />
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <h3>Let’s talk Enterprise AI</h3>
                <p>A little context goes a long way.</p>
              </div>
              <fieldset disabled={status === 'sending'}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">
                      Your name <span>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      maxLength={150}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">
                      Work email <span>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      maxLength={254}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your organization"
                    maxLength={200}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="offering">What are you exploring?</label>
                  <select
                    id="offering"
                    name="offering"
                    value={form.offering}
                    onChange={handleChange}
                  >
                    <option value="">Select an AI offering</option>
                    {offerings.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                    <option value="AI strategy & discovery">AI strategy & discovery</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">
                    Your use case <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What workflow would you like to improve? What would success look like?"
                    required
                    maxLength={5000}
                  />
                </div>
                <button type="submit" className="button form-submit">
                  {status === 'sending'
                    ? 'Sending your enquiry…'
                    : accessKey
                      ? 'Start the conversation'
                      : 'Prepare enquiry email'}
                  <ArrowUpRight size={18} />
                </button>
              </fieldset>
              <p className="form-note">
                {accessKey
                  ? 'We’ll use these details to respond to your enquiry.'
                  : 'This opens your email app with your enquiry ready to send.'}
              </p>
              {status === 'email' && (
                <p className="form-feedback" role="status">
                  Your email draft is ready. Send it from your email app, or{' '}
                  <a href={emailHref}>open the draft again</a>.
                </p>
              )}
              {submitError && (
                <p className="form-error" role="alert">
                  {submitError} <a href={emailHref}>Email your enquiry</a>
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
