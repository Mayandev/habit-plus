import { Button, Image } from '@tarojs/components';
import './index.scss';

interface ButtonProps {
  text?: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  onClick: () => void;
}

function ThemeButton({ text = '', icon = '', onClick }: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      hoverClass="theme-btn-hover"
      className="theme-btn">
      <Image className="btn-icon" src={icon} />
      {text}
    </Button>
  );
}

export default ThemeButton;
