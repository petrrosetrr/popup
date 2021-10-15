import React, {ChangeEvent, useEffect, useState} from 'react';
import Modal from '../Modal';
import styles from './index.module.scss';
import {ReactComponent as Close} from '../assets/close.svg';
import Button from '../Button';
import Input from '../Input';
import Radio from '../Radio';
import Checkbox from '../Checkbox';

interface IProps {
    visible: boolean;
    close: () => void;
}

const PopUp:React.FC<IProps> = ({visible, close}) => {
    const [salary, setSalary] = useState('');
    const [isError, setIsError] = useState(false);
    const [calculated, setCalculated] = useState<Array<string> | null>(null);

    const calculate = () => {
        const newCalc: Array<string> = [];
        if (!salary.trim()) {
            setIsError(true)
        }
        else {
            const sum = Math.floor(Number.parseInt(salary) * 12 * 0.13);
            let max = 260000;
            while (sum < max) {
                newCalc.push(sum.toString());
                max -= sum;
            }
            newCalc.push(max.toString());
            setCalculated(newCalc);
        }
    };

    return (
        <Modal
            visible={visible}
            onOuterClick={close}
            containerClassName={styles.main}>
            <header className={styles.header}>
                <h2 className={styles.title}>Налоговый вычет</h2>
                <button className={styles.close} onClick={close}><Close /></button>
            </header>
            <main>
                <p className={styles.text}>
                    Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
                </p>
                <Input
                    type={'number'}
                    errorText={"Поле обязательно для заполнения"}
                    showError={isError}
                    value={salary}
                    className={styles.salary}
                    label={"Ваша зарплата в месяц"}
                    placeholder={'Введите данные'}
                    onChange={e => setSalary(e.target.value)}/>
                <Button btnStyle={'text'} className={styles.calculate} onClick={calculate}>Рассчитать</Button>
                {
                    calculated &&
                    <div className={styles.checkboxes}>
                        <p className={styles.subtitle}>
                            Итого можете внести в качестве досрочных:
                        </p>
                        {
                            calculated && calculated.map((item, index) =>
                                <Checkbox className={styles.checkbox} label={`${item} рублей`} hint={`в ${index + 1} год`} defaultChecked/>
                            )
                        }
                    </div>
                }
                <div className={styles.radio}>
                    <p className={styles.subtitle}>Что уменьшаем?</p>
                    <div className={styles.container}>
                        <Radio name={'radio'} label={'Платеж'} defaultChecked/>
                        <Radio name={'radio'} label={'Срок'}/>
                    </div>
                </div>
            </main>
            <Button className={styles.add}>Добавить</Button>
        </Modal>
    )
}

export default PopUp;