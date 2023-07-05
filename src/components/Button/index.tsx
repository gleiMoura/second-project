import { MouseEventHandler, memo, FC } from "react";

interface ButtonProps {
    increaseValue: MouseEventHandler;
    name: string
}

const Button: FC<ButtonProps> = memo(({ increaseValue, name }) => {
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