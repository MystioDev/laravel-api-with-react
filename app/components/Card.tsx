import { useState } from "react";

type Props = {
  img: string;
  name: string;
  id: number;
  refreshPastas: Function;
};

const Card = ({ img, name, id, refreshPastas }: Props) => {
  const [details, setDetails] = useState<any>(null);
  const handleDetailsAction = () => {
    fetch("http://127.0.0.1:8000/api/pastas/" + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setDetails(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteAction = () => {
    fetch("http://127.0.0.1:8000/api/pastas/" + id, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        alert(res.message);
        refreshPastas();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="border p-2 m-2">
      <h2>{name}</h2>
      <img src={img} alt={name} />

      {details ? (
        <div className="border border-green-400 text-green-400 p-2 m-2 flex flex-col">
          <div className="">{details.category}</div>
          <div className="">{details.price}</div>
          <div className="">{details.amount}</div>
        </div>
      ) : null}

      <div className="flex gap-5 mt-5">
        {!details ? (
          <button
            onClick={handleDetailsAction}
            type="button"
            className="border border-sky-400 text-sky-400 p-2 cursor-pointer"
          >
            Details
          </button>
        ) : null}
        <button
          onClick={handleDeleteAction}
          type="button"
          className="border border-red-300 text-red-300 p-2 cursor-pointer"
        >
          Törlés
        </button>
      </div>
    </div>
  );
};

export default Card;
