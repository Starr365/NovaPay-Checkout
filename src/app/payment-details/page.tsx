"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/Button";
import { ArrowLeft, Lock } from "lucide-react";

export default function PaymentDetails() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen from-gray-50 to-gray-100">
      {/* Header */}

        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-gray-900">Send ETH to the address below</h1>
            </div>
          </div>
        </div>


      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div>
          <div className="bg-teal-200 rounded-lg ">

          </div>
        </div>
        {/* User Info Card */}
        <div className="w-full max-w-md mx-auto px-4">
          <div className="bg-neutral-100 w-full px-5 py-3 rounded-lg mb-8">
            <div className="flex justify-between items-center text-gray-700">
              <span className="font-sm">Transaction ID</span>
              <div className="flex items-center gap-2">
                <span className="font-sm">100ETH</span>

              </div>
            </div>
            <div className="flex justify-between items-center text-gray-700">
              <span className="font-sm">Transaction ID</span>
              <div className="flex items-center gap-2">
                <span className="font-sm">100ETH</span>

              </div>
            </div>
            <div className="flex justify-between items-center text-gray-700">
              <span className="font-sm">Transaction ID</span>
              <div className="flex items-center gap-2">
                <span className="font-sm">100ETH</span>

              </div>
            </div>
          </div>
        </div>

        

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 flex items-left gap-1">
            <Lock size={12} />
            Only send USDT to this address. Ensure the sender is on the CELO network otherwise you might lose your deposit
          </p>
        </div>

        <button>
          <Button variant="primary" className="w-full mt-6">
            I have sent it
          </Button>
        </button>
      </div>
    </div>
  );
};
