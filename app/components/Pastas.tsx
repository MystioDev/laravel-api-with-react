import { useEffect, useState } from "react";
import Card from "./Card";

const Pastas = () => {
  const [pastas, setPastas] = useState([]);

  const fetchPastas = () => {
    fetch("http://127.0.0.1:8000/api/pastas")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setPastas(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchPastas();
  }, []);

  if (!pastas) return <h1>Betöltés...</h1>;

  return (
    <div>
      {pastas.map((pasta: any) => (
        <Card
          img={pasta.img}
          name={pasta.name}
          id={pasta.id}
          key={pasta.id}
          refreshPastas={fetchPastas}
        ></Card>
      ))}
    </div>
  );
};

export default Pastas;
