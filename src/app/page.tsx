"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SummaryCard } from "../components/SummaryCard";
import { FormField } from "../components/FormField";
import { Button } from "../components/Button";
import { usePayment } from "../context/PaymentContext";

export default function Home() {
  const router = useRouter();
  const { setAmount, setUserData } = usePayment();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    amount: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", name: "", amount: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.amount) {
      newErrors.amount = "Amount is required";
      valid = false;
    } else if (isNaN(parseFloat(formData.amount)) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData({ email: formData.email, name: formData.name });
      setAmount(parseFloat(formData.amount));
      router.push("/payment-details");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/NC BlackTrans BG.png"
            alt="Novacrust Logo"
            width={50}
            height={50}
            className="mb-4"
          />
          <h1 className="text-2xl font-bold text-black">Checkout</h1>
        </div>

        <SummaryCard
          title="Payment Summary"
          amount={`$${formData.amount || "0.00"}`}
          description="Total amount to be paid"
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
            error={errors.email}
          />

          <FormField
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
            error={errors.name}
          />

          <FormField
            label="Amount"
            type="text"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            name="amount"
            required
            error={errors.amount}
          />

          <Button
            type="submit"
            className="w-full"
            size="lg"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};
