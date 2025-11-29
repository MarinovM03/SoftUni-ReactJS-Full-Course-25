import { useParams } from "react-router";

export default function About() {
    const params = useParams();
    console.log(params);

    return (
        <h2>About Page</h2>
    );
}