
export default function useMenu(axiosParams) {
    const MENU_OPTIONS = [
        {
            title: 'start game',
            path: { name: '/game', params: {} }
        },
        {
            title: 'Oyster',
            path: { name: '/oyster', params: {} }

        },
        {
            title: 'Local Battle'

        },
        {
            title: 'Decks'

        },
        {
            title: 'Achievements'

        }
    ]

    return { MENU_OPTIONS }
}
