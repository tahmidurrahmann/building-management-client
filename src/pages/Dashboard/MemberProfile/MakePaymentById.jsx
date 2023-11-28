import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAuth from "../../../hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TOKEN);

const MakePaymentById = () => {

    const [price, setPrice] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const { payment } = useAuth();

    useEffect(()=>{
        setPrice(payment?.rent);
    },[payment?.rent])

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        const form = e.target;
        const code = form?.code?.value;
        if (code === "SELL100" && payment?.rent > 0) {
            const discount = payment?.rent * 0.1;
            const payablePrice = payment?.rent - discount;
            setPrice(payablePrice.toFixed(2));
            setDisabled(true);
            form.reset();
        }
        if (code === "SELL200" && payment?.rent > 0) {
            const discount = payment?.rent * 0.2;
            const payablePrice = payment?.rent - discount;
            setPrice(payablePrice.toFixed(2))
            setDisabled(true);
            form.reset();
        }
        if (code === "SELL300" && payment?.rent > 0) {
            const discount = payment?.rent * 0.3;
            const payablePrice = payment?.rent - discount;
            setPrice(payablePrice.toFixed(2))
            setDisabled(true);
            form.reset();
        }
        if (code === "SELL400" && payment?.rent > 0) {
            const discount = payment?.rent * 0.4;
            const payablePrice = payment?.rent - discount;
            setPrice(payablePrice.toFixed(2))
            setDisabled(true);
            form.reset();
        }
        if (code === "SELL500" && payment?.rent > 0) {
            const discount = payment?.rent * 0.5;
            const payablePrice = payment?.rent - discount;
            setPrice(payablePrice.toFixed(2))
            setDisabled(true);
            form.reset();
        }
        if (code === "SELL600" && payment?.rent > 0) {
            const discount = payment?.rent * 0.6;
            const payablePrice = payment?.rent - discount;
            setPrice(payablePrice.toFixed(2))
            setDisabled(true);
            form.reset();
        }
    }


    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-xl font-bold md:text-3xl pt-4 text-center md:pt-8">Make Payment</h1>
            <form onSubmit={handleApplyCoupon}>
                <div className="form-control pt-10 w-3/4 mx-auto lg:w-1/2">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Coupon Code</span>
                    </label>
                    <input type="text" name="code" placeholder="Give Coupon Code" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button disabled={disabled} className={`${disabled ? "bg-gray-100 w-3/4 lg:w-1/2 py-3 rounded mx-auto text-xl font-medium" : "py-3 hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e] active:bg-white active:text-[#0d243e] bg-[#0d243e] rounded-xl text-white font-bold w-3/4 mx-auto lg:w-1/2"}`}>APPLY COUPON CODE</button>
                </div>
            </form>
            <p className="text-2xl font-semibold text-center py-6 md:py-12">Payable Amount : {price} $</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default MakePaymentById;