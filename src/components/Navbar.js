"use client"
import { useState } from "react"
import Link from "next/link"



export default function Navbar() {

    
    const [optionsVisble, setOptionsVisible] = useState(false)
    

    return <nav className="flex py-7 px-16 justify-between">
        <h1 className="font-semibold">Course builder</h1>
        <button onClick={()=>{
            setOptionsVisible(!optionsVisble)
        }} className="bg-[#AF273E] relative text-white px-5 py-2 rounded-md flex items-center gap-2">
            <img src="/icons/add.svg" alt="add-icon" />
            <label className="cursor-pointer">Add</label>
            <img src="/icons/down-arrow.svg" alt="add-icon" />
            {
                optionsVisble &&
            <ul className="absolute bottom-[-150px] py-2  bg-white rounded-lg right-0 text-[#717171] shadow-lg w-[200%]">
                <Link href="/create-module" className="flex gap-2 p-2 px-4 hover:bg-[#F2F2F2] hover:text-black cursor-pointer">
                    <img src="/icons/create-module.svg" alt="create-module-icon"/>
                    <label className="cursor-pointer">Create Module</label>
                </Link>
                <Link href="/add-link" className="flex gap-2 p-2 px-4 hover:bg-[#F2F2F2] hover:text-black cursor-pointer">
                    <img src="/icons/add-link.svg" alt="create-module-icon"/>
                    <label className="cursor-pointer">Add a link</label>
                </Link>
                <li className="flex gap-2 p-2 px-4 hover:bg-[#F2F2F2] hover:text-black cursor-pointer">
                    <img src="/icons/upload.svg" alt="create-module-icon"/>
                    <label className="cursor-pointer">Upload</label>
                </li>
            </ul>
            }
        </button>
    </nav>
}