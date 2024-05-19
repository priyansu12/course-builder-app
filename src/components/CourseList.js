"use client"

import { getData } from "@/utils/db"
import Image from "next/image"
import { useEffect, useState } from "react"
import ListItem from "./ListItem"


export default function CourseList() {

    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(getData())
    }, [])

    return <div>
    {
        items.length==0 ?
        <div className="flex flex-col justify-center items-center h-screen gap-2">
            <Image src='/images/no-courses.png' alt='image' height='200' width='200' />
            <label className="font-semibold">Nothing added here yet</label>
            <label className="text-sm">Click on the [+] Add button to add items to this course</label>
        </div>
        :
        <ul className="space-y-5">
            {
            items.map((item, index)=><ListItem key={index} data={item}/>)
            }
        </ul>
    }
    </div>
}