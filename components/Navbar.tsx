export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-slate-900 text-white">
      <h1 className="text-2xl font-bold text-cyan-400">
        Credex
      </h1>

      <button className="bg-cyan-500 px-5 py-2 rounded-xl">
        Get Started
      </button>
    </nav>
  );
}