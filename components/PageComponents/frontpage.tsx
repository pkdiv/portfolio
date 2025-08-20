import Content from "./content"
import Experience from "@/components/PageComponents/experience";

export default function FrontPage() {
    return (
        <div className="flex">
            <Content />
            <Experience />
        </div>
    )
}