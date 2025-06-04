import type { Route } from "./+types/home";
import Pastas from "~/components/Pastas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Kezdőoldal</h1>
      <Pastas></Pastas>
    </>
  );
}
