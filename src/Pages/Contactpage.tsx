import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Apply to Work With Us</h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "700px",
            opacity: 0.7,
            lineHeight: 1.7,
          }}
        >
          We partner with hotels serious about premium positioning
          and sustainable growth.
        </p>
      </section>

      <section className="section">
        <form
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input placeholder="Full Name" />
          <input placeholder="Hotel Name" />
          <input placeholder="Email Address" />
          <textarea
            rows={6}
            placeholder="What challenge are you currently facing?"
          />

          <button className="pe-btn-orange">
            Submit Application
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}
