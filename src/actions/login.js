// Kode taget fra gennemgang af terminsprøve
"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import z from "zod"

export default async function Login(formState, formData) {
    const [username] = formData.values()
    const [password] = formData.values()
    // const [] = formData.values()
    
    console.log("formData", username, password)

    const schema = z.object({
        username: z.string().min(1, { message: "Indtast venligst brugernavn"}),
        password: z.string().min(1, { message: "Indtast venligst password"})
    })

    const validated = schema.safeParse({ username, password })

	if (!validated.success) {
		const errors = validated.error.format()

		return {
			success: false,
			formData: {
				username,
				password
			},
			errors
		}
	}

    const response = await fetch("http://localhost:4000/auth/token", {
		signal: AbortSignal.timeout(30000),
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			username,
			password
		})
	})

	if (response.status === 401) {
		return {
			success: false,
			errors: ["Ugyldig brugernavn eller password"]
		}
	}

    	if (response.statusText === "OK") {
		// håndter token, gem i cookie
		const data = await response.json()
		const cookieStore = await cookies()

		const expires = new Date(data.validUntil)

		cookieStore.set("dance_uid", data.userId, { expires })
		cookieStore.set("dance_token", data.token, { expires })

		redirect("./Kalender")
		
	} else {
		console.error("Smut med dig!!", response.statusText)
		throw new Error("Auth error")
	}
}