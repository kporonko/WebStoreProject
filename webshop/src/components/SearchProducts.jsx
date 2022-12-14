import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Pagination, Stack, TextField, Typography} from "@mui/material";
import {fetchData} from "../fetch/fetchData";
import ProductCard from "./ProductCard";


const SearchProducts = ({isAdmin, products, onAdd}) => {

    const [search, setSearch] = useState('');
    let [currSearch, setCurrSearch] = useState('')

    let [searchedProducts, setSearchedProducts] = useState([]);

    let [isSearched, setIsSearched] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastProduct = currentPage * 9;
    const indexOfFirstProduct = indexOfLastProduct - 9;
    const currentSearchedProducts = searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (event, value) => {
        setCurrentPage(value);
        refSearch.current.scrollIntoView()
    };

    const refSearch = useRef(null)
    const handleSearch = async () => {
        if (search) {
            searchedProducts = products.filter(
                (prod) =>
                    prod.title.toLowerCase().includes(search) ||
                    prod.description.toLowerCase().includes(search)
            );
            setSearchedProducts(searchedProducts)
            setIsSearched(true)
            setCurrSearch(search)
            setSearch('')
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography ref={refSearch} mb="30px" fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} textAlign="center">
                Search for products<br/>
            </Typography>
            <Box position="relative" mb="32px">
                <TextField sx={{input: {fontWeight: '700', border: 'none', borderRadius: '4px'}, width: {lg: '900px', xs: '350px'}, borderRadius:"40px", backgroundColor: '#fff'}} height ="76px" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder='Search products...' type="text"/>
                <Button className="hover-none" onClick={handleSearch}
                        sx={{bgcolor: 'black', color: '#fff', textTransform: 'none', width: {lg: '175px', xs: '12px'}, fontSize:{lg: '20px', xs: '14px'}, height: '56px', position: "absolute", right: '0'}}
                >
                    Search
                </Button>
            </Box>
            {isSearched? <h2 style={{display: 'block', margin: '20px 20px', textAlign: 'center'}}>Searched results on request '<i>{currSearch}</i> '<br/>Found {searchedProducts.length} results:</h2> : ''}
            <Box className='box'>
                {currentSearchedProducts.length > 0 ? (currentSearchedProducts.map((prod) =>
                    <ProductCard isAdmin={isAdmin} key={prod.productId} product={prod} onAdd={onAdd}/>
                )) : isSearched ? <div>No results...</div> : ''}
            </Box>
            <Box mt={4} style={{display: 'flex', justifyContent: 'center'}}>
                {(isSearched && currentSearchedProducts.length > 0) && <Pagination
                    defaultPage={1}
                    count={Math.ceil(searchedProducts.length / 9)}
                    page={currentPage}
                    onChange={paginate}
                />}
            </Box>
        </Stack>
    );
};

export default SearchProducts;