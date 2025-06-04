import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const create = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    category: "",
    amount: 0,
    price: 0,
  });

  const handleOnChangeAction = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitAction = (e: any) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/pastas/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        alert(res.message);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h1>Pasta létrehozása</h1>
      <div className="border p-2 m-2">
        <form
          method="post"
          onSubmit={handleSubmitAction}
          className="flex flex-col"
        >
          <input
            onChange={handleOnChangeAction}
            value={formData.name}
            required
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="border p-2 m-2"
          />
          <input
            onChange={handleOnChangeAction}
            value={formData.category}
            required
            type="text"
            name="category"
            id="category"
            placeholder="category"
            className="border p-2 m-2"
          />
          <input
            onChange={handleOnChangeAction}
            value={formData.amount}
            required
            type="number"
            name="amount"
            id="amount"
            placeholder="amount"
            className="border p-2 m-2"
          />
          <input
            onChange={handleOnChangeAction}
            value={formData.price}
            required
            type="number"
            name="price"
            id="price"
            placeholder="price"
            className="border p-2 m-2"
          />
          <button
            className="border border-green-400 text-green-400 p-2 cursor-pointer"
            type="submit"
          >
            Létrehozás
          </button>
        </form>
      </div>
    </>
  );
};

export default create;
