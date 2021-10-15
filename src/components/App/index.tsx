import React, {useState} from 'react';
import styles from './index.module.scss';
import Button from '../Button';
import PopUp from '../PopUp';

function App() {
    const [popupVisible, setPopupVisible] = useState(false);

    return (
        <div className={styles.main}>
            <Button
                btnStyle={'outline'}
                className={styles.button}
                onClick={() => setPopupVisible(p => !p)}>
                Налоговый вычет
            </Button>
            <PopUp visible={popupVisible} close={() => setPopupVisible(false)} />
        </div>
    );
}

export default App;
