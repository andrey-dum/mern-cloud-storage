import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createDir } from '../../actions/file';
import { setPopupDisplay } from '../../reducers/fileReducer';
import Input from '../UI/Input/Input'


export default function Popup() {
    const [dirName, setDirName] = useState('');
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    function changeHandler (e) {
        setDirName(e.target.value)
    }
   
    function createHandler () {
        dispatch(createDir(currentDir, dirName))
        setDirName('')
        dispatch(setPopupDisplay('none'))
    }

    return (
        <div className="popup" 
            style={{display: popupDisplay}}
            onClick={() => dispatch(setPopupDisplay('none'))}
            >
            <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                <div className="popup__header">
                    <div className="popup__title">
                        <h5>Создать новую папку</h5>
                    </div>
                    <div
                        onClick={() => dispatch(setPopupDisplay('none'))}
                        className="popup__close"
                        ><i class="material-icons">close</i></div>
                </div>
                <Input
                        id="popupCreateDir"
                        value={dirName}
                        onChange={changeHandler}
                        type="text"
                        placeholder="Название папки"
                    />
                    <button 
                        className="btn popup__button"
                        onClick={createHandler}
                        >
                        Создать
                    </button>
            </div>
        </div>
    )
}
