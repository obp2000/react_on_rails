import PropTypes from 'prop-types';
import React from 'react'
import {Link} from 'react-router-dom'
import PageItem from './PageItem'

const Pagination = ({base, page, totalPages, search}) => {
    const _page = parseInt(page)
    // const query = term
        // ? `?term=${term}`
        // : ''
    return <nav aria-label={`${base} pages`}>
        <ul className="pagination">
            {(_page > 1) && <li className="page-item">
                <Link
                    to={{
                    pathname: `${base}/pages/${_page - 1}`,
                    search
                }}
                    className="page-link">{'<<'}</Link>
            </li>}
            {Array(totalPages)
                .fill()
                .map((_, page_number) => {
                    return <PageItem
                        key={page_number}
                        page_number={page_number + 1}
                        page={_page}
                        base={base}
                        search={search}/>
                })}
            {(_page < totalPages) && <li className="page-item">
                <Link
                    to={{
                    pathname: `${base}/pages/${_page + 1}`,
                    search
                }}
                    className="page-link">{'>>'}</Link>
            </li>}
        </ul>
    </nav>
}

Pagination.propTypes = {
    page: PropTypes.string,
    totalPages: PropTypes.number,
    pathname: PropTypes.string
}

export default Pagination
