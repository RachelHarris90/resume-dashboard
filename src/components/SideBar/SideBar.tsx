import { Navigation } from "../Navigation/Navigation"
import rachelProfilePicture from "./rachelProfilePicture.jpg"

export const SideBar = () => {
    return (
        <div>
            <img src={rachelProfilePicture} className="rounded-full w-32" />
            <h1 className="text-2xl">Rachel Harris</h1>
            <Navigation />
        </div>
    )
}