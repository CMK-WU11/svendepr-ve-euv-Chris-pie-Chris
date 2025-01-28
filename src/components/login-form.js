"use client"
// Taget fra gennemgang af terminsprøve
import Login from "@/actions/login"
import { useActionState, useEffect } from "react"

export default function LoginForm() {
    const [formState, formAction] = useActionState(Login)

    useEffect(function () {
        console.log("Der er en fejl", formState)
    }, [formState])


    return (
        <div className="h-screen">
        <h1>Log ind</h1>
            <form action={formAction}>
                <div>
                    <label>
                        <span>Brugernavn</span>
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
                <button type="submit" className={`text-black font-semibold w-full px-4 py-2`}>Log ind</button>
                <span>{formState?.errors}</span>
            </form>
        </div>
    )
}