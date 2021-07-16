import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

const TYPES = ['Low', 'Normal', 'Medium', 'Higth'];

const TaskForm = ({ data, onConfirm, onCancel }) => {
  const [name, setName] = useState((data && data.name) || '');
  const [type, setType] = useState((data && data.type) || TYPES[0]);
  const [details, setDetails] = useState((data && data.details) || '');

  const handleConfirm = useCallback(() => {
    onConfirm({
      name,
      type,
      details,
    });
  }, [name, type, details]);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, [name]);

  const handleTypeChange = useCallback((e) => {
    setType(e.target.value);
  }, [type]);

  const handleDetailsChange = useCallback((e) => {
    setDetails(e.target.value);
  }, [details]);

  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" placeholder="Task name" value={name} onChange={handleNameChange} />
      </FormGroup>
      <FormGroup>
        <Label for="taskType">Type</Label>
        <Input type="select" name="taskType" defaultValue={type} onChange={handleTypeChange}>
          {TYPES.map((typeItem) => <option key={`type_option_${typeItem}`} value={typeItem}>{typeItem}</option>)}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="details">Details</Label>
        <Input type="textarea" name="details" placeholder="Details for the task" value={details} onChange={handleDetailsChange} />
      </FormGroup>
      <Button color="link" onClick={handleConfirm} disabled={!name}>Confirm</Button>
      <Button color="danger" size="sm" onClick={onCancel}>Cancel</Button>
    </Form>
  );
};

TaskForm.propTypes = {
  data: PropTypes.object,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export default TaskForm;
