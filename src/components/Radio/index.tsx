import React, {useRef} from 'react';
import styles from './index.module.scss';
import cn from 'classnames';


interface IProps {
    checked?: boolean;
    label?: string;
    className?: string;
    name: string;
    [key: string]: any;
}

const Radio:React.FC<IProps> = ({className, name, label, checked, ...rest}) => {
    const {current} =  useRef(Math.random());

    return (
        <div className={cn(styles.main, className)}>
            <input id={`radio-${current}`} className={styles.input} type="radio" name={name} checked={checked} {...rest}/>
            <label className={styles.label} htmlFor={`radio-${current}`}>
                {label}
            </label>
        </div>
    );
};

export default Radio;
