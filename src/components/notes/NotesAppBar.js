import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = (date) => {

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );



    const handleSave = () => {
        dispatch( startSaveNote(active) );
    }

    const handlepictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if( file ) {
            dispatch( startUploading(file) );
        }
        document.querySelector('#fileSelector').value = '';
    }
    

    return (
        <div className="notes__appbar">
            <span>{ moment().format("MMM YYYY") }</span>
            

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display: 'none'}}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick={handlepictureClick}
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
