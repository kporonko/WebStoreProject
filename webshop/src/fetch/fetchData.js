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
export const insertProduct = async (title, description, category, price, image,rate, count, ) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, description: description, category: category, price: price, image: image, rate: rate, count: count })
    };
    const response = await fetch(`https://localhost:7254/api/Products/newProduct`, requestOptions);
}

export const deleteProduct = async (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: id })
    };
    const response = await fetch(`https://localhost:7254/api/Products/deleteProduct`, requestOptions);
}