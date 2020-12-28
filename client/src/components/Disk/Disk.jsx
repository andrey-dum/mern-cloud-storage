import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
import FileList from './FileList'

import './Disk.scss'
import Popup from './Popup'
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer'

export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function openPopup () {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    return (
        <div className="disk">
            <Popup />
            <div className="disk__btns">
                <button 
                    onClick={backClickHandler}
                    className="btn disk__back"
                    >Назад</button>
                <button
                    onClick={openPopup}
                    className="btn disk__create"
                    >Создать папку
                </button>
                <div className="disk__upload">
                    <label htmlFor="disk__upload-input" className="disk__upload-label">
                        Загрузить файл
                        {/* <i className="material-icons">file_upload</i>  */}
                    </label>
                    <input multiple={true} onChange={fileUploadHandler} type="file" id="disk__upload-input" className="disk__upload-input"/>
                </div>
            </div>
            <FileList />
        </div>
    )
}
