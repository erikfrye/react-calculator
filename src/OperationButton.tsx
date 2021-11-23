import { ACTIONS } from "./reducer";

export default function OperationButton({ dispatch, operation}: {dispatch: object, operation: string}): string {
    return <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
}