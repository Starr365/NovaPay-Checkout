"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormField } from "../../components/FormField";
import { Button } from "../../components/Button";
import { SummaryCard } from "../../components/SummaryCard";
import { usePayment } from "../../context/PaymentContext";

export default function PaymentDetails() {
  const router = useRouter();
  const { amount, userData } = usePayment();
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { cardNumber: "", expiryDate: "", cvv: "" };

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card number is required";
      valid = false;
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s+/g, ""))) {
      newErrors.cardNumber = "Please enter a valid card number";
      valid = false;
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required";
      valid = false;
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY)";
      valid = false;
    }

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required";
      valid = false;
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "Please enter a valid CVV";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setError("");

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Payment submitted:", formData);
        router.push("/success");
      } catch (err) {
        setError("Payment failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="w-8 h-8 bg-black rounded-full mb-4"></div>
          <h1 className="text-2xl font-bold text-black">Payment Details</h1>
        </div>

        <SummaryCard
          title="Payment Summary"
          amount={`$${amount.toFixed(2)}`}
          description="Total amount to be paid"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Card Number"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            name="cardNumber"
            required
            error={errors.cardNumber}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Expiry Date"
              type="text"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              name="expiryDate"
              required
              error={errors.expiryDate}
            />

            <FormField
              label="CVV"
              type="text"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              name="cvv"
              required
              error={errors.cvv}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={handleBack}
              variant="secondary"
              className="flex-1"
            >
              Back
            </Button>

            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};