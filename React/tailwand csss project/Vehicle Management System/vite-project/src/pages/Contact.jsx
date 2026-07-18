function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent! We'll contact you soon.");
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-100 px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8 lg:p-10">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Contact Us
            </span>
            <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Let's connect and get you moving.
            </h1>
            <p className="mb-8 leading-relaxed text-slate-600">
              Have a question about buying, selling, or managing vehicles? Send us a message and our support team will respond quickly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-3xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-3xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full rounded-3xl border border-slate-200 px-5 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Tell us how we can help you"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-3xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl sm:p-8 lg:p-10">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Customer support</h2>
            <p className="mb-8 leading-relaxed text-slate-300">
              Reach out for fast assistance with buying, selling, or managing your vehicles. We're here to help every step of the way.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm uppercase tracking-[0.35em] text-sky-300">Email</h3>
                <p className="text-lg font-semibold">adnan2292707@gmail.com</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm uppercase tracking-[0.35em] text-sky-300">Phone</h3>
                <p className="text-lg font-semibold">+923160243208</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm uppercase tracking-[0.35em] text-sky-300">Office</h3>
                <p className="text-lg font-semibold">123 Motorway Ave, Auto City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
