import React from 'react'
import VariantType from '@/app/types/VariantType'
import Variant from './Variant'
import ValuesType from '@/app/types/ValuesType'

const Product = ({ name, variants, setValues, values }: { name: string, variants: VariantType[], setValues: (e: React.ChangeEvent<HTMLInputElement>) => void, values: ValuesType }) => {
    return (
        <div>
            <div className="block">
                <h1 className="text-center text-white bg-black py-[8px]">
                    { name }
                </h1>
            </div>
            <div>
                <div className="p-[8px] border-t-[1px] border-b-[1px] border-[#ccc] gap-[12px] flex flex-col mt-[-1px]">
                    {
                        variants.map((variant) => {
                            return (
                                <Variant key={variant.code} variant={variant} setValues={setValues} values={values}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Product