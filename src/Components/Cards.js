import { useState, useRef } from "react"
import Card from './Card'

export default function Cards() {

    const [cards, setCards] = useState([
        { id: 0, name: 'Rat1', status: '', img: '/Images/Rat01.jpg' },
        { id: 0, name: 'Rat1', status: '', img: '/Images/Rat01.jpg' },
        { id: 1, name: 'Rat2', status: '', img: '/Images/Rat02.jpg' },
        { id: 1, name: 'Rat2', status: '', img: '/Images/Rat02.jpg' },
        { id: 2, name: 'Rat3', status: '', img: '/Images/Rat03.jpg' },
        { id: 2, name: 'Rat3', status: '', img: '/Images/Rat03.jpg' },
        { id: 3, name: 'Rat4', status: '', img: '/Images/Rat04.jpg' },
        { id: 3, name: 'Rat4', status: '', img: '/Images/Rat04.jpg' },
        { id: 4, name: 'Rat5', status: '', img: '/Images/Rat05.jpg' },
        { id: 4, name: 'Rat5', status: '', img: '/Images/Rat05.jpg' },
        { id: 5, name: 'Rat6', status: '', img: '/Images/Rat06.jpg' },
        { id: 5, name: 'Rat6', status: '', img: '/Images/Rat06.jpg' },
        { id: 6, name: 'Rat7', status: '', img: '/Images/Rat07.jpg' },
        { id: 6, name: 'Rat7', status: '', img: '/Images/Rat07.jpg' },
        { id: 7, name: 'Rat8', status: '', img: '/Images/Rat08.jpg' },
        { id: 7, name: 'Rat8', status: '', img: '/Images/Rat08.jpg' },
    ].sort(() => Math.random() - .3))

    const[previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

//Check the card's state and set the match if they do match
    const matchCheck = (currentCard) => {
    if(cards[currentCard].id === cards[previousCardState].id){
        cards[previousCardState].status = 'active matched'
        cards[currentCard].status = 'active matched'
        setPreviousCardState(-1)
    }else{
        cards[currentCard].status = 'active'
        setCards([...cards])
        //Time out to give the cards to flip back to normal
        setTimeout(() => {
            setPreviousCardState(-1)
            cards[currentCard].status = 'unmatch'
            cards[previousCardState].status = 'unmatch'
            setCards([...cards])
        }, 1000)
    }
}
    const clickhandler = (index) => {
        if (index !== previousIndex.current) {
            if (cards[index].status === 'active matched'){
                alert('already matched')
            }else{
                if (previousCardState === -1) {
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                }else{
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        }else{
            alert('card currently selected')
        }
    }

    return (
        <div className="container">
            {cards.map((card, index) => {
                return <Card card={card} key={index} index={index} clickhandler={clickhandler}/>
            })}
        </div>
    )
}