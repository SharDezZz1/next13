import React, {useEffect, useState} from 'react'
import link from 'next/link'
import Link from 'next/link'

const Products = ({ products }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(products);
    }, [])
  return (
    <>
        <h1>Products</h1>
        <p>Products - 0</p>

        <Link href="/products/7">
            <p>Products - 7</p>
        </Link>
        <Link href="/products/8">
            <p>Products - 8</p>
        </Link>
        <Link href="/products/9">
            <p>Products - 9</p>
        </Link>

        <div>
            {/*show counter result */}
            <p>Count - {count}</p>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
            <button onClick={() => setCount(count - 1)}>Count - {count}</button>
        </div>
    </>
  )
}

//get server side props
export const getServerSideProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    console.log(data)
    return {
        props: { products: data }
    }
}

export default Products