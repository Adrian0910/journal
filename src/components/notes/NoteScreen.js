import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {

    // code here
    const dispatch = useDispatch();    

    const { active: note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;
    
    const activeId = useRef(note.id);
    
    useEffect(() => {

        if( note.id !== activeId.current ){
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {
        dispatch( activeNote( formValues.id, {...formValues} ) );
    }, [formValues, dispatch]);



    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name={title}
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    name={body}
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    (note.url) &&
                    (
                        <div >
                            <img 
                                className="notes__image"
                                src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos-1280x720.jpg"
                                alt="scenery"
                            />
                        </div>
                    )
                }

            </div>

        </div>
    )
}
