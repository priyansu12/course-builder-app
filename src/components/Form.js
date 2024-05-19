"use client"

import Link from "next/link"
import { store } from "@/utils/db"
import { useRef } from "react"
import { useRouter } from 'next/navigation'

export default function Form({entity, fieldName, title}) {

    const router = useRouter();
    const inputRef = useRef(null)

    function saveFormData(){
        store(entity, {
            name: inputRef.current.value
        })
        router.push('/')
    }

    return <main className="bg-[#8F8F8F] w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-4/12 p-5 rounded-lg shadow-md space-y-7">
            <div className="flex justify-between">
                <h3 className="font-semibold">{title}</h3>
                <Link href="/">
                    <img src="/icons/close.svg" alt="close-icon" />
                </Link>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#222222]">{fieldName}</label>
                <input ref={inputRef} className="outline outline-[1.5px] outline-[#EBEBEB] rounded-lg py-1.5 px-2.5" />
            </div>

            <div className="flex justify-end gap-4">
                <Link href="/" className="px-4 py-2 outline outline-[1.5px] outline-[#EBEBEB] rounded-md text-[#717171] font-medium">
                    Cancel
                </Link>
                <button onClick={saveFormData} className="px-4 py-2 rounded-md bg-[#008392] text-white font-medium">
                    Create
                </button>
            </div>
        </div>
    </main>
}