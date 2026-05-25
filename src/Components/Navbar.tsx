import { Link } from "wouter";

export default function Navbar() {
  return (
    <header className="navbar">
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.2rem",
        }}
      >
        PrymEdge
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
