import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/foo">
        <a>Foo Page</a>
      </Link>
    </div>
  );
}
