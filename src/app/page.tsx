"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [payFrom, setPayFrom] = useState("");
  const [payTo, setPayTo] = useState("");

  interface Currency {
    code: string;
    name: string;
    icon: string;
  }

  const currencies: Currency[] = [
    { code: "ETH", name: "Ethereum", icon: "/eth-icon.svg" },
    { code: "CELO", name: "Celo", icon: "/celo-icon.svg" },
    { code: "TON", name: "TON", icon: "/ton-icon.svg" },
    { code: "BNB", name: "BNB", icon: "/bnb-icon.svg" },
  ];

  const handleCurrencySelect = (currency: Currency) => {
    setSelectedCurrency(currency.code);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="w-full max-w-md mx-auto">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Crypto To Cash Checkout</h1>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-4xl p-4 space-y-2">
            <label htmlFor="pay-amount" className="block text-sm font-medium text-gray-700">You pay</label>
            <div className="relative">
              <div className="flex items-center w-full gap-2 px-3 py-3 bg-white">
                <input
                  id="pay-amount"
                  type="number"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="flex-1 min-w-0 outline-none text-lg"
                  aria-label="Amount to pay in cryptocurrency"
                />
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 shrink-0 border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50 transition-colors"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                  aria-label={`Select currency. Currently selected: ${selectedCurrency}`}
                >
                  <Image
                    src={currencies.find(c => c.code === selectedCurrency)?.icon || "/eth-icon.svg"}
                    alt={selectedCurrency}
                    width={24}
                    height={24}
                  />
                  <span className="text-lg font-medium">{selectedCurrency}</span>
                  <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-full max-h-56 overflow-auto" role="listbox">
                  {currencies.map((currency) => (
                    <button
                      type="button"
                      key={currency.code}
                      onClick={() => handleCurrencySelect(currency)}
                      className="w-full px-3 py-2 flex items-center gap-3 hover:bg-gray-50 transition-colors text-sm"
                      role="option"
                      aria-selected={currency.code === selectedCurrency}
                    >
                      <Image
                        src={currency.icon}
                        alt={currency.name}
                        width={24}
                        height={24}
                      />
                      <span className="font-medium">{currency.name}</span>
                      <span className="ml-auto text-gray-500">{currency.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="border border-gray-200 rounded-4xl p-4 space-y-2">
            <label htmlFor="receive-amount" className="block text-sm font-medium text-gray-700">You receive</label>
            <div className="relative">
              <div className="flex items-center w-full gap-2 px-3 py-3 bg-white">
                <input
                  id="receive-amount"
                  type="number"
                  inputMode="decimal"
                  value={amount}
                  disabled
                  placeholder="0.00"
                  className="flex-1 min-w-0 outline-none text-lg"
                  aria-label="Amount you will receive"
                />
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 shrink-0 border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-50 transition-colors"
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                  aria-label={`Select currency. Currently selected: ${selectedCurrency}`}
                >
                  <Image
                    src={currencies.find(c => c.code === selectedCurrency)?.icon || "/eth-icon.svg"}
                    alt={selectedCurrency}
                    width={24}
                    height={24}
                  />
                  <span className="text-lg font-medium">{selectedCurrency}</span>
                  <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>


          <div className="space-y-2">
            <label htmlFor="pay-from" className="block text-sm font-medium text-gray-700">Pay from</label>
            <div className="relative">
              <select
                id="pay-from"
                value={payFrom}
                onChange={(e) => setPayFrom(e.target.value)}
                className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-full bg-white"
              >
                <option value="" disabled>Select an option</option>
                <option>MetaMask</option>
                <option>Coinbase Wallet</option>
                <option>Ledger</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="pay-to" className="block text-sm font-medium text-gray-700">Pay to</label>
            <div className="relative">
              <select
                id="pay-to"
                value={payTo}
                onChange={(e) => setPayTo(e.target.value)}
                className="w-full appearance-none px-4 py-3 border border-gray-300 rounded-full bg-white"
              >
                <option value="" disabled>Select an option</option>
                <option>Bank account</option>
                <option>Payout provider</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <Button
            type="button"
            className="w-full"
            size="lg"
            onClick={() => router.push("/payment-details")}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
