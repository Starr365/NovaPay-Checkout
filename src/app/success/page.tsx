"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CopyableText } from "../../components/CopyableText";

export default function SuccessPage() {
  const transactionId = "NC1234567";

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="flex items-center justify-center mb-15">
          <Image
            src="/NC BlackTrans BG.png"
            alt="Novacrust Logo"
            width={150}
            height={150}
          />
        </div>
        <div className="w-fit flex items-center justify-center mx-auto mb-6">
          <Image
            src="/CheckCircle.png"
            alt="Success Checkmark"
            width={67}
            height={67}
            className="text-white"
          />
        </div>

        <h4 className="text-2xl font-semibold text-black leading-normal">Your transaction is processing.</h4>
        <p className="text-neutral-600 mb-8">The recipient will receive it shortly. </p>
      </div>
      
      {/* Full width transaction container */}
      <div className="w-full max-w-md mx-auto px-4">
        <div className="bg-neutral-100 w-full px-5 py-3 rounded-lg mb-8">
          <CopyableText label="Transaction ID" text={transactionId} />
        </div>
      </div>

      <div className="max-w-md mx-auto text-center px-4 w-full">
        <Link
          href="/"
          className="block w-full bg-white text-black text-center font-small"
        >
          Go back to Home
        </Link>
      </div>
   </div>
  );
}