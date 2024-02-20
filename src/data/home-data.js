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

export {
    icons,
    gallery
}