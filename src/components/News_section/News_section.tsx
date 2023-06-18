import { NewsCard } from "../ui-kit/cards/NewsCard";
import { cards } from "./cards";



export const NewsSection = () => {

    return (
        <>
            <NewsCard cards={cards}/>
        </>
    );
}