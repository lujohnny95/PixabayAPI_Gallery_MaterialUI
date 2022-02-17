import React, { useEffect, useState } from 'react'
import { TextField, SelectField, MenuItem } from '@mui/material'
import axios from "axios"
import ImageResults from './ImageResults';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [amount, setAmount] = useState(15);
    const [images, setImages] = useState([]);

    const apiUri = "https://pixabay.com/api"
    const apiKey = "25633968-8131a60401a4c3fccab888f10"

    const fetchImage = async () => {
        try {
            let response = await axios.get(`${apiURL}/?key=${apiKey}&q=${searchText}&per_page=${amount}`)
            if (response.status !== 200) {
                throw new Error ("The API id down, try again later!")
            }
            const data = await response.json()
            setImages(data.hits)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchImage()
    }, [searchText])

    const onTextChange = (e) => {
        setSearchText({ [e.target.name]: e.target.value });
    };

    const onAmountChange = (e, index, value) => {
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
            {images.length > 0 ? (
                <ImageResults images={images} />
            ) : null} 
        </div>
    )
}

export default Search