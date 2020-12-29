import React from 'react'
import {useSelector} from "react-redux";
import File from "./File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export default function FileList() {
    const files = useSelector(state => state.files.files)
    const fileView = useSelector(state => state.files.view)

    if (files.length === 0) {
        return <div className="loader"><h5>Файлы не найдены</h5></div>
    }

    if (fileView === "plate") {
        return (
            <ul className="fileplate">
                {files.map(file =>
                    <File key={file._id} file={file}/>
                )}
        </ul>
        )
    }
    

    if (fileView === 'list') {
        return (
            <div className='filelist'>
                   
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

    
}
