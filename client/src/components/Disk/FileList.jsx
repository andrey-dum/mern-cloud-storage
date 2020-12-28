import React from 'react'
import {useSelector} from "react-redux";
import File from "./File";


export default function FileList() {
    const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file} />)

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
                    {files}
                </tbody>
            </table>
            
        </div>
    )
}
