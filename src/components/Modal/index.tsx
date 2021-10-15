import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import cn from 'classnames';


interface IProps {
    visible: boolean;
    containerClassName?: string;
    onOuterClick?: () => void;
}

const Modal:React.FC<IProps> = ({containerClassName, onOuterClick, visible, children}) => {

    useEffect(() => {

        const onEscClick = (event: KeyboardEvent) => {
            if (event.key === "Escape" && onOuterClick) {
                onOuterClick();
            }
        };

        document.addEventListener("keydown", onEscClick);

        return () => document.removeEventListener("keydown", onEscClick);
    }, [onOuterClick]);

    if (!visible) {
        return <></>;
    }

    return ReactDOM.createPortal(
        <div className={cn(styles.main, {[styles.visible]: visible})} onClick={onOuterClick}>
            <div
                onClick={e => e.stopPropagation()}
                className={cn(styles.container, containerClassName)}>
                {children}
            </div>
        </div>
        , document.body);
}

export default Modal;