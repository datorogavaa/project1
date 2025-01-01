'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import Pagination from "@/components/Pagination"

export default () => {
    interface Product {
        title: string;
        price: string;
        images: string;
    }

    const [sort, setSort] = useState('asc')
    const [limit, setLimit] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState<Product[]>([])
    const [price, setPrice] = useState('150')
    const [loading, setLoading] = useState(true) // Add a loading state
    const [pagination, setPagination] = useState({
        startProductIndex: 0,
        lastProductIndex: limit
    });

    const paginate = () => {
        const newLastProductIndex = currentPage * limit;
        const newStartProductIndex = newLastProductIndex - limit;

        setPagination({
            startProductIndex: newStartProductIndex,
            lastProductIndex: newLastProductIndex
        });
    };

    useEffect(paginate, [currentPage, limit])

    const funqcia = () => {
        setLoading(true) // Set loading to true before fetching data
        Promise.all([
            axios.get(`https://fakestoreapi.com/products`),
            axios.get(`https://dummyjson.com/products`)
        ]).then(([response, response1]) => {
            const modifResponse = response.data.map((item: any) => ({
                ...item,
                images: item.image || 'default-image-url.jpg' // Fallback if no image
            }))
            const modifResponse1 = response1.data.products.map((item: any) => ({
                ...item,
                images: item.images?.[0] || 'default-image-url.jpg' // Fallback if no image
            }))
            const res = [...modifResponse, ...modifResponse1]
            setData(res)
            setLoading(false) // Set loading to false after data is fetched
        }).catch(() => {
            setLoading(false) // Handle errors and stop loading
        })
    }

    useEffect(funqcia, [])

    const sortireba = (value: any) => {
        let items = [...data]
        if (value === 'desc') {
            items = items.sort((a, b) => {
                const titleA = a.title ?? '';
                const titleB = b.title ?? '';
                return titleB.localeCompare(titleA)
            })
        } else if (value === 'asc') {
            items = items.sort((a, b) => {
                const titleA = a.title ?? 'BLA';
                const titleB = b.title ?? 'BLA';
                return titleA.localeCompare(titleB)
            })
        }
        setData(items)
    }

    return (
        <div>
            <input type="input" value={limit} onChange={(e) => { setLimit(Number(e.target.value)) }} />
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option>asc</option>
                <option>desc</option>
            </select>

            <div>
                <label style={{ color: 'white' }} className="form-label">Price Range <br />{price}$</label>
                <input
                    style={{ width: '200px' }}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="range"
                    className="form-range"
                    min="0"
                    max="150"
                    id="customRange2"
                />
            </div>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginTop: '50px',
                marginLeft: '70px'
            }}>
                {
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        data.filter(item => item.price <= price).slice(pagination.startProductIndex, pagination.lastProductIndex).map((item: any) => {
                            return (
                                <div style={{ marginLeft: '40px' }} key={item.title}>
                                    <h3 style={{
                                        color: 'white',
                                        width: '200px',
                                        cursor: "pointer",
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden'
                                    }}>{item.title}</h3>
                                    <h5 style={{ color: 'white' }}>{item.price}$</h5>
                                    <img
                                        style={{ width: '370px', height: '350px' }}
                                        src={item.images}
                                        alt={item.title}
                                    />
                                </div>
                            )
                        })
                    )
                }
            </div>

            <Pagination
                limit={limit}
                dataLength={data.filter((item: any) => item.price <= price).length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
