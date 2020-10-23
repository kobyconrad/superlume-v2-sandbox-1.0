import { useMap } from "@roomservice/react";

export default function Home() {
  const [map, setMap] = useMap("roomName", "mapName");

  if (!map) return <div>loading...</div>;

  function randomNumber() {
    let ranNum = Math.random() * 10;
    setMap(map.set("number", ranNum));
  }

  return (
    <div>
      <button onClick={randomNumber}>Random Number</button>
      {map.get("number")}
    </div>
  );
}
