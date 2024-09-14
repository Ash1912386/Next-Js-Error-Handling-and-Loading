export default async function Product({params}:{params:{product:"string"}}) {
    console.log(params.product)
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
    const res = await fetchData.json()
    return (
        <div>
            <h3>Product Detail</h3>
            <h2>{res.id}</h2>
            <h2>{res.title}</h2>
            <h2>{res.body}</h2>
        </div>
    )
}