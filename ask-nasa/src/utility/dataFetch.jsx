import { useState, useEffect } from 'react'
import axios from 'axios';

export default function dataFetch(defaultUrl) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${defaultUrl}`).then(
            (response) => {
                console.log(response.headers);
                setData(response.data);
            });
    }, []);
    return data;
}