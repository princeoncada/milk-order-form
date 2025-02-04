import React from 'react'
import Product from './Product'
import ProductType from '@/app/types/ProductType'

const index = ({ form_data, setValues, values, total }: { form_data: ProductType[], setValues: any, values: any,total: number }) => {
    return (
        <section className="border-t-[1px] border-[#ccc] hidden md:flex">
            <table className="w-full">
                <thead className='bg-[#cfd0ca]'>
                    <tr>
                        <th>Item #</th>
                        <th>Description</th>
                        <th>Cost / Retail</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        form_data.map((product) => {
                            return (
                                <Product key={product.id} name={product.name} variants={product.variants} setValues={setValues} values={values}/>
                            )
                        })
                    }
                    <tr>
                        <td className='py-[12px] hidden md:block'></td>
                    </tr>
                    <tr>
                        <td colSpan={6} className="text-center mt-[12px] bg-slate-50 border p-4 hidden md:table-cell">Total: ${(Math.round((total) * 100) / 100).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default index