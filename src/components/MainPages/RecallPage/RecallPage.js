import React from "react";
import "./style.css";
import LogoHeader from "./Header";
import DeckSelector from "./Decks/DeckSelector";
import FlashCards from "./FlashCards/FCardsRender";
import Footer from "./RecallPageFooter/Footer";

export default function RecallPage({selectedDeck, recallLevel, setChangePage}){
    const deckSelected = []
    DeckSelector(selectedDeck).forEach(function(e){
        deckSelected.push({...e, btn:refreshFooter})
    })
    
    const [qAnswered, setQAnswered] = React.useState(0);
    const [answersIcons, setAnswersIcons] = React.useState([]);
    const [resultText, setResultText] = React.useState("");
    const [resultTitle, setResultTitle] = React.useState("")
    const [emojiName, setEmojiName] = React.useState("")
    const size = deckSelected.length

    function refreshFooter(fcIcon, fcIconClass){
        setQAnswered(qAnswered + 1);
        setAnswersIcons([...answersIcons, {fcIcon:fcIcon, fcIconClass:fcIconClass}]);
    }

    return(
        <main className="recallPage">
            <LogoHeader />
            <ul>
                {deckSelected.map((flashcard, index) =>
                    <FlashCards index={index} question={flashcard.question} answer={flashcard.answer} refreshFooter={flashcard.btn} />
                )}
            </ul>
            <Footer size={size} qAnswered={qAnswered} answersIcons={answersIcons} recallLevel={recallLevel} setChangePage={setChangePage} />
        </main>
    )
}