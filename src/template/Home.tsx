// import UsingCallback from "../components/UsingCallBack";
import { useContext } from "react";
import UsingMemo from "../components/UsingMemo";
import { GlobalContext } from "../context/CreatingContext";
const Home = () => {
    const context = useContext(GlobalContext);
    const { state } = context;
    return (
        <div style={{
            width: "100wh",
            height: "auto",
            background: "#888",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <h1>{state.title}</h1>
            <p>{state.body}</p>
            {/* <UsingCallback /> */}
            <UsingMemo />
        </div>
    )
};

export default Home;