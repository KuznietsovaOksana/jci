import { Container } from "../Container";
import { Section } from "../Section";
import { NewsCard } from "../ui-kit/cards/NewsCard";
import { cards } from "./cards";



export const NewsSection = () => {

    return (
        <Section>
            <Container>
                <NewsCard cards={cards}/>
            </Container>   
        </Section>
    );
}