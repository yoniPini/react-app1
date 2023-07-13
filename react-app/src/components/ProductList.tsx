import React, { useEffect, useState } from "react";
const ProductList = ({ category }: { category: string }) => {
  const [product, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(`fetching product list in ${category} category`);
    setProducts(["hi", "bi"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
