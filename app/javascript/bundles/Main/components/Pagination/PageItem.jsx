import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

const PageItem = ({page, page_number, base, search}) => {
    return <li
        className={"page-item" + ((page_number == page)
        ? ' active'
        : '')}>
        <Link
            to={{
            pathname: `${base}/pages/${page_number}`,
            search
        }}
            className="page-link">{page_number}</Link>
    </li>
}

PageItem.propTypes = {
    page: PropTypes.number,
    page_number: PropTypes.number,
    base: PropTypes.string
}

export default PageItem
