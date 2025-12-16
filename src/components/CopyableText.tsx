"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyableTextProps {
  text: string;
  label?: string;
  className?: string;
  textClassName?: string;
  iconSize?: number;
}

export const CopyableText: React.FC<CopyableTextProps> = ({
  text,
  label,
  className = "",
  textClassName = "",
  iconSize = 16,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className={`flex justify-between items-center text-gray-700 ${className}`}>
      {label && <span className={`text-sm ${textClassName}`}>{label}</span>}
      <div className="flex items-center gap-2">
        <span className={`text-sm ${textClassName}`} aria-label={`${label ? label + ": " : ""}${text}`}>{text}</span>
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-neutral-200 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-950"
          title={copied ? "Copied!" : "Copy"}
          aria-label={copied ? `Copied "${text}" to clipboard` : `Copy "${text}" to clipboard`}
          aria-pressed={copied}
        >
          {copied ? (
            <Check size={iconSize} className="text-green-600" aria-hidden="true" />
          ) : (
            <Copy size={iconSize} className="text-gray-500" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
};;
