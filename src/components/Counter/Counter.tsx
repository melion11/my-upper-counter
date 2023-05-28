import React, {FC, useState} from 'react';
import '../../App.css';
import s from './Counter.module.css'
import {Display} from './Display';
import {Button} from '../Button/Button';
import {Settings} from './Settings/Settings';

export type CounterPropsType = {
    addCount: () => void
    resetCount: () => void
    counter: number
    minValue: number,
    maxValue: number
    settingsChanged: boolean
    error: string
    getMaxValue: (value: number) => void
    getMinValue: (value: number) => void
    setCounter: (counter: number) => void
    setSettingsChanged: (status: boolean)=>void
}

export const Counter: FC<CounterPropsType> = (props) => {
    const {counter, addCount, resetCount, minValue, maxValue, settingsChanged, error,getMaxValue,getMinValue,
        setCounter, setSettingsChanged,
        ...restProps} = props

    const [settingsView, setSettingsView] = useState(false)

    const disabledAddButton = counter >= maxValue || settingsChanged
    const disabledResetButton = counter <= minValue || settingsChanged


    const ViewModeSettingsHandler = () => {
        setSettingsView(true)
    }

    return (
        <div className='wrapper'>
                {settingsView ? (
                    <Settings
                        getMinValue={getMinValue}
                        getMaxValue={getMaxValue}
                        minValue={minValue}
                        maxValue={maxValue}
                        counter={counter}
                        settingsChanged={settingsChanged}
                        setCounter={setCounter}
                        setSettingsChanged={setSettingsChanged}
                        error={error}
                        setSettingsView={setSettingsView}
                    />
                ) : (
                    <>
                        <Display maxValue={maxValue} counter={counter} />
                        <div className={s.buttonsWrap}>
                            <Button className={s.button} disabled={disabledAddButton} name={'inc'} callBack={addCount} />
                            <Button className={s.button} disabled={disabledResetButton} name={'reset'} callBack={resetCount} />
                            <Button className={s.button} name={'set'} callBack={ViewModeSettingsHandler} />
                        </div>
                    </>
                )}
            </div>
    );
};
