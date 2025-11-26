"use client";

import { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaToken(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!captchaToken) {
      setError("Please verify you are not a robot.");
      setLoading(false);
      return;
    }

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      captchaToken,
    };

    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong.");
    } else {
      setSuccess("Your enquiry has been sent successfully.");
      e.target.reset();
      setCaptchaToken("");
    }

    setLoading(false);
  }

  return (
    <div className="contact-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://maps.google.com/maps?q=SLN+terminus,+Gachibowlim&t=m&z=10&output=embed&iwloc=near"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h2 className="sec-title">Have Any Project on Your Mind?</h2>
                <p>
                  Great! We're excited to hear from you and let's start
                  something
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Full name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Email address*"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="How Can We Help You*"
                        id="contactForm"
                        className="form-control style-border"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className="form-group"
                      style={{ marginTop: "15px", marginBottom: "15px" }}
                    >
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={handleCaptchaChange}
                      />
                    </div>
                  </div>
                  {error && <p className="text-red-600">{error}</p>}
                  {success && <p className="text-green-600">{success}</p>}
                </div>
                <div className="form-btn col-12">
                  <button
                    type="submit"
                    className="btn mt-20"
                    disabled={!captchaToken || loading}
                  >
                    <span className="link-effect">
                      <span className="effect-1">
                        {loading ? "SENDING . . ." : "SEND MESSAGE"}
                      </span>
                      <span className="effect-1">
                        {loading ? "SENDING . . ." : "SEND MESSAGE"}
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
