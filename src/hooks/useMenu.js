
export default function useMenu(axiosParams) {
    const MENU_OPTIONS = [
        {
            title: 'start game',
            path: { name: '/game', params: {} }
        },
        {
            title: 'Achievements'

        },
        {
            title: 'Settings'

        }
    ]

    return { MENU_OPTIONS }
}
