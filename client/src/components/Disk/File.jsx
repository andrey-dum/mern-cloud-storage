import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { pushToStack, setCurrentDir } from '../../reducers/fileReducer'
import { downloadFile } from '../../actions/file'


export default function File({file}) {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    function openDirHandler(file) {
        if(file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(e) {
        e.stopPropagation()
        downloadFile(file)
    }


    return (
        <tr onClick={() => openDirHandler(file)} className="file__item">
            <td>
            <div className="file__img">
                 { file.type === 'dir'
                    ? <i className="material-icons">folder</i>
                    : <i className="material-icons">insert_drive_file</i> 
                }
                </div> 
            </td>
            <td><div className="file__name">{file.name}</div></td>
            <td><div className="file__date">{file.date.slice(0,10)}</div></td>
            <td><div className="file__size">{file.size}</div></td>

            <td>
                <div className="file__actions">
                    {file.type !== 'dir' && 
                    <div 
                        onClick={downloadClickHandler} 
                        className="file__btn file__download">
                            <i className="material-icons">file_download</i>
                    </div>}
                    <div className="file__btn file__delete">
                        <i className="material-icons">close</i>
                    </div>
                </div>
            </td>

          </tr>
        
        // <li className="collection-item file" onClick={() => openDirHandler(file)}>
        //     <div className="file__img secondary-content">
        //         { file.type === 'dir'
        //             ? <i className="material-icons">folder</i>
        //             : <i className="material-icons">insert_drive_file</i> 
        //         }
        //     </div> 
        //     <div className="file__name">{file.name}</div>
        //     <div className="file__date">{file.date.slice(0,10)}</div>
        //     <div className="file__size">{file.size}</div>
        //     <div className="file__actions">
        //             {file.type !== 'dir' && 
        //             <div 
        //                 onClick={downloadClickHandler} 
        //                 className="file__btn file__download">
        //                     <i className="material-icons">file_download</i>
        //             </div>}
        //             <div className="file__btn file__delete">
        //                 <i className="material-icons">file__delete</i>
        //             </div>
        //         </div>
        // </li>
    )
}
