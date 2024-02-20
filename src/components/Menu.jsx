import {
    Menu,
    MenuList,
    MenuItem,
    MenuLink
} from '/src/styles/Nav'

export default function MenuNav({visible}) {
    const data = [
        {
            title: '自分の記録',
            link: '/'
        },
        {
            title: '体重グラフ',
            link: '/'
        },
        {
            title: '目標',
            link: '/'
        },
        {
            title: '選択中のコース',
            link: '/'
        },
        {
            title: 'コラム一覧',
            link: '/recommend'
        },
        {
            title: '設定',
            link: '/'
        }
    ]
    return (
        <Menu className={visible ? 'active' : ''}>
            <MenuList>
                {data.map((item, index) => (<MenuItem key={index}>
                    <MenuLink to={item.link}>{item.title}</MenuLink>
                </MenuItem>))}
            </MenuList>
        </Menu>
    )
}