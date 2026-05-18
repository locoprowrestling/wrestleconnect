import { InputHTMLAttributes } from "react";

export const formFieldInputClassName = "onboarding-input";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  wrapperClassName?: string;
}

export function FormField({
  label,
  name,
  wrapperClassName,
  className,
  ...props
}: FormFieldProps) {
  const wrapperClasses = ["onboarding-field", wrapperClassName]
    .filter(Boolean)
    .join(" ");
  const inputClasses = ["onboarding-input", className].filter(Boolean).join(" ");

  return (
    <div className={wrapperClasses}>
      <label htmlFor={name} className="onboarding-label">
        {label}
      </label>
      <input id={name} name={name} className={inputClasses} {...props} />
    </div>
  );
}
