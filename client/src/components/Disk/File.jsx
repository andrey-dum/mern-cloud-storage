import React from 'react'

export default function File({file}) {
    return (
        <tr>
            <td>
            <div className="file__img">
                 { file.type === 'dir'
                    ? <i class="material-icons">folder</i>
                    : <i class="material-icons">file</i> 
                }
                </div> 
            </td>
            <td><div className="file__name">{file.name}</div></td>
            <td><div className="file__date">{file.date.slice(0,10)}</div></td>
            <td><div className="file__size">{file.size}</div></td>
          </tr>
        
        // <li class="collection-item file">
        //     <div className="file__img secondary-content">
        //         { file.type === 'dir'
        //             ? <i class="material-icons">folder</i>
        //             : <i class="material-icons">file</i> 
        //         }
        //     </div> 
        //     <div className="file__name">{file.name}</div>
        //     <div className="file__date">{file.date.slice(0,10)}</div>
        //     <div className="file__size">{file.size}</div>
        // </li>
    )
}
