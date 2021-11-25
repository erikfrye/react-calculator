import { ACTIONS } from "./reducer";

export default function DigitButton({ dispatch, digit} : {dispatch: any; digit: string}) {
    return <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
}