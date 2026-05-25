import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>
          We build systems that make hotels impossible to ignore
        </h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "700px",
            opacity: 0.7,
            lineHeight: 1.7,
          }}
        >
          PrymEdge helps hospitality brands increase perception,
          attract premium guests, and convert attention into bookings.
        </p>

        <button
          className="pe-btn-orange"
          style={{ marginTop: "32px" }}
        >
          Book a Strategy Call
        </button>
      </section>

      <section className="section">
        <h2>The problem is not marketing. It is structure.</h2>

        <div className="grid" style={{ marginTop: "50px" }}>
          <div className="card">
            <h3>Perception</h3>
            <p style={{ marginTop: "14px", opacity: 0.7 }}>
              Your hotel may exist online but still feel invisible.
            </p>
          </div>

          <div className="card">
            <h3>Acquisition</h3>
            <p style={{ marginTop: "14px", opacity: 0.7 }}>
              Traffic without positioning creates weak demand.
            </p>
          </div>

          <div className="card">
            <h3>Conversion</h3>
            <p style={{ marginTop: "14px", opacity: 0.7 }}>
              Attention means nothing without booking systems.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
