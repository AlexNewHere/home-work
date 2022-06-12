import React, {useCallback, useEffect, useState, useRef} from 'react';
import styles from './rangeSlider.module.css';

type OnChangeType = {
    min: number;
    max: number;
};

type RangeType = {
    min: number;
    max: number;
    onChange: ({min, max}: OnChangeType) => void;
    minVal: number;
    setMinVal: (val: number) => void;
};

export const DoubleRangeSlider: React.FC<RangeType> = ({min,
                                                           max,
                                                           minVal,
                                                           setMinVal,
                                                           onChange}) => {
    const [maxVal, setMaxVal] = useState(max);
    const range = useRef<HTMLInputElement>(null);

    // Convert to %
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);
    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({min: minVal, max: maxVal});
    }, [minVal, maxVal, onChange]);

    useEffect(() => {
        minVal > maxVal && onChange({min: maxVal, max: maxVal})
    }, [minVal])

    return (
        <div className={`${styles.container}`}>
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(event.currentTarget.valueAsNumber, maxVal);
                    setMinVal(value);
                }}
                className={`${styles.thumb} ${styles.thumb__left}`}
                style={{zIndex: minVal > max - 100 ? '5' : ''}}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(event.currentTarget.valueAsNumber, minVal);
                    setMaxVal(value);
                }}
                className={`${styles.thumb} ${styles.thumb__right}`}
            />

            <div className={`${styles.slider}`}>
                <div className={`${styles.slider__track}`}/>
                <div ref={range} className={`${styles.slider__range}`}/>
                <div className={`${styles.slider__left_value}`}>{minVal}</div>
                <div className={`${styles.slider__right_value}`}>{maxVal}</div>
            </div>

        </div>
    );
};



