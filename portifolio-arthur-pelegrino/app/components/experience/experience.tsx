import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience() {
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <div className="experience-time">
                <div className="experience-language">
                    <Image
                        src="/react.png"
                        alt="React Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span> 1 years </span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/ts.png"
                        alt="Type Script Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                        <span> 1 year </span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/js.png"
                        alt="Java Script Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span> 2 years </span>
                        </div>
                    </div>
                </div>
                <div className="experience-language">
                    <Image
                        src="/java.png"
                        alt="Java Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span> 1 year </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}