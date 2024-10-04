export default function Button({ className, text, startIcon, endIcon }) {
    return (
        <>
            <button className={`flex flex-row items-center ${className}`}>
                {startIcon ? (
                    <span>
                        {startIcon}
                    </span>
                ) : null}
                <p>{text}</p>
                {endIcon ? (
                    <span>
                        {endIcon}
                    </span>
                ) : null}
            </button>
        </>
    )
}