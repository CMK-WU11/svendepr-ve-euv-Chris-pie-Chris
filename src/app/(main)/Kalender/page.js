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
            <h1 className="text-l text-white ml-6">Kalender</h1>
            <ul className="m-6">
                {studentData.activities.map(item => (
                        <li key={item.createdAt} className="bg-white w-[100%] p-2 h-24 rounded-md">
                            <Link href={`/activity/${item.id}`}>
                                <div className="flex flex-col justify-between">
                                    <h2 className="text-md">{item.name}</h2>
                                    <span className="text-base">{item.weekday} {item.time}</span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}