import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <p className="kicker">404</p>
      <h1 className="display mt-3 text-4xl text-char">That plate is not on the menu.</h1>
      <Link href="/" className="btn mt-8">
        Back to the kitchen
      </Link>
    </div>
  );
}
