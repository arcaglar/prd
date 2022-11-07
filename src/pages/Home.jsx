import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'

import Breadcrumb from '../components/Breadcrumb'
import Sidepanel from '../components/Sidepanel'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import backlog from '../assets/image/draglist2.svg'
import toDo from '../assets/image/draglist3.svg'
import inProgress from '../assets/image/draglist1.svg'
import test from '../assets/image/draglist4.svg'

import taskIcon from '../assets/image/task_icon.svg'

import low from '../assets/image/low.svg'
import medium from '../assets/image/medium.svg'
import high from '../assets/image/high.svg'

import avatar from '../assets/image/avatar.png'


function Home () {
    const tasks = useSelector((state) => state.task.tasks)
    const isSidepanelVisibility = useSelector((state) => state.global.isSidepanelVisibility)
    const [columns, setColumns] = useState([]);
    
    const taskStatus = {
        backlog: {
            name: 'Backlog',
            items: []
        },
        toDo: {
            name: 'To Do',
            items: []
        },
        inProgress: {
            name: 'In Progress',
            items: []
        },
        test: {
            name: 'Test',
            items: []
        }
    }

    useEffect(() => {
        taskStatus.backlog.items = tasks
        setColumns(taskStatus)
      }, [tasks]);

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
      
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = columns[source.droppableId];
          const destColumn = columns[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems
            }
          });
        } else {
          const column = columns[source.droppableId];
          const copiedItems = [...column.items];
          const [removed] = copiedItems.splice(source.index, 1);
          copiedItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...column,
              items: copiedItems
            }
          });
        }
    };

    return (
        <div className="container">
            { isSidepanelVisibility && (
                <Sidepanel/>
            )}
            <Breadcrumb/>
            <div className="draglist">
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                    <div
                        className="draglist__column"
                        key={columnId}
                    >
                        <div className="draglist-header">
                            <div>
                                { column.name === 'Backlog' && ( <img src={backlog} /> )}
                                { column.name === 'To Do' && ( <img src={toDo} /> )}
                                { column.name === 'In Progress' && ( <img src={inProgress} /> )}
                                { column.name === 'Test' && ( <img src={test} /> )}
                                <span>{column.name}</span>
                            </div>
                            <div className="draglist-header__badge">{column.items.length}</div>
                        </div>
                        <div>
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided, snapshot) => {
                                return (
                                    <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="draglist-column"
                                    style={{
                                        marginTop: '12px',
                                        minHeight: 450
                                    }}
                                    >
                                    {column.items.map((item, index) => {
                                        return (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => {
                                            return (
                                                <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="draglist__item"
                                                style={{
                                                    boxShadow: snapshot.isDragging
                                                    ? '0px 4px 5px 0px rgba(0,0,0,0.25)'
                                                    : '0px 0px 5px 0px rgba(0,0,0,0)',
                                                    backgroundColor: snapshot.isDragging
                                                    ? "#f1f1f1"
                                                    : "#fff",
                                                    ...provided.draggableProps.style
                                                }}
                                                >
                                                    <div className="draglist__item-title">
                                                        {item.name}
                                                    </div>
                                                    <div className="draglist__item-bottom">
                                                        <div className="draglist__item-bottom__id">
                                                            <img src={taskIcon} />
                                                            TSK-02
                                                        </div>
                                                        <div className="draglist__item-bottom__info">
                                                            { item.priority === "Low" && ( <img src={low} /> )}
                                                            { item.priority === "Medium" && ( <img src={medium} /> )}
                                                            { item.priority === "High" && ( <img src={high} /> )}
                                                            <span className="">{item.estimation}</span>
                                                            <img src={avatar} />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                            }}
                                        </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                    </div>
                                );
                                }}
                            </Droppable>
                        </div>
                    </div>
                    );
                })}
                </DragDropContext>
                </div>
            </div>
    );
}

export default Home;