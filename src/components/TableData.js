import React from 'react';
import TableItem from './TableItem';

export default function TableData(props) {
    return (
        <table>
            <tr>
                <th>Time added <button onClick={() => props.sortedTimeUp()}>&#8659;</button><button onClick={() => props.sortedTimeDown()}>&#8657;</button></th>
                <th>Title <button className="button" onClick={() => props.sortedTitleUp()}>&#8659;</button><button className="button" onClick={() => props.sortedTitleDown()}>&#8657;</button></th>
                <th>Domain <button className="button" onClick={() => props.sortedDomainUp()}>&#8659;</button><button className="button" onClick={() => props.sortedDomainDown()}>&#8657;</button></th>
            </tr>
            {props.items.map(item => {
                return <TableItem item={item} key={item.id} changeWidth={props.changeWidth}/>
            })}
        </table>
    )
}