import About from "../_components/About/About";

export const dynamic = 'force-dynamic';
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <About />
    </main>
  );
}
