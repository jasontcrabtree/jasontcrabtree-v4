import { Camera } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

/**
 * @description Control to switch between different colour themes (dark mode/light mode.
 */
const DarkModeControl = ({
    darkMode,
    handler,
}: {
    darkMode: boolean
    handler: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                handler(!darkMode)
            }}
            data-dark-mode={darkMode ? "dark-mode" : "light-mode"}
        >
            <Camera color="red" size={48} />
            <p className="text-2xl text-red-500">
                {darkMode} Darkmode is active: {darkMode}
            </p>
        </button>
    )
}

export default DarkModeControl
