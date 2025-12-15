"use client";
import React, { createContext, useContext, useState } from "react";

interface PaymentContextType {
  amount: number;
  setAmount: (amount: number) => void;
  userData: {
    email: string;
    name: string;
  };
  setUserData: (data: { email: string; name: string }) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [amount, setAmount] = useState<number>(0);
  const [userData, setUserData] = useState<{
    email: string;
    name: string;
  }>({ email: "", name: "" });

  return (
    <PaymentContext.Provider
      value={{ amount, setAmount, userData, setUserData }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};