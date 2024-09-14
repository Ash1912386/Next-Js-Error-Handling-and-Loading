import Link from "next/link"
import Nav from "../Components/navbar"

export default function Products(){
    return(
        <div>
            <Nav/>
            <h3>Product List</h3>
            <ol>
                <li>
                    <Link href="/products/product">click Here to see the detail page of Product</Link>
                </li>
                <li>
                    <Link href="/products/product">click Here to see the detail page of Product</Link>
                </li>
                <li>
                    <Link href="/products/product">click Here to see the detail page of Product</Link>
                </li>
            </ol>
        </div>
    )
}