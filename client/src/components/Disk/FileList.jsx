import React from 'react'
import {useSelector} from "react-redux";
import File from "./File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default function FileList() {
    const files = useSelector(state => state.files.files)

    if (files.length === 0) {
        return <div className="loader"><h5>Файлы не найдены</h5></div>
    }

    return (
        <div className='filelist'>
            {/* <ul className="collection with-header filelist">
                <li className="collection-header filelist__header">
                    <h4 className="filelist__name">Название</h4>
                    <h4 className="filelist__date">Дата</h4>
                    <h4 className="filelist__size">Размер</h4>
                    <h4 className="filelist__actions">Action</h4>
                </li>
               
                {files}
            </ul> */}

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Название</th>
                        <th>Дата</th>
                        <th>Размер</th>
                        <th>Действия</th>
                    </tr>
                </thead>

                <tbody>
       
                    {files.map(file =>
                        <CSSTransition
                    
                            key={file._id}
                            timeout={500}
                            classNames={'file'}
                            exit={false}
                        >
                            <File file={file}/>
                        </CSSTransition>
                    )}
      

                </tbody>
            </table>
            
        </div>
    )
}
