import { State } from "./App";

export function evaluate({currentOperand, previousOperand, operation}: State): string {
  const prev = parseFloat(previousOperand?.toString());
  const current = parseFloat(currentOperand?.toString());
  
  if (isNaN(prev) || isNaN(current)) return ""
  
  let computation: number;

  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      break;
  }

  return computation.toString();
}