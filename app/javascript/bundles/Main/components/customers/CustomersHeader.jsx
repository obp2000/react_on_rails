import React from 'react'
import {Link} from 'react-router-dom'

const CustomersHeader = () => {
    return <thead className="thead-light">
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Ник</th>
            <th scope="col">ФИО</th>
            <th scope="col">Создан</th>
            <th scope="col">Обновлен</th>
            <th scope="col">
                <Link to="/customers/new" className="btn btn-outline-primary btn-sm">Новый</Link>
            </th>
            <th scope="col"></th>
        </tr>
    </thead>
}

export default CustomersHeader