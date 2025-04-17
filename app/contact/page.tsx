export default function Contact() {
    return (
      <section
        id="contact"
        className="bg-base-100 text-base-content py-20 px-4 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-primary">
          Contact Me
        </h2>
  
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="space-y-6 bg-base-200 p-8 rounded-2xl shadow-md border border-base-300"
        >
          {/* Add a honeypot to prevent spam */}
          <input type="hidden" name="_honey" className="hidden" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
  
          <div>
            <label className="label font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
              className="input input-bordered w-full"
            />
          </div>
  
          <div>
            <label className="label font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Your email"
              className="input input-bordered w-full"
            />
          </div>
  
          <div>
            <label className="label font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Your message"
              rows={5}
              className="textarea textarea-bordered w-full"
            />
          </div>
  
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  