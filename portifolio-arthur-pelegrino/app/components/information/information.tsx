import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return(
        <div className="information">
            <SectionTitle text="Languages" />
            <div className="languages-info"> 
                <span>🇺🇸 EN - Fluent</span>
                <span>🇧🇷 PT-BR Native Speaker</span>
                <span>🇪🇸 EN - Advanced</span>
            </div>
            <SectionTitle text="Education" />
            <div className="educational-info">
                <span></span>
                <span></span>
            </div>
            <span></span>
        </div>
    )
}