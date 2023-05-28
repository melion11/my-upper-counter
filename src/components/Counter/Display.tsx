import React, {FC} from 'react';
import s from './Counter.module.css';


export type DisplayType = {
    counter:number
    maxValue: number
}

export const Display: FC<DisplayType> = ({counter,maxValue}) => {
    return (

            <div className={`${s.counterItem} ${counter >= maxValue ? s.counterRed : ''}`}>{counter}</div>

    );
};

