
export default function useMenu(axiosParams) {
    const MENU_OPTIONS = [
        {
            title: 'start game',
            path: { name: '/game', params: {} }
        },
        {
            title: 'Local Battle'

        },
        {
            title: 'Decks'

        },
        {
            title: 'Achievements'

        },
        {
            title: 'Oyster',
            path: { name: '/oyster', params: {} }

        }
    ]

    return { MENU_OPTIONS }
}
