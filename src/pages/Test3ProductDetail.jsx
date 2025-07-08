import React from "react";
import { useParams } from "react-router-dom";

export default function Test3ProductDetail() {
  const { id } = useParams();
  const products = {
    1: { name: "Produk 1", deskripsi: "Deskripsi produk 1", harga: 100000 },
    2: { name: "Produk 2", deskripsi: "Deskripsi produk 2", harga: 200000 },
  };

  const product = products[id];

  if (!product) return <p>Produk tidak ditemukan</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.name}</h2>
      <p>{product.deskripsi}</p>
      <p>Harga: Rp{product.harga}</p>
    </div>
  );
}
