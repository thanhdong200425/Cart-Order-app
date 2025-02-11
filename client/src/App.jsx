import "./assets/css/App.css";
import SignIn from "./components/authentication/SignIn";

export default function App() {
    return (
        <>
            <div id="container">
                <SignIn />
            </div>
            <div id="blur-background"></div>
        </>
    );
}
