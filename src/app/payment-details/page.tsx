"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CopyableText } from "../../components/CopyableText";
import { ArrowLeft, Info } from "lucide-react";

export default function PaymentDetails() {
  const router = useRouter();
  const walletAddress = "4LiV4YjbxsL6739MKghUd";

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-semibold text-gray-900">Send ETH to the address below</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-8 mb-10 flex flex-col items-center">
        <div className="w-fit px-3 py-2 items-center flex bg-emerald-100 rounded-full ">
          <div className="flex justify-center items-center text-teal-950 text-sm pr-2">
            <CopyableText text={walletAddress} className="bg-emerald-100" textClassName="text-teal-950 text-sm" />
          </div>
        </div>

        {/* Info Card */}
        <div className="w-full max-w-md mx-auto px-4 mt-6">
          <div className="bg-neutral-100 w-full px-5 py-4 rounded-lg mb-8">
            <div className="flex text-sm justify-between items-center text-gray-700 mb-3">
              <span>Amount to Send</span>
              <div className="flex items-center gap-2">
                <CopyableText text="100 ETH" className="bg-transparent" textClassName="text-sm" />
              </div>
            </div>
            <div className="flex text-sm justify-between items-center text-gray-700 mb-3">
              <span>Network</span>
              <div className="flex items-center gap-2">
                <span>ETH</span>
              </div>
            </div>
            <div className="flex text-sm justify-between items-center text-gray-700">
              <span>Wallet</span>
              <div className="flex items-center gap-2">
                <span>Other</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Info size={24} />
            Only send USDT to this address. Ensure the sender is on the CELO network otherwise you might lose your deposit
          </p>
        </div>

        <div className="mt-8 w-full">
          <button
            type="submit"
            className="w-full rounded-full bg-teal-950 hover:bg-teal-900 px-6 py-3 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-white"
            onClick={() => router.push('/success')}
          >
            I have sent it
          </button>
        </div>
      </div>
    </div>
  );
};
