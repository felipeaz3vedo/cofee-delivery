import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typography";
import { InputStyleContainer, InputStyled, InputWraper, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

// export const Input = ({ ...props }: InputProps) => {
//   return <InputStyleContainer {...props} />;
// };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => (
    <InputWraper className={className}>
      <InputStyleContainer hasError={!!error}>
        <InputStyled {...props} ref={ref} />
        {rightText && <RightText>{rightText}</RightText>}
      </InputStyleContainer>
      {error && <RegularText size="s">{error}</RegularText>}
    </InputWraper>
  )
);
