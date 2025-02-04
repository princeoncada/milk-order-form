import Variant from './VariantType'

export default interface ProductType {
    id: string
    name: string
    variants: Variant[]
}