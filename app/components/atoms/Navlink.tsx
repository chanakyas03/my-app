import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const { pathname } = useRouter();

  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <a className={`nav-link px-3 ${isActive ? "active text-info" : "text-white"}`}>
        {label}
      </a>
    </Link>
  );
}
