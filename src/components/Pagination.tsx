import { useState } from "react"
import Link from "next/link"
interface PaginationProps {
    dataLength: any;
    limit: any;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export default({limit, dataLength, currentPage, setCurrentPage }: PaginationProps) => {

    const funq = (e: any) => {
        setCurrentPage(Number(e.target.innerText))
    }
    const prevPage = (e: any) => {
        setCurrentPage(Number(currentPage - 1))
    }
    const nextPage = (e: any) => {
        setCurrentPage(Number(currentPage + 1))
    }
    let count =  ( dataLength / limit )
    const pages = []
    for (let index = 0; index < count; index++) {
        pages.push(<li onClick={(e) => funq(e)} className="page-item"><Link  style={{backgroundColor: '#303030', 
            borderRadius: '20px',marginLeft: '10px', fontWeight: 'bolder'}} className="page-link" href="#">{index+1}</Link></li>)
        }
    return (
        <nav aria-label="Page navigation example" style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'
            }}>
        <ul style={{ display: 'flex', flexWrap: 'wrap'}} className="pagination">
            <li onClick={prevPage} className="page-item">
            <a style={{backgroundColor: '#303030', borderRadius: '20px',marginLeft: '10px', fontWeight: 'bolder'}} className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span  className="sr-only"></span>
            </a>
            </li>
            
            {pages}

            <li  onClick={nextPage} className="page-item">
            <a  style={{backgroundColor: '#303030', borderRadius: '20px',marginLeft: '10px', fontWeight: 'bolder'}} className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only"></span>
            </a>
            </li>
        </ul>
        </nav>
    )

}