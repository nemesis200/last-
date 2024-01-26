import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Container, Grid } from "@mui/material";
import Product from "../components/Product";

type Props = {};

const App = (props: Props) => {
  const [currencies] = useState<string[]>(["EUR", "USD", "UAH", "LIR"]);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("EUR");
  const [total, setTotal] = useState<number>(0);
  const exchangeRates: { [key: string]: number } = {
    EUR: 1,
    USD: 1.18,
    UAH: 38.41,
    LIR: 0.82,
  };

  const choise = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const convertPrice = (price: number, targetCurrency: string): number => {
    const exchangeRate = exchangeRates[targetCurrency];
    const convertedPrice = exchangeRate ? price * exchangeRate : price;
    return Math.floor(convertedPrice);
  };

  const addToTotal = (price: number) => {
    setTotal((prevState) => prevState + price);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Our Shop page</h1>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {currencies.map((currency) => (
          <Button key={currency} onClick={() => choise(currency)}>
            {currency}
          </Button>
        ))}
      </ButtonGroup>

      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Product
          title={"iphone-15"}
          description={"This is iphone-15"}
          price={convertPrice(1000, selectedCurrency)}
          currency={selectedCurrency}
          addToTotal={addToTotal}
        />
        <Product
          title={"iphone-14"}
          description={"This is iphone-14"}
          price={convertPrice(900, selectedCurrency)}
          currency={selectedCurrency}
          addToTotal={addToTotal}
        />
        <Product
          title={"iphone-13"}
          description={"This is iphone-13"}
          price={convertPrice(800, selectedCurrency)}
          currency={selectedCurrency}
          addToTotal={addToTotal}
        />
      </Grid>
      <p>Total: {total}</p>
    </Container>
  );
};

export default App;
