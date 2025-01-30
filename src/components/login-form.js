"use client"
// Taget fra gennemgang af terminsprøve
import Login from "@/actions/login"
import { useActionState, useEffect } from "react"

export default function LoginForm() {
    const [formState, formAction] = useActionState(Login)

    useEffect(function () {
        console.log("formState", formState)
    }, [formState])


    return (
        <div className="h-screen bg-cover bg-center bg-[url('/splash-image.jpg')]">
            <form action={formAction} className="flex flex-col items-center h-screen">
                <div className="grid p-[10px] m-auto">
                    <label>
                        <h1 className="font-bold text-md">Log ind</h1>
                        <span className="flex flex-col"></span>
                        <input type="text" name="username" placeholder="brugernavn" className="w-[100%] h-12 p-2 text-base" />
                    </label>
                    <span>{formState?.errors?.username?._errors}</span>
                </div>
                <div className="grid">
                    <label>
                        <span className="flex flex-col"></span>
                        <input type="password" name="password" placeholder="password" className="w-[100%] h-12 p-2 text-base" />
                    </label>
                    <span>{formState?.errors?.password?._errors}</span>
                </div>
                <button type="submit" className={`text-black font-semibold w-full px-4 py-2 bg-[#5E2E53] w-[40%] h-10 text-white rounded-md`}>Log ind</button>
                <span>{formState?.errors}</span>
            </form>
        </div>
    )
}