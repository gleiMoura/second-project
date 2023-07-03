import { MouseEventHandler, useState } from "react";

const Button = ({ increaseValue, name }: { increaseValue: MouseEventHandler, name: string }) => {
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
}

const Home = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleChangeCounter = () => {
        setCounter(counter + 1);
    };

    const handleClearCounter = () => {
        setCounter(0)
    }
    return (
        <div style={{
            width: "100wh",
            height: "100vh",
            background: "#888",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <div style={{
                background: '#fff',
                width: "1000px",
                height: "500px",
                marginTop: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <header>
                    <p style={{ fontSize: "50px" }}>contador: {counter}</p>
                </header>
                <section>
                    <Button increaseValue={handleChangeCounter} name="Plus 1" />
                    <Button increaseValue={handleClearCounter} name="Clear" />
                </section>
            </div>
        </div>
    )
};

export default Home;