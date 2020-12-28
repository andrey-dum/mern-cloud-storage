import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { pushToStack, setCurrentDir } from '../../reducers/fileReducer'



export default function File({file}) {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    const openDirHandler = () => {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file._id))
    }

    return (
        <tr onClick={file.type === 'dir' ? openDirHandler : ''}>
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
