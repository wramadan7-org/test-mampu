"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function Dropdown({
  options,
  value,
  placeholder = "Select option",
  onChange,
}: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? placeholder;

  return (
    <div ref={dropdownRef} className="relative w-full min-w-32 sm:w-56">
      <button
        type="button"
        className="flex items-center justify-between w-full rounded-lg border border-neutral-400 bg-neutral-950 px-3 py-2 text-sm hover:bg-neutral-900 transition-colors"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-[110%] z-50 w-full overflow-hidden rounded-lg border border-neutral-400 bg-neutral-950 shadow-lg">
          <ul className="flex flex-col">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-neutral-900 transition-colors ${
                    value === option.value ? "bg-neutral-900" : ""
                  }`}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <span className="truncate">{option.label}</span>
                  {value === option.value && <Check size={14} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
