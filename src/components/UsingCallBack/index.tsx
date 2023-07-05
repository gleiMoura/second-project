import { useState, useCallback } from "react";
import Button from "../Button";

const UsingCallback = () => {
    const [counter, setCounter] = useState<number>(0);
    console.log("pai renderizou")

    const handleChangeCounter = useCallback(() => {
        setCounter((c) => c + 1);
    }, []);

    const handleClearCounter = useCallback(() => {
        setCounter(0)
    }, []);
    return (
        <div style={{
            background: '#fff',
            width: "1000px",
            height: "500px",
            marginTop: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
        }}>
            <header>
                <p style={{ fontSize: "50px" }}>contador: {counter}</p>
            </header>
            <section>
                <Button increaseValue={handleChangeCounter} name="Plus 1" />
                <Button increaseValue={handleClearCounter} name="Clear" />
            </section>
        </div>
    )
};

export default UsingCallback;