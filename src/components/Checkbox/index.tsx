import React, {MouseEventHandler, useRef} from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface IProps {
    label?: string;
    hint?: string;
    checked?: boolean;
    className?: string;
    onClick?: MouseEventHandler;
    [key: string]: any;
}

const Checkbox:React.FC<IProps> = ({onClick, className, checked, label, hint, ...rest}) => {
    const {current} = useRef(Math.random());
    return (
        <div className={cn(styles.main, className)}>
            <input className={styles.input} type="checkbox" onClick={onClick} checked={checked} id={`checkbox-${current}`} {...rest}/>
            <label className={styles.label} htmlFor={`checkbox-${current}`}>
                {label} <span className={styles.hint}>{hint}</span>
            </label>
        </div>
    )
}

export default Checkbox;