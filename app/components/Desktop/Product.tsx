import VariantType from '@/app/types/VariantType'
import Variant from './Variant';

const Product = ({ name, variants, setValues, values }: { name: string, variants: VariantType[], setValues: any, values: any }) => {
    return (
        <>
            <tr>
                <td colSpan={6} className="text-center text-white bg-[#241c24] font-medium py-[8px]">{name}</td>
            </tr>
            {
                variants.map((variant) => <Variant key={variant.code} variant={variant} setValues={setValues} values={values}/>)
            }
        </>
    )
}

export default Product