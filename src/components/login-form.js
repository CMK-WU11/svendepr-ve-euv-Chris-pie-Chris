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
        <h1 className="">Log ind</h1>
            <form action={formAction} className="flex flex-col justify-center h-screen">
                <div className="">
                    <label>
                        <span className="">Brugernavn</span>
                        <input type="text" name="username" className="border w-full" />
                    </label>
                    <span>{formState?.errors?.username?._errors}</span>
                </div>
                <div>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password" className="border w-full" />
                    </label>
                    <span>{formState?.errors?.password?._errors}</span>
                </div>
                <button type="submit" className={`text-black font-semibold w-full px-4 py-2 bg-[#5E2E53] w-48 h-10 text-white rounded-md`}>Log ind</button>
                <span>{formState?.errors}</span>
            </form>
        </div>
    )
}