import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import usePayments from "../../../hooks/usePayments";
import Loading from "../../../Loading/Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price }) => {

    const [payments, isPending] = usePayments();
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price: price })
                .then(res => {
                    console.log(res?.data)
                    setClientSecret(res?.data?.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        })

        if (error) {
            console.log(error, "error");
            setError(error.message);
        }
        else {
            console.log(paymentMethod, "paymentMethod");
            setError("");
        }

        const { paymentIntent, isConfirm } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email,
                }
            }
        }
        )

        if (isConfirm) {
            console.log(error, "error occur");
        }
        else {
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id);
            }
            const postPaymentHistory = {
                price: price,
                email: user?.email,
                transactionId: paymentIntent.id,
                month: payments?.map(payment => payment?.month),
                floor: payments?.map(payment => payment?.floor),
                block: payments?.map(payment => payment?.block),
                apartment: payments?.map(payment => payment?.apartment),
            }
            const res = await axiosSecure.post("/show-payment-history", postPaymentHistory);
            if (res?.data?.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "You payment is successful!",
                    icon: "success"
                });
                navigate("/dashboard/paymentHistory");
            }
        }

    }
    if (isPending) {
        return <Loading></Loading>
    }
    console.log(payments);
    return (
        <div>
            <form className="px-4 lg:px-0" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="py-2 my-6 hover:bg-white hover:text-[#0d243e] hover:border hover:border-[#0d243e] active:bg-white active:text-[#0d243e] bg-[#0d243e] rounded-xl text-white font-bold px-6" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
            </form>
            {transactionId && <p className="text-green-600">Transaction id is :{transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;