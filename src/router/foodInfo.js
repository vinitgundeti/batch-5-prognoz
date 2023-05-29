import { useSearchParams } from "react-router-dom";
export default function FoodInfo() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"), searchParams.get("title"));
  return (
    <div>
      <h3>{searchParams.get("id")}</h3>
      <h1>{searchParams.get("title")}</h1>
    </div>
  );
}
