import React from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

interface IButtonProps {
    disabled?: boolean;
    className?: string;
    btnStyle?: 'text' | 'outline' | 'normal' | 'rounded';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    [key: string]: any;
}

const Button:React.FC<IButtonProps> = ({btnStyle = 'normal', children, onClick, className, disabled = false, ...rest}) => {

    return (
        <button
            {...rest}
            disabled={disabled}
            className={cn(styles.main, styles[btnStyle], className)}
            onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;