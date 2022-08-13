export const fetchData = async () => {

    const response = await fetch('https://localhost:7254/api/Products/getAllProducts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }});

    const body = await response.json();

    return body;
}

export const fetchDataById = async (id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(`https://localhost:7254/api/Products/prodById?id=${id}`, requestOptions);
    const body = await response.json();

    return body;
}