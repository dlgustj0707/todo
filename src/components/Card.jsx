import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import './Card.css'; // CSS 파일을 추가합니다.

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckBox = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <div className="card-wrapper">
            <div className="card-top" style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
            <div className="task-holder" style={{ backgroundColor: isChecked ? '#d3d3d3' : '#fff' }}>
                <div className="card-title">
                    <input type='checkbox' onChange={handleCheckBox} />
                    <span
                        className="card-header"
                        style={{
                            backgroundColor: colors[index % 5].secondaryColor,
                            borderRadius: "10px",
                        }}
                    >
                        {taskObj.Name}
                    </span>
                </div>
                <p className="mt-3">{taskObj.Description}</p>

                <div className="card-actions">
                    <button className="btn" style={{ color: colors[index % 5].primaryColor }} onClick={() => setModal(true)}>Edit</button>
                    <button className="btn" style={{ color: colors[index % 5].primaryColor }} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;
