import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import "./Home.css";

interface Product {
  title: string;
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProduct = async (): Promise<void> => {
    try {
      const response: AxiosResponse<{ products: Product[] }> = await axios.post(
        "http://localhost:8080/products",
        {
          keyword: "products",
          page_size: 5,
          page_number: 0,
        }
      );
      const { products } = response.data;
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p key={product.title}>{product.title}</p>
      ))}
    </div>
  );
}
