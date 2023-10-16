"use client"
//Import area
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';







export default function Home() {

  //2.1 Hooks Area
  const [stc, setStc] = React.useState('');
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');

  const fetchStockData = (stock) => {
    fetch(`http://localhost:3000/api/getstockprice?stock=${stock}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
      })
      .catch((error) => console.error(error));

  };

  const handleChange = (e) => {
    const selectedStock = e.target.value;
    setStc(selectedStock);
    fetchStockData(selectedStock);
  };

  React.useEffect(() => {
    // Initial fetch when the component mounts
    fetchStockData(stc);

    // Call the API every 30 seconds
    const intervalId = setInterval(() => fetchStockData(stc), 60000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [stc]); // Include stc in the dependency array to re-run the effect when it changes


  

  //Return statement
  return (
    <main>
      <h1>The Stock Price of {name} is {price}</h1>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stock</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stc}
            label="Stock"
            onChange={handleChange}
          >
            <MenuItem value={"HDFC"}>HDFC</MenuItem>
            <MenuItem value={"ICICI"}>ICICI</MenuItem>
            <MenuItem value={"Axis"}>Axis</MenuItem>
          </Select>
        </FormControl>
      </Box>

    
    </main>
  );
}

//Export area
