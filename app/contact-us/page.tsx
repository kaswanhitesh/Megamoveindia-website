return (
  <main className="bg-[#f7f7f7]">

    {/* PAGE TITLE */}

    <section className="bg-[#232323] py-12">
      <h1 className="text-center text-white text-[52px] tracking-[10px] font-light">
        CONTACT US
      </h1>
    </section>

    {/* MAP + ENQUIRY */}

    <section className="max-w-[1800px] mx-auto px-12 py-20">

      <div className="flex gap-12">

        {/* MAP */}

        <div className="w-1/2">

          <iframe
            src="https://www.google.com/maps?q=Andheri%20East%20Mumbai&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 min-h-[760px]"
          />

        </div>

        {/* ENQUIRY FORM */}

        <div className="w-1/2">

          <h2 className="text-center text-[42px] font-light text-[#173f74] mb-12">
            Send Us An Enquiry
          </h2>

          <form className="space-y-8">

            <div className="grid grid-cols-2 gap-8">

              <input
                required
                type="text"
                placeholder="Name *"
                className="border border-gray-300 p-5 text-lg bg-white"
              />

              <input
                required
                type="text"
                placeholder="Phone Number *"
                className="border border-gray-300 p-5 text-lg bg-white"
              />

            </div>

            <div className="grid grid-cols-2 gap-8">

              <input
                required
                type="email"
                placeholder="Email Address *"
                className="border border-gray-300 p-5 text-lg bg-white"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 p-5 text-lg bg-white"
              />

            </div>

            <textarea
              required
              rows={14}
              placeholder="Remarks *"
              className="border border-gray-300 p-5 text-lg bg-white w-full"
            />

            <div className="text-center">

              <button
                type="submit"
                className="bg-[#c41e1e] text-white px-14 py-4 text-xl font-semibold rounded"
              >
                Submit Enquiry
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>

    {/* KEY OFFICES */}

    <section className="py-20">

      <div className="bg-[#232323] py-10 mb-20">

        <h2 className="text-center text-white text-[44px] tracking-[8px] font-light">
          KEY OFFICES
        </h2>

      </div>

      <div className="max-w-7xl mx-auto px-12">

        <div className="grid grid-cols-3 gap-16">

          {offices.map((office, index) => (

            <div key={index}>

              <h3 className="text-[30px] text-[#0b8db2] mb-6">
                {office.city}
              </h3>

              <p className="text-gray-700 leading-8">
                {office.address}
              </p>

              <p className="mt-4">
                <strong>Email:</strong> {office.email}
              </p>

              <p>
                <strong>Mobile:</strong> {office.phone}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

    {/* SOCIAL MEDIA */}

    <section className="bg-[#2f3d57] py-12">

      <div className="max-w-7xl mx-auto flex justify-center gap-5">

        <a
          href="https://www.instagram.com/megamoveindia/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/company/megamoveindia"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://wa.me/919321499970"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-2xl"
        >
          <FaFacebookF />
        </a>

      </div>

    </section>

  </main>
);
