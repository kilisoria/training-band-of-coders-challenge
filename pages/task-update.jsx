import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { withRouter, useRouter } from 'next/router';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Alert } from 'reactstrap';

import Loading from '../components/Loading';
import TaskForm from '../components/TaskForm/TaskForm';

import { getTask, updateTask, resetTask } from '../store/tasks/actions';

const TaskUpdatePage = () => {
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const state = useSelector((state) => state)
    const { tasks } = state

    useEffect(() => {
        dispatch(getTask(router.query.id))
    }, [dispatch])

    useEffect(() => {
        if (tasks.updated) {
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
                router.push('tasks');
            }, 3000);
        }
    }, [tasks])

    useEffect(() => {
        return () => {
            dispatch(resetTask())
        }
    }, [dispatch])

    const handleConfirm = useCallback(task => {
        dispatch(updateTask(router.query.id, task))
    }, [dispatch]);

    if (tasks.isSelecting) {
        return <Loading />
    }

    return (
        <>
            {showMessage &&
                <Alert color="success">
                    The task has just updated successfully!
                </Alert>
            }
            <div className="mb-5" data-testid="tasks">
                <h1 data-testid="tasks-title" className="pl0">Task</h1>
                <h5>{`${tasks && tasks.selected && tasks.selected._id}`}</h5><br/>
                <TaskForm onConfirm={handleConfirm} onCancel={()=> router.push('tasks')} data={tasks.selected} />
            </div>
        </>
    );
}

export default withRouter(withPageAuthRequired(TaskUpdatePage));
