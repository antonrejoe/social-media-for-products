import Link from "next/link";

export default function Navbar() {
  return (
    <main className="navbar_main">
      <div className="logo_navbar">logo</div>
      <div className="recent_navbar"></div>
      <div className="navbar_btn_div grid grid-flow-col">
        <button>
          <Link href="/login">Login</Link>
        </button>
        <button>
          <Link href="/signup">Signup</Link>
        </button>
      </div>
    </main>
  );
}
