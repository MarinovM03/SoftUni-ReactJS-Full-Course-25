import { useParams, useSearchParams } from "react-router";

export default function City() {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(params);
    console.log(searchParams.get('orderBy'));
    
    // setTimeout(() => {
    //     setSearchParams({ page: 1 });
    // }, 2000);

    return (
        <>
            <h2>City Page</h2>

            <p>The name of the city is: {params.city}</p>
        </>
    );
}