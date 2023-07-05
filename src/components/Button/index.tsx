import { MouseEventHandler, memo } from "react";

const Button = memo(({ increaseValue, name }: { increaseValue: MouseEventHandler, name: string }) => {
    console.log("filho renderizou")
    return (
        <button
            onClick={increaseValue}
            style={{
                background: "red",
                width: "100px",
                height: "50px",
                color: "#fff",
                fontSize: "30px"
            }}
        >
            {name}
        </button>
    )
});

export default Button;