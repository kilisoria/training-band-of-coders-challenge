import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Alert, Button } from 'reactstrap';
import Link from 'next/link';

import Loading from '../components/Loading';
import Table from '../components/Table/Table';

import { getTasks, resetTask, deleteTask } from '../store/tasks/actions';

const HEADERS = ['Id', 'Name', 'Type', 'Details', 'Actions'];

const TasksPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch()

  const state = useSelector((state) => state)
  const { tasks } = state

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  useEffect(() => {
    if (tasks.deleted) {
      setShowMessage(true);
    
      setTimeout(() => {    
        setShowMessage(false);
        dispatch(getTasks());
      }, 1000);
    }
  }, [tasks])

  useEffect(() => {
    return () => {
      dispatch(resetTask())
    }
  }, [dispatch])

  const handleDelete = useCallback(id => {
    dispatch(deleteTask(id))
  }, []);

  if (tasks.isFetching || tasks.isDeleting) {
    return <Loading />
  }

  return (
    <>
      <div className="mb-5" data-testid="tasks">
        <h1 data-testid="tasks-title" className="pl0">Tasks</h1>
        <Link  href="/task-add">
          <Button color="link" className="pl0">Add new task</Button>
        </Link>
        {tasks.deleted && showMessage &&
          <Alert color="success">
              The task has just deleted successfully!
          </Alert>
        }
        <div data-testid="tasks-text">
          <Table headers={HEADERS} items={tasks.items} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default withPageAuthRequired(TasksPage);
