"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/nav.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/fetch/client">Data Fetch Client</Link>{" "}
          {path === "/fetch/client" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/fetch/server">Data Fetch Server</Link>{" "}
          {path === "/fetch/server" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
