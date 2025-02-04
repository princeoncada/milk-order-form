import ValuesType from '@/app/types/ValuesType';
import VariantType from '@/app/types/VariantType'
import React from 'react'

const Variant = ({ variant, setValues, values }: { variant: VariantType, setValues: (e: React.ChangeEvent<HTMLInputElement>) => void, values: ValuesType }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-y-[16px] ">
                <div>
                    <div className="font-semibold">Item #</div>
                    <div>{variant.code}</div>
                </div>
                <div>
                    <div className="font-semibold">Description</div>
                    <div>{variant.desc}</div>
                </div>
                <div>
                    <div className="font-semibold">Cost / Retail</div>
                    <div>{`$${(Math.round(variant.cost * 100) / 100).toFixed(2)} / $${(Math.round(variant.retail * 100) / 100).toFixed(2)}`}</div>
                </div>
                <div>
                    <div className="font-semibold">Size</div>
                    <div>{variant.size}</div>
                </div>
                <div>
                    <div className="font-semibold">Quantity</div>
                    <div>
                        <input className='border text-center' onChange={setValues} data-cost={variant.cost} type="number" name={`${variant.code}`} value={values[`${variant.code}`]?.quantity || ""} />
                    </div>
                </div>
                <div>
                    <div className="font-semibold">Subtotal</div>
                    <div>{(() => {
                        const subtotal = (Math.round((values[variant.code]?.subtotal || 0) * 100) / 100).toFixed(2);
                        return `$${subtotal}`;
                    })()}</div>
                </div>
            </div>
            <hr className="bg-gray-400 w-full h-[2px]" />
        </>
    )
}

export default Variant