import * as types from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASK_LIST_BEGIN:
            return {
                ...state,
                isFetching: true,
                fetched: false,
                isDeleting: false,
                deleted: false,
                error: false,
                errorMessage: null,
            }
   
        case types.TASK_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetched: true,
                error: false,
                errorMessage: null,
                items: action.data,
            };

        case types.TASK_LIST_ERROR:
            return {
                ...state,
                isFetching: false,
                fetched: false,
                error: true,
                errorMessage: action.message,
            };
      
        case types.TASK_SELECT_BEGIN:
            return {
                ...state,
                isSelecting: true,
                selected: false,
                error: false,
                errorMessage: null,
            }
   
        case types.TASK_SELECT_SUCCESS:
            return {
                ...state,
                isSelecting: false,
                selected: true,
                error: false,
                errorMessage: null,
                selected: action.data,
            };

        case types.TASK_SELECT_ERROR:
            return {
                ...state,
                isSelecting: false,
                selected: false,
                error: true,
                errorMessage: action.message,
            };
          
        case types.TASK_CREATE_BEGIN:
            return {
                ...state,
                isAdding: true,
                added: false,
                error: false,
                errorMessage: null,
            }
   
        case types.TASK_CREATE_SUCCESS:
            return {
                ...state,
                isAdding: false,
                added: true,
                error: false,
                errorMessage: null,
                selected: action.data,
            };

        case types.TASK_CREATE_ERROR:
            return {
                ...state,
                isAdding: false,
                added: false,
                error: true,
                errorMessage: action.message,
            };
   
        case types.TASK_UPDATE_BEGIN:
            return {
                ...state,
                isUpdating: true,
                updated: false,
                error: false,
                errorMessage: null,
            }
        
        case types.TASK_UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                updated: true,
                error: false,
                errorMessage: null,
                selected: action.data,
            };

        case types.TASK_UPDATE_ERROR:
            return {
                ...state,
                isUpdating: false,
                updated: false,
                error: true,
                errorMessage: action.message,
            };
   
        case types.TASK_DELETE_BEGIN:
            return {
                ...state,
                isDeleting: true,
                deleted: false,
                error: false,
                errorMessage: null,
            }
        
        case types.TASK_DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                deleted: true,
                error: false,
                errorMessage: null,
                selected: action.data,
            };

        case types.TASK_DELETE_ERROR:
            return {
                ...state,
                isDeleting: false,
                deleted: false,
                error: true,
                errorMessage: action.message,
            };
      
        case types.TASK_RESET:
            return {
                ...initialState
            }

        default:
            return state;
    }
};

export default reducer;
