// Taget fra gennemgang af terminsprøve
import { cookies } from "next/headers";
// import Link from "next/link";

export default async function Kalender() {
    const cookieStore = await cookies()

    const token = cookieStore.get("dance_token")
    const uid = cookieStore.get("dance_uid")
    
	const response = await fetch(`http://localhost:4000/api/v1/users/${uid.value}`, {
		headers: {
			Authorization: `Bearer ${token.value}`
		}
	})
	const data = await response.json()


    return (
        <>
            <h1>Kalender</h1>
            <ul>
                {data.activities.map(item => (
                        <li key={item.createdAt} className="border-b-2 border-dashed">
                            <Link href={`/activity/${item.id}`}>
                                <p className="flex justify-between">
                                    <span>{item.weekday}</span>
                                    <span>{item.time}</span>
                                </p>
                                <h2>{item.name}</h2>
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    )
}