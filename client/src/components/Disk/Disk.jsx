import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getFiles } from '../../actions/file'
import FileList from './FileList'

import './Disk.scss'

export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    return (
        <div className="disk">
            <div className="disk__btns">
                <button className="btn disk__back">Назад</button>
                <button className="btn disk__create">Создать папку</button>
            </div>
            <FileList />
        </div>
    )
}
