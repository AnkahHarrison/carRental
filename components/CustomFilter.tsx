'use client'
import { useState, Fragment } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { customFilterProps } from "@/types";
const CustomFilter = ({ title, options }: customFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <Listbox>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span>Filter</span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
//Todo :23835