import Nav from '../../../../component/nav';

export default async function Product({params}:{params:{Product: string}}){
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.Product}`)
    const res = await fetchData.json()
    console.log(res)

    // (props:{params:{Product: string}}
    return(
        <div>
            <h1>{res.id}</h1>
            <b>{res.title}</b>
            <p>{res.body}</p>

           <div>
            <Nav/>
           </div>
        </div>
    )
    }