import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { pushToStack, setCurrentDir } from '../../reducers/fileReducer'
import { deleteFile, downloadFile } from '../../actions/file'
import sizeFormat from '../../utils/sizeFormat'


export default function File({file}) {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const fileView = useSelector(state => state.files.view)

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
    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteFile(file))
    }

    if (fileView === "plate") {
        return (
            <div className="fileplate__item" onClick={() => openDirHandler(file)}>
               <div className="file__img">
                 { file.type === 'dir'
                    ? <i className="material-icons">folder</i>
                    : <i className="material-icons">insert_drive_file</i> 
                }
                </div> 
                <div className="file__name">{file.name}</div>
                <div className="file__actions">
                    {file.type !== 'dir' && 
                    <div 
                        onClick={downloadClickHandler} 
                        className="file__btn file__download">
                            <i className="material-icons">file_download</i>
                    </div>}
                    <div className="file__btn file__delete" onClick={deleteClickHandler}>
                        <i className="material-icons">delete</i>
                    </div>
                </div>
        </div>
        )
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
            <td><div className="file__size">{sizeFormat(file.size)}</div></td>

            <td>
                <div className="file__actions">
                    {file.type !== 'dir' && 
                    <div 
                        onClick={downloadClickHandler} 
                        className="file__btn file__download">
                            <i className="material-icons">file_download</i>
                    </div>}
                    <div className="file__btn file__delete" onClick={deleteClickHandler}>
                        <i className="material-icons">delete</i>
                    </div>
                </div>
            </td>

          </tr>
        
    )
}
