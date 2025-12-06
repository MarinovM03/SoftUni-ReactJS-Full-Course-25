import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import UncontrolledLogin from "./components/uncontrolled-login/UncontrolledLogin";
import ControlledLogin from "./components/controlled-login/ControlledLogin";
import UnifiedControlledForm from "./components/unified-controlled-form/UnifiedControlledForm";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/uncontrolled-form" element={<UncontrolledLogin />} />
                <Route path="/controlled-form" element={<ControlledLogin />} />
                <Route path="/unified-controlled-form" element={<UnifiedControlledForm />} />
            </Routes>
        </>
    );
}

export default App
