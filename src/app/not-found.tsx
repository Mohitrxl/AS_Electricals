import Link from "next/link";

export default function NotFound() {
  return (
    <section className="p-12 text-center">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <Link href="/" className="text-yellow-400 underline">
        Go Home
      </Link>
    </section>
  );
}
