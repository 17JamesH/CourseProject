import React from 'react';

const SearchResult = (data) => {
    return (
    <table>
        <tr>
            <th> price </th>
            <th> type </th>
            <th> bed </th>
            <th> price </th>
            <th> price </th>
            <th> price </th>
            <th> price </th>
        </tr>
        {
            data.map((property) => (
                <tr>
                    <td> {property.price} </td>
                    <td> {property.type} </td>
                    <td> {property.bed} </td>
                    <td> {property.bath} </td>
                    <td> {property.city} </td>
                    <td> {property.zip} </td>
                    <td> {property.street} </td>
                </tr>
            ))
        }
    </table>
        
    )
}