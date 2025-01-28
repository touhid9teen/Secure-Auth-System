interface LabelProps {
  labelText: string;
  htmlFor?: string;
  customClass?: string;
}

const Label: React.FC<LabelProps> = ({ labelText, htmlFor = '', customClass = '' }: LabelProps) => {
  return (
    <label className={`inline-block text-base font-medium text-deep-blue ${customClass}`} htmlFor={htmlFor}>
      {labelText}
    </label>
  );
};

export default Label;
