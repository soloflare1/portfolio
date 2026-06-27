import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ✅ Already set: Service ID + Public Key
// ⚠️  Replace YOUR_TEMPLATE_ID with your actual template ID from EmailJS dashboard
const SERVICE_ID  = 'service_ad2gh17'
const TEMPLATE_ID = 'template_68q5ajc'   // 👈 replace this
const PUBLIC_KEY  = 'LtqFIorJ8LNvBHjhu'

const contactDetails = [
  { icon: 'fa-solid fa-envelope',  label: 'nosratee.jn@gmail.com',           href: 'mailto:nosratee.jn@gmail.com' },
  { icon: 'fa-brands fa-github',   label: 'github.com/soloflare1',            href: 'https://github.com/soloflare1' },
  { icon: 'fa-brands fa-linkedin', label: 'linkedin.com/in/nosrateejahannaba', href: 'https://www.linkedin.com/in/nosrateejahannaba' },
]

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow">Let's Connect</div>
        <h2 className="sh">Get In <span className="hl">Touch</span></h2>
        <div className="clayout">

          <div className="cinfo">
            <p className="cintro">
              For professional inquiries, project collaborations, research discussions,
              or academic connections, feel free to reach out through the form or
              directly via the contact details below.
            </p>
            <div className="cdlist">
              {contactDetails.map(d => (
                <div key={d.href} className="cditem">
                  <span className="cdic"><i className={d.icon} /></span>
                  <a href={d.href} target={d.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                    {d.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="cform">
            <form ref={formRef} className="frows" onSubmit={handleSubmit}>
              <div className="fg">
                <label className="flbl" htmlFor="fname">
                  <i className="fa-solid fa-user" style={{ color: 'var(--accent)' }} />&nbsp; Name
                </label>
                <input
                  className="finp" type="text" id="fname"
                  name="from_name" placeholder="Your name" required
                />
              </div>
              <div className="fg">
                <label className="flbl" htmlFor="femail">
                  <i className="fa-solid fa-envelope" style={{ color: 'var(--accent)' }} />&nbsp; Email
                </label>
                <input
                  className="finp" type="email" id="femail"
                  name="from_email" placeholder="your@email.com" required
                />
              </div>
              <div className="fg">
                <label className="flbl" htmlFor="fmsg">
                  <i className="fa-solid fa-comment-dots" style={{ color: 'var(--accent)' }} />&nbsp; Message
                </label>
                <textarea
                  className="ftxt" id="fmsg"
                  name="message" placeholder="Write your message here..." required
                />
              </div>

              <button className="fsub" type="submit" disabled={status === 'sending'}>
                {status === 'idle'    && <><i className="fa-solid fa-paper-plane" /> Send Message</>}
                {status === 'sending' && <><i className="fa-solid fa-spinner fa-spin" /> Sending...</>}
                {status === 'success' && <><i className="fa-solid fa-circle-check" /> Message Sent!</>}
                {status === 'error'   && <><i className="fa-solid fa-circle-xmark" /> Failed. Try again.</>}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
