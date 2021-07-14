import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Link from 'next/link';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Loading from '../components/Loading';
import Table from '../components/Table/Table';

import { getTasks, resetTask, deleteTask } from '../store/tasks/actions';

const HEADERS = ['Id', 'Name', 'Type', 'Details', 'Actions'];

const TasksPage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [modal, setModal] = useState(false);
  const [idSelected, setIdSelected] = useState(null);

  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const { tasks } = state

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])

  useEffect(() => {
    if (tasks.deleted) {
      setShowMessage(true);
      dispatch(getTasks());
    
      setTimeout(() => {    
        setShowMessage(false);
      }, 1000);
    }
  }, [tasks])

  useEffect(() => {
    return () => {
      dispatch(resetTask())
    }
  }, [dispatch])

  const toggle = () => setModal(!modal);

  const handleDelete = id => {
    dispatch(deleteTask(idSelected));
    toggle();
  };

  const handleTaskSelectedToDelete = id => {
    setIdSelected(id)
    toggle();
  };

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
          <Table headers={HEADERS} items={tasks.items} onDelete={handleTaskSelectedToDelete} />
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h1>Task</h1>
        </ModalHeader>
        <ModalBody>
          Do you want to delete the selected task? Are you sure?
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={handleDelete}>Confirm</Button>{' '}
          <Button color="secondary" onClick={()=> handleTaskSelectedToDelete(null)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default withPageAuthRequired(TasksPage);
