import Article from "./Article.jsx";

export default function Body() {
    return (
        <section>
            <Article title="My First Title" content="Lorem Ipsum" />
            <Article 
                title="My Second Title" 
                content="Other content here" 
            />
        </section>
    );
};