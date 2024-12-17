
'use client'
import axios from "axios"
import { useEffect,useState } from "react"

export default () => {
    const [data,setData] = useState([])
    const [sort,setSort] = useState('asc')
    const [limit, setLimit ] = useState('20')
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        const funq = async () => {
            await axios.get(`https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`).then((response) => {
                setData(response.data)
            })
            setLoading(true);
        }
        funq();
    },[])
    return (
        <div>
            {!loading && <p style={{color: 'white'}}>Loading...</p>}
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '50px', marginLeft: '70px'}}>
            {
            data.map((item: any,index) => {
                return(
                    <div style={{marginLeft: '40px'}} key={index}>
                        <h3 style={{color: 'white', width: '200px', cursor: "pointer"}}>{item.title}</h3>
                        <h5  style={{color: 'white'}}>{item.price}$</h5>
                        <img style={{width: '250px', height: '250px', cursor: "pointer"}}  src={item.image}/>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}