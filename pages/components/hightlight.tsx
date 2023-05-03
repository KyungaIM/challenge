export default function Hightlight() {
  const side = typeof window === undefined ? "server" : "client";
  return <h1>hightlight {side}redering</h1>;
}
