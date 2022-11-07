import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { setSidepanelVisibility } from '../store/globalSlice'
import { addTask } from '../store/taskSlice'

function Sidepanel() {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        id: uuidv4(),
        name: '',
        priority: '',
        estimation: ''
    });

    const handleInput = (label, value) => {
        form[label] = value
        setForm(form)
    }

    const handleSubmit = () => {
        dispatch(addTask(form))
        dispatch(setSidepanelVisibility(false))
    }

    return (
        <>
            <div className="sidepanel-overlay" onClick={() => dispatch(setSidepanelVisibility(false))}></div>
            <div className="sidepanel">
                <span className="sidepanel__header">Add Task</span>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="input-group__label">Name</label>
                        <input type="text" className="input-group__input" onChange={(e) => handleInput('name', e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label className="input-group__label">Priority</label>
                        <select className="input-group__input" onChange={(e) => handleInput('priority', e.target.value)}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label className="input-group__label">Estimation</label>
                        <input type="number" className="input-group__input" onChange={(e) => handleInput('estimation', e.target.value)} />
                    </div>
                    <div className="input-group">
                        <div className="input-group__button" onClick={handleSubmit}>Send</div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Sidepanel;