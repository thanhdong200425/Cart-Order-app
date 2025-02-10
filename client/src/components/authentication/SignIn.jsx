import { Container,TextField } from "@mui/material";

export default function SignIn() {
    return <Container maxWidth="sm">
            <h4>Sign in page</h4>
            <TextField name="email" type="email" label="Email"/>
    </Container>
}