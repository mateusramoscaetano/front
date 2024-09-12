import { RadioGroupIndicator, RadioGroupItem } from "./radio-group";

interface IRadioInputProps {
  action: string;
  emoji: string;
  value: string;
}

export function RadioInput({ action, emoji, value }: IRadioInputProps) {
  return (
    <>
      <RadioGroupItem value={value}>
        <RadioGroupIndicator />
        <span className="text-zinc-300 text-sm font-medium leading-none">
          {action}
        </span>
        <span className="text-lg leading-none">{emoji}</span>
      </RadioGroupItem>
    </>
  );
}
