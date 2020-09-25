import { ButtonSize, ButtonType } from '../../theme/index';
import { useThemeState } from '../../theme/ThemeContext';

function Button({
  type = 'basic',
  size = 'sm',
  additionalStyles = '',
  children,
  onClick,
}: {
  type?: string;
  size?: string;
  children: React.ReactNode;
  additionalStyles?: string;
  onClick: (MouseEvent) => void;
}): JSX.Element {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const theme = useThemeState();
  const buttonType = ButtonType(theme)[type];
  const buttonSize = ButtonSize[size];

  const styles = `${buttonType} ${buttonSize} ${additionalStyles} p-2`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;