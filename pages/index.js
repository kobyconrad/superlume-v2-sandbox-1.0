import { useMap, usePresence } from "@roomservice/react";
import { useEffect } from "react";
import Cursor from "../lib/Cursor.tsx";

export default function Home() {
  const [map, setMap] = useMap("roomName", "mapName");
  const [positions, setMyPosition] = usePresence(
    "presenceRoomName",
    "positions"
  );

  useEffect(() => {
    const listener = (e) => {
      console.log(e);
      setMyPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", listener);
    return () => document.removeEventListener("mousemove", listener);
  });

  if (!map) return <div>loading...</div>;

  function randomNumber() {
    let ranNum = Math.random() * 10;
    setMap(map.set("number", ranNum));
  }

  return (
    <div>
      {Object.entries(positions).map(([key, val]) => (
        <Cursor key={key} x={val.x} y={val.y} />
      ))}
      <button onClick={randomNumber}>Random Number</button>
      {map.get("number")}
    </div>
  );
}
