export default function Login() {
    return (
        <div className="h-screen">
        <h1>Log ind</h1>
            <form>
                <label>
                    <span>Brugernavn</span>
                    <input type="text" name="username" className="border w-full" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="password" className="border w-full" />
                </label>
            </form>
                <button>Log ind</button>
        
        </div>
    )
}