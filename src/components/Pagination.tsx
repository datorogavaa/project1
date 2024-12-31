import { useState } from "react"
import Link from "next/link"
interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
export default({ currentPage, setCurrentPage }: PaginationProps) => {

    const funq = (e: any) => {
        setCurrentPage(Number(e.target.innerText))
    }
    const prevPage = (e: any) => {
        setCurrentPage(Number(currentPage - 1))
    }
    const nextPage = (e: any) => {
        setCurrentPage(Number(currentPage + 1))
    }
    return (
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li onClick={prevPage} className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
            </a>
            </li>
            <li onClick={(e) => funq(e)} className="page-item"><Link className="page-link" href="#">1</Link></li>
            <li onClick={(e) => funq(e)} className="page-item"><Link className="page-link" href="#">2</Link></li>
            <li onClick={(e) => funq(e)} className="page-item"><Link className="page-link" href="#">3</Link></li>
            <li onClick={(e) => funq(e)} className="page-item"><Link className="page-link" href="#">4</Link></li>
            <li onClick={(e) => funq(e)} className="page-item"><Link className="page-link" href="#">5</Link></li>
            <li onClick={(e) => funq(e)} className="page-item"><Link className="page-link" href="#">6</Link></li>
            <li onClick={nextPage} className="page-item">
            <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
            </a>
            </li>
        </ul>
        </nav>
    )

}