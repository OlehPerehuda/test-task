import React from 'react';

export default function TableItem({item, changeWidth}) {

    let h = 420;
    console.log(changeWidth(window.innerWidth))
    function date(date) {
        let time = new Date(date);
        return time.toLocaleString();
    }
    let notProvided = 'not provided...'
    
    return (
        <tr>
            <td className="col-1">{date(item.time)}</td>
            <td className="col-2">{changeWidth(window.innerWidth) > h ? (item.title || notProvided) : (item.title.slice(0, 5) + '...')} </td>
            <td className="col-1">{item.domain || notProvided}</td>
        </tr>
    )
}