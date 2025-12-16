"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

export interface UserData {
  email: string;
  name: string;
}

export interface PaymentData {
  amount: number;
  currency: string;
  network?: string;
  walletAddress?: string;
  transactionId?: string;
}

interface PaymentContextType {
  userData: UserData;
  setUserData: (data: UserData) => void;
  paymentData: PaymentData;
  setPaymentData: (data: Partial<PaymentData>) => void;
  resetPayment: () => void;
}

const defaultPaymentData: PaymentData = {
  amount: 0,
  currency: "ETH",
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({ email: "", name: "" });
  const [paymentData, setPaymentDataState] = useState<PaymentData>(defaultPaymentData);

  const setPaymentData = useCallback((data: Partial<PaymentData>) => {
    setPaymentDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const resetPayment = useCallback(() => {
    setUserData({ email: "", name: "" });
    setPaymentDataState(defaultPaymentData);
  }, []);

  return (
    <PaymentContext.Provider value={{ userData, setUserData, paymentData, setPaymentData, resetPayment }}>
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