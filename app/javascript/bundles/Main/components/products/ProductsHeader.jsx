import React from 'react'
import {Link} from 'react-router-dom'

const ProductsHeader = () => {
    return <thead className="thead-light">
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Название</th>
            <th scope="col">Цена, руб.</th>
            <th scope="col">Ширина, см</th>
            <th scope="col">Плотность</th>
            {/* <th scope="col">Вес</th>
            <th scope="col">Цена, $</th>
            <th scope="col">Курс $</th>
            <th scope="col">Себестоимость, руб./м</th> */}
            <th scope="col">Создана</th>
            <th scope="col">Изменена</th>
            <th scope="col">
                <Link to='/products/new' className="btn btn-outline-primary btn-sm">Новая</Link>
            </th>
            <th scope="col"></th>
        </tr>
    </thead>
}

export default ProductsHeader