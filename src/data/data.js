import { v4 as uuid } from 'uuid'
const icons = [
    {
        src: '/icons/knife-fork.svg',
        label: 'Morning',
        id: 1,
        type: 'morning'
    },
    {
        src: '/icons/knife-fork.svg',
        label: 'Lunch',
        id: 2,
        type: 'lunch'
    },
    {
        src: '/icons/knife-fork.svg',
        label: 'Dinner',
        id: 3,
        type: 'dinner'
    },
    {
        src: '/icons/cup.svg',
        label: 'Snack',
        id: 4,
        type: 'snack'
    }
]
const gallery = () => [
    {
        src: '/gallery/1.jpg',
        label: '05.21.Morning',
        id: uuid(),
        type: 'morning'
    },
    {
        src: '/gallery/2.jpg',
        label: '05.21.Lunch',
        id: uuid(),
        type: 'lunch'
    },
    {
        src: '/gallery/3.jpg',
        label: '05.21.Dinner',
        id: uuid(),
        type: 'dinner'
    },
    {
        src: '/gallery/4.jpg',
        label: '05.21.Snack',
        id: uuid(),
        type: 'snack'
    },
    {
        src: '/gallery/1.jpg',
        label: '05.21.Morning',
        id: uuid(),
        type: 'morning'
    },
    {
        src: '/gallery/5.jpg',
        label: '05.21.Lunch',
        id: uuid(),
        type: 'lunch'
    },
    {
        src: '/gallery/6.jpg',
        label: '05.21.Dinner',
        id: uuid(),
        type: 'dinner'
    },
    {
        src: '/gallery/7.jpg',
        label: '05.21.Snack',
        id: uuid(),
        type: 'snack'
    },
]
const diary = () => ({
    id: uuid(),
    date: '2021.05.21',
    time: '23:25',
    text: '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
})
const recommends = () => [
    {
        src: '/recommend/1.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'morning',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
    {
        src: '/recommend/2.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'lunch',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
    {
        src: '/recommend/3.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'dinner',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
    {
        src: '/recommend/4.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'snack',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
    {
        src: '/recommend/5.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'morning',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
    {
        src: '/recommend/6.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'lunch',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
    {
        src: '/recommend/7.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'dinner',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
    {
        src: '/recommend/8.jpg',
        label: '2021.05.17   23:25',
        id: uuid(),
        type: 'snack',
        desc: {
            text: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['魚料理', '和食' ,'DHA']
        }
    },
]

export {
    icons,
    recommends,
    diary,
    gallery
}