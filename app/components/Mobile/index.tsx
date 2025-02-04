import Product from './Product'
import ProductType from '@/app/types/ProductType'

const index = ({ form_data, setValues, values }: { form_data: ProductType[], setValues: any, values: any }) => {
    return (
        <section className="border-t-[1px] border-[#ccc] py-[24px] flex flex-col gap-[32px] md:hidden">
            {
                form_data.map((product) => {
                    return (
                        <Product key={product.id} name={product.name} variants={product.variants} setValues={setValues} values={values}/>
                    )
                })
            }
        </section>
    )
}

export default index