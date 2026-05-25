import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Systems, not services.</h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "700px",
            opacity: 0.7,
            lineHeight: 1.7,
          }}
        >
          We create growth systems that compound over time.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Audit</h3>
            <p style={{ marginTop: "14px", opacity: 0.7 }}>
              Diagnose visibility and conversion weaknesses.
            </p>
          </div>

          <div className="card">
            <h3>90-Day Growth</h3>
            <p style={{ marginTop: "14px", opacity: 0.7 }}>
              Structured positioning and acquisition systems.
            </p>
          </div>

          <div className="card">
            <h3>Growth Retainer</h3>
            <p style={{ marginTop: "14px", opacity: 0.7 }}>
              Ongoing hospitality growth infrastructure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
