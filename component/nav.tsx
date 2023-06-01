import { Linden_Hill } from 'next/font/google';
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/Products">Products</Link>
        </li>
        <li>
          <Link href={"/Products/Product"}>Product</Link>
        </li>
      </ul>
    </div>
  );
}
