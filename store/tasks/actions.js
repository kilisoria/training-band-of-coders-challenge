import * as types from './actionTypes';

export const tasksRequest = () => {
  return {
    type: types.TASK_LIST_BEGIN,
  };
};

export const tasksSuccess = data => {
  return {
    type: types.TASK_LIST_SUCCESS,
    data,
  };
};

export const tasksError = message => {
  return {
    type: types.TASK_LIST_ERROR,
    message,  };
};

export const taskRequest = () => {
  return {
    type: types.TASK_SELECT_BEGIN,
  };
};

export const taskSuccess = data => {
  return {
    type: types.TASK_SELECT_SUCCESS,
    data,
  };
};

export const taskError = message => {
  return {
    type: types.TASK_SELECT_ERROR,
    message,  };
};

export const taskCreateRequest = () => {
  return {
    type: types.TASK_CREATE_BEGIN,
  };
};

export const taskCreateSuccess = data => {
  return {
    type: types.TASK_CREATE_SUCCESS,
    data,
  };
};

export const taskCreateError = message => {
  return {
    type: types.TASK_CREATE_ERROR,
    message,
  };
};

export const taskDeleteRequest = () => {
  return {
    type: types.TASK_DELETE_BEGIN,
  };
};

export const taskDeleteSuccess = data => {
  return {
    type: types.TASK_DELETE_SUCCESS,
    data,
  };
};

export const taskDeleteError = message => {
  return {
    type: types.TASK_DELETE_ERROR,
    message,
  };
};


export const taskUpdateRequest = () => {
  return {
    type: types.TASK_UPDATE_BEGIN,
  };
};

export const taskUpdateSuccess = data => {
  return {
    type: types.TASK_UPDATE_SUCCESS,
    data,
  };
};

export const taskUpdateError = message => {
  return {
    type: types.TASK_UPDATE_ERROR,
    message,
  };
};


export const taskReset = () => {
  return {
    type: types.TASK_RESET,
  };
};

export const getTasks = () => {  
  return async (dispatch) => {
    dispatch(tasksRequest());

    try {
      const res = await fetch(`${process.env.API_HOST}/tasks`);
      const json = await res.json();

      dispatch(tasksSuccess(json));
    } catch (err) {
      dispatch(tasksError(err.message));
    }
  };
};

export const getTask = id => {  
  return async (dispatch) => {
    dispatch(taskRequest());

    try {
      const res = await fetch(`${process.env.API_HOST}/tasks?id=${id}`);
      const json = await res.json();

      dispatch(taskSuccess(json));
    } catch (err) {
      dispatch(taskError(err.message));
    }
  };
};

export const createTask = (task) => {  
  return async (dispatch) => {
    dispatch(taskCreateRequest());

    try {
      const res = await fetch(`${process.env.API_HOST}/tasks`, { method: "POST", body:  JSON.stringify(task) });
      const json = await res.json();
      
      dispatch(taskCreateSuccess(json));
    } catch (err) {
      dispatch(taskCreateError(err.message));
    }
  };
};

export const updateTask = (id, task) => {  
  return async (dispatch) => {
    dispatch(taskUpdateRequest());

    try {
      const res = await fetch(`${process.env.API_HOST}/tasks?id=${id}`, { method: "PUT", body:  JSON.stringify(task) });
      const json = await res.json();
      
      dispatch(taskUpdateSuccess(json));
    } catch (err) {
      dispatch(taskUpdateError(err.message));
    }
  };
};

export const deleteTask = id => {
    return async (dispatch) => {
    dispatch(taskDeleteRequest());

    try {
      const res = await fetch(`${process.env.API_HOST}/tasks?id=${id}`, { method: "DELETE"});
      const json = await res.json();
      
      dispatch(taskDeleteSuccess(json));
    } catch (err) {
      dispatch(taskDeleteError(err.message));
    }
  };
}

export const resetTask = () => {
    return async (dispatch) => {
    dispatch(taskReset());
  };
}