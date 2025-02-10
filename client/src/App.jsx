import './assets/css/App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from "@mui/material/Container";
import SignIn from './components/authentication/SignIn';



export default function App() {
    return <Container maxWidth="sm">
      <SignIn />
    </Container>
}

