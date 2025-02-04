import ValuesType from '@/app/types/ValuesType';
import VariantType from '@/app/types/VariantType'
import React from 'react'

const Variant = ({ variant, setValues, values}: { variant: VariantType, setValues: (e: React.ChangeEvent<HTMLInputElement>) => void, values: ValuesType }) => {    

    return (
        <tr key={variant.code}>
            <td>{variant.code}</td>
            <td>{variant.desc}</td>
            <td>{`$${(Math.round(variant.cost * 100) / 100).toFixed(2)} / $${(Math.round(variant.retail * 100) / 100).toFixed(2)}`}</td>
            <td>{variant.size}</td>
            <td>
                <input className='border text-center' onChange={setValues} data-cost={variant.cost} type="number" name={`${variant.code}`} value={values[`${variant.code}`]?.quantity || ""}/>
            </td>
            <td>
                {(() => {
                    const subtotal = (Math.round((values[variant.code]?.subtotal || 0) * 100) / 100).toFixed(2);
                    return `$${subtotal}`;
                })()}
            </td>
        </tr>
    )
}

export default Variant