import styles from './index.module.scss';
import React, {ChangeEvent} from 'react';
import cn from 'classnames';

interface IProps {
    type?: 'text' | 'number' | string;
    errorText?: string;
    showError?: boolean;
    className?: string;
    value?: string;
    label?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
}

const Input:React.FC<IProps> = ({type = "text", onChange, value, label, placeholder, className, showError, errorText}) => {
    return (
        <label className={cn(styles.main, className)}>
            {label}
            <input
                className={cn(styles.input, {[styles.error]: showError})}
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder} />
            {
                <div className={cn(styles.errorText, {[styles.error]: showError})}>{errorText}</div>
            }
        </label>
    )
};

export default Input;