export const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
                    // .then(res=>res.json())
                    // .then(json=>console.log(json));
                    console.log(response);
    const body = await response.json();

    return body;
}

export const fetchDataById = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log("ID");

    console.log("ID" + response);
    const body = await response.json();
    console.log(body);

    return body;
}