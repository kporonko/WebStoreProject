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
export const insertProduct = async (title,description, category, price, image,rate, count, ) => {
    console.log("Start fetch: ")

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: {title}, category: {category}, price: {price}, image: {image}, description: {description}, rate: {rate}, count: {count} })
    };

    console.log('requestOptions')
    console.log(requestOptions)
    const response = await fetch(`https://localhost:7254/api/Products/newProduct`, requestOptions);
    console.log("Response inside fetch: ")
    console.log(response)
    const body = await response.json();

    console.log("Body inside fetch: ")
    console.log(body)
    console.log("End fetch: ")
    return body;
}