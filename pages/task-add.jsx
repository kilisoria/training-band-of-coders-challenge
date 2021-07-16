import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/router';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Alert } from 'reactstrap';

import Loading from '../components/Loading';
import TaskForm from '../components/TaskForm/TaskForm';

import { createTask, resetTask } from '../store/tasks/actions';

const TaskAddPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const state = useSelector((storeState) => storeState);
  const { tasks } = state;

  useEffect(() => {
    if (tasks.added) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
        router.push('tasks');
      }, 3000);
    }
  }, [tasks]);

  useEffect(() => () => {
    dispatch(resetTask());
  }, [dispatch]);

  const handleConfirm = useCallback((task) => {
    dispatch(createTask(task));
  }, []);

  const handleCancel = useCallback(() => {
    router.push('tasks');
  }, []);

  if (tasks.isAdding) {
    return <Loading />;
  }

  return (
    <>
      {showMessage
                && (
                <Alert color="success">
                  The task has just added successfully!
                </Alert>
                )}
      <div className="mb-5" data-testid="tasks">
        <h1 data-testid="tasks-title" className="pl0">New Task</h1>
        <TaskForm onConfirm={handleConfirm} onCancel={handleCancel} />
      </div>
    </>
  );
};

export default withPageAuthRequired(TaskAddPage);
