const INTERGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand: string): string {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTERGER_FORMATTER.format(integer);

  return `${INTERGER_FORMATTER.format(integer)}.${decimal}`;
}