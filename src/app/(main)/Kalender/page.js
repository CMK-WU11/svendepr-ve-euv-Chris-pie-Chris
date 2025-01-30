// Taget fra gennemgang af terminsprøve
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Kalender() {
    const cookieStore = await cookies()

    const token = cookieStore.get("dance_token")
    const uid = cookieStore.get("dance_uid")
    
	const studentResponse = await fetch(`http://localhost:4000/api/v1/users/${uid.value}`, {
		headers: {
			Authorization: `Bearer ${token.value}`
		}
	})

	const studentData = await studentResponse.json()




    return (
        <div className="h-screen bg-[#5E2E53]">
            <h1 className="text-l">Kalender</h1>
            <ul>
                {studentData.activities.map(item => (
                        <li key={item.createdAt} className="border-b-2">
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
        </div>
    )
}