import { useEffect, useState } from 'react'

export default function useBoard({ size = 5, isEnemy }) {
    const [deck, setDeck] = useState({
        size,
        isEnemy,
        cards: []
    })

    const SPRITES_URL = [
        'https://i.pinimg.com/736x/d0/c3/24/d0c32445a0e05591ee0916f8344a0d4a.jpg',
        'https://c4.wallpaperflare.com/wallpaper/972/362/413/final-fantasy-ix-vivi-ornitier-final-fantasy-artwork-wallpaper-thumb.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pLFZ9WUcICUn1LezIi-f4-rO-jgIBw246w&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhI0iYJEB5tWFBGqfj2vnP6ihXFhVjKuddng&usqp=CAU',
        'https://cdnb.artstation.com/p/assets/images/images/005/313/979/large/jonathas-santiago-chocobos-step6-final.jpg?1490228869',
        'https://i.pinimg.com/564x/9c/bf/f4/9cbff49200c46c889f6f2e87d4419beb--final-fantasy-ix-art-final.jpg',
        'https://p4.wallpaperbetter.com/wallpaper/256/199/583/final-fantasy-ix-ozma-planet-character-design-guillaume-hochart-hd-wallpaper-preview.jpg',
        'https://cdnb.artstation.com/p/assets/images/images/021/770/217/large/andrea-segura-lopez-andreasegura-ejercicio-2-ilustracionacolor.jpg?1572891319',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNcJ7XCqAJ23x9mEc8B61bhBpoFkL0jULtQaD_ky6ZB-OhxEucZPRO5dbNtgEQAvCw4U&usqp=CAU',
        'https://cdnb.artstation.com/p/assets/images/images/025/654/115/large/chris-bjors-freya-burmecia-web.jpg?1586493291',
        'https://cdnb.artstation.com/p/assets/images/images/026/930/501/large/giulia-brunetti-quina-by-giulia-brunetti.jpg?1590115832&dl=1',
        'https://cdnb.artstation.com/p/assets/images/images/011/349/811/medium/graxious-art-closeup2.jpg?1529111222',
        'https://www.finalfantasyforums.net/attachments/brahne-jpg.4902/',
        'https://qph.cf2.quoracdn.net/main-qimg-0785f686e933d1b442c19343d6541705-pjlq',
        'https://www.laps4.com/foro/imagehosting/273521581b47cd8951f.png',
        'https://static1-es.millenium.gg/articles/9/19/38/9/@/91722-mon-jeu-genial-ma-capture-geniale-2020-04-15-16-29-47-orig-1-amp_main_media_schema-1.jpeg',
        'https://img.game8.co/3232618/8bc3ffd3d37ab8899d7846242aadd725.jpeg/show',
        'https://img.game8.co/3232644/94ef29211ce7a02f8b070865af2d0879.jpeg/show',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniLY3aDgtvvfP3za0YCNTPFhvEPGYmhMUJw&usqp=CAU',
        'https://i.ytimg.com/vi/Wh3EEpYo8DY/maxresdefault.jpg'
    ]

    const getRandomSprite = () => SPRITES_URL[Math.floor(Math.random() * SPRITES_URL.length)]

    const generateRandomCard = () => {
        console.log('random')
        console.log({
            flipped: isEnemy,
            used: false,
            image: getRandomSprite()
        })
        return {
            flipped: isEnemy,
            used: false,
            image: getRandomSprite()
        }
    }

    const generateDeck = () => {
        setDeck({
            ...deck,
            cards: Array(size).fill(0).map(() => generateRandomCard())
        })
    }

    useEffect(() => {
        console.log(deck)
    }, [deck])

    useEffect(() => {
        generateDeck()
    }, [])

    return {
        deck
    }
}
