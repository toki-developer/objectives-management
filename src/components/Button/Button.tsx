import type { ButtonType } from "src/components/Button/type";
import { useButtonClass } from "src/components/Button/useButtonClass";

export const Button = (props: ButtonType) => {
  const { children, className, variant, loading, ...rest } = props;
  const classes = useButtonClass(className, variant, loading);
  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
};
