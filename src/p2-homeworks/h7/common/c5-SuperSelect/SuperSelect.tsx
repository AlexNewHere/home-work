import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any = options?.map((a, i) => <option key={i}>{a}</option>); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)

        onChangeOption &&  onChangeOption(e.currentTarget.value)
    }

    return (
        <select
            style={{width: '50px'}}
            onChange={onChangeCallback}
            {...restProps}>

            {mappedOptions}

        </select>
    )
}

export default SuperSelect
