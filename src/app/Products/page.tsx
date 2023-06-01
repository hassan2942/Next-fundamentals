import Card from '../../../component/card';
import Nav from '../../../component/nav';
import Link from 'next/link';


export default async function Products(){
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await fetchData.json()
    console.log(res)
    return(
        <div>
            <h1>Products</h1>
            <Nav/>
            <Card/>
            <div>
              <ol>
                {
                    res.map((item : any, i : number) => {
                        return(<li><Link href = {`/Products/${item.id}`}>{item.title}</Link></li>)
                    })
                }
              </ol>
            </div>
        </div>
    )
}