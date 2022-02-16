import React, { useState } from 'react'
import { TextField, SelectField, MenuItem } from '@mui/material'
import axios from "axios"

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [amount, setAmount] = useState(15);
    const [images, setImages] = useState([]);

    const apiUri = "https://pixabay.com/api"
    const apiKey = "25633968-8131a60401a4c3fccab888f10"

    const onTextChange = (e) => {
        setSearchText({ [e.target.name]: e.target.value }, () => {
            axios.get(`${apiURL}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`)
        });
    };

    const onAmountChange = (e) => {
        setAmount({ amount: value })
    }

    return (
        <div>
            <TextField 
                name="searchText"
                value={searchText}
                onChange={onTextChange}
                floatingLabelText = "Search for images"
                fullWidth="true"
            />
            <br/>
            <SelectField
                name="amount"
                floatingLabelText="Amount"
                value={amount}
                onChange={onAmountChange}
            >
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
            </SelectField>
            <br/>
        </div>
    )
}

export default Search