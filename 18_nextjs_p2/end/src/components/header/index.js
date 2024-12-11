import Image from "next/image";
import Link from "next/link";

import { navList } from "../../data/nav";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <Image loader={({src}) => src} src="/vercel.svg" alt="vercel" width={177} height={40} />
        </a>
      </Link>
      <nav>
        <ul className="nav">
          {navList.map((item) => {
            return (
              <li key={item}>
                <Link href={`/${item}`}>
                  <a className="link">{item}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
