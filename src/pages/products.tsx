'use client'
import axios from "axios"
import styles from "@/styles/Home.module.css"
import { useEffect,useState } from "react"
import Pagination from "@/components/Pagination"
// https://api.escuelajs.co/api/v1/products
export default () => {
    interface Product {
        title: string;
        price: string
      }
      
    const [data,setData] = useState<Product[]>([])
    const [sort,setSort] = useState('asc')
    const [limit, setLimit ] = useState('20')
    const [price, setPrice] = useState('150')
    const funqcia = () => {
        axios.get(`https://fakestoreapi.com/products`).then((response) => {
           setData(response.data.sort((a: any,b: any) => a.title.localeCompare(b.title)))
        })
    }
    useEffect(funqcia,[])
    const sortireba = (value: any) => {
        let items = [...data]
        if( value == 'desc') {
            items = items.sort((a,b) => b.title.localeCompare(a.title))
        }else if(value == 'asc') {
            items = items.sort((a,b) => a.title.localeCompare(b.title))
        }
        setData(items)
    }
    useEffect(() => sortireba(sort),[sort])
    return (
        <div>
            <input type="input" value={limit} onChange={(e) => {setLimit(e.target.value)}} />
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option>asc</option>
                <option>desc</option>
            </select>
            <div>
            <label style={{color: 'white'}} className="form-label">Price Range <br></br>{price}$</label>
            <input style={{ width: '200px'}} value={price} onChange={(e) => setPrice(e.target.value)} type="range" className="form-range" min="0" max="150" id="customRange2"></input>
            </div>
           <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '50px', marginLeft: '70px'}}>
            {
            data.filter(item => item.price <= price ).slice(0,Number(limit)).map((item: any) => {
                return(
                    <div style={{
                        marginLeft: '40px'}}>
                        <h3 style={{color: 'white', width: '200px', cursor: "pointer", whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>{item.title}</h3>
                        <h5  style={{color: 'white'}}>{item.price}$</h5>
                        <img style={{width: '250px', height: '250px'}}  src={item.image}/>
                    </div>
                    )
                })
            }
            </div>
            <Pagination/>
        </div>
    )
}