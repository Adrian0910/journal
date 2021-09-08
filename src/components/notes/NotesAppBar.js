import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNotes, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );



    const handleSave = () => {
        dispatch( startSaveNotes(active) );
    }

    const handlepictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if( file ) {
            dispatch( startUploading(file) );
        }
    }
    

    return (
        <div className="notes__appbar">
            <span>28 de Octubre 2021</span>

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
