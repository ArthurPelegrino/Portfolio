import Image from "next/image"
import "./header.scss"

export function Header(){
    return(
        <div className="header">
            <div>
                <h1>Hello, I'm Arthur</h1>
                <h2>Software Engineer</h2>
            </div>
            <Image
            src="/me.jpeg"
            alt="Vercel Logo"
            className="dark:invert"
            width={325}
            height={277}
            priority
            />
        </div>
    )
}
