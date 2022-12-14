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
export const modifyProduct = async ( productId, title, description, category, price, image) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({productId: productId, title: title, description: description, category: category, price: price, image: image })
    };
    const response = await fetch(`https://localhost:7254/api/Products/modifyProduct`, requestOptions);
}
export const buyProducts = async (cart) => {
    let IDs = cart.map(prod => prod.productId)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(IDs)
    };
    const response = await fetch(`https://localhost:7254/api/Products/buyProducts`, requestOptions);
    return response.status;
}