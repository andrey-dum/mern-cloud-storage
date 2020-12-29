import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
import FileList from './FileList'

import './Disk.scss'
import Popup from './Popup'
import { setCurrentDir, setFileView, setPopupDisplay } from '../../reducers/fileReducer'
import Uploader from './Uploader/Uploader'
import Loader from '../UI/Loader/Loader'

export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const loader = useSelector(state => state.app.loader)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

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

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    if (loader) {
        return <Loader />
    }
    

    return ( !dragEnter ? 
        <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <Popup />
            <div className="disk__btns">
                <div className="left-items">
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

                <div className="right-items">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className='disk__select'
                            >
                            <option value="name">По имени</option>
                            <option value="type">По типу</option>
                            <option value="date">По дате</option>
                        </select>
                        <div className="set__view">
                            <div className="disk__plate" onClick={() => dispatch(setFileView('plate'))}>
                                <i className="material-icons">apps</i>
                            </div>
                            <div className="disk__list" onClick={() => dispatch(setFileView('list'))}>
                                
                                <i className="material-icons">list</i>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <Uploader />
            <FileList />
        </div>
        : <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
    )
}
