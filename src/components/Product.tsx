import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

type Props = {
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  addToTotal: (price: number) => void;
};

const Product = ({
  title,
  description,
  price,
  currency,
  addToTotal,
}: Props) => {
  const formattedPrice = currency ? `${currency}: ${price}` : `${price}`;

  return (
    <Grid>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{formattedPrice}</p>
      <Button onClick={() => addToTotal(price || 0)}>buy</Button>
    </Grid>
  );
};

export default Product;
