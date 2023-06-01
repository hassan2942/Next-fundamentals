import Nav from '../../../../component/nav';

export default async function Product(props:{params:{Product: string}}){
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.Product}`)
    const res = await fetchData.json()
    console.log(res)

    // (props:{params:{Product: string}}
    return(
        <div>
            <h1>{res.id}</h1>
            <p>{res.title}</p>
            <p>{res.body}</p>

           <div>
            <Nav/>
           </div>
        </div>
    )
    }