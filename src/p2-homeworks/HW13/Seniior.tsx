import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {getApi} from './instanceAPI';

export const Request = () => {

    const [info, setInfo] = useState<string | null>(null)
    const [checked, setChecked] = useState<boolean>(false)

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const getPostClicked = async () => {
        try {
            let data = await getApi(checked)
            setInfo(data.data.info)
        } catch (error: any) {
            (error) && setInfo(error.response.data.info)
        }
    }

    return (
        <div>
            <SuperCheckbox
                checked={checked}
                onChange={onChangeChecked}
            >
                {checked ? 'true' : 'false'}
            </SuperCheckbox>
            <SuperButton onClick={getPostClicked}>
                Тык
            </SuperButton>
            <span>{info}</span>

        </div>
    );
};
