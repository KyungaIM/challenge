import { useRouter } from "next/router";
export default function New() {
  const router = useRouter();
  const id = router.query.id;
  return <h1>{id} page</h1>;
}
