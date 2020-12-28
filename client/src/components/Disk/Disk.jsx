import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createDir, getFiles } from '../../actions/file'
import FileList from './FileList'

import './Disk.scss'
import Popup from './Popup'
import { setPopupDisplay } from '../../reducers/fileReducer'

export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function openPopup () {
        
        dispatch(setPopupDisplay('flex'))
    }

    return (
        <div className="disk">
            <Popup />
            <div className="disk__btns">
                <button className="btn disk__back">Назад</button>
                <button
                    onClick={openPopup}
                    className="btn disk__create"
                    >Создать папку
                </button>
            </div>
            <FileList />
        </div>
    )
}
