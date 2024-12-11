import Link from "next/link";
import { paths } from "./paths"

export default function Page() {
  return (
    <>
      <h3>SG</h3>
      <ul>
        {paths.map((path) => {
          const href = `/020_SG/${path.id}`
          return (
            <li key={path.id}><Link href={href}>{href}</Link></li>
          )
        })}
      </ul>
    </>
  );
}
