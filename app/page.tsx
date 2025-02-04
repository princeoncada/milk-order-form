"use client";

import Mobile from "./components/Mobile";
import Desktop from "./components/Desktop";
import form_data from "./data/form-data";
import { useState } from "react";
import Logo from "./components/Logo";

export default function Home() {
    const [values, setValues] = useState<{ [key: string]: { quantity: string, subtotal: number } }>({});
    const [total, setTotal] = useState(0);

    function handleSetValues(e: React.ChangeEvent<HTMLInputElement>) {
        let newQuantity = e.target.value.trim() === "" ? "0" : e.target.value; // Default to "0" when empty

        // Ensure the value is a non-negative integer
        if (parseInt(newQuantity) < 0) {
            newQuantity = "0"; // Prevent negative input
        }

        const cost = parseFloat(e.target.dataset.cost ?? "0");

        setValues(prevValues => {
            const updatedValues = {
                ...prevValues,
                [e.target.name]: {
                    quantity: newQuantity,
                    subtotal: parseInt(newQuantity) * cost || 0 // Prevent NaN
                }
            };

            // Calculate the new total from updatedValues
            let newTotal = 0;
            for (const key in updatedValues) {
                newTotal += updatedValues[key].subtotal;
            }
            setTotal(newTotal);

            return updatedValues;
        });
    }

    return (
        <section className="md:py-[48px]">
            <div className="max-w-[990px] mx-auto p-[8px]">
                <div className="text-[#161616]">
                    <div className="flex justify-center py-[36px]">
                        <Logo />
                    </div>
                    <Mobile form_data={form_data} setValues={handleSetValues} values={values} />
                    <Desktop form_data={form_data} setValues={handleSetValues} values={values} total={total} />
                    <div className="text-center mt-[12px] bg-slate-50 border p-4 block md:hidden">Total: ${(Math.round((total) * 100) / 100).toFixed(2)}</div>
                </div>
            </div>
        </section>
    );
}
