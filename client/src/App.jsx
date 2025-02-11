import { Navigate, Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";

export default function App() {
    return (
        <>
            <div id="container">
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    {/* Default route */}
                    <Route path="*" element={<Navigate to={"/sign-in"} />} />
                </Routes>
            </div>
            <div id="blur-background"></div>
        </>
    );
}
