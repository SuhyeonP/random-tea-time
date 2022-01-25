export const starbucks_coffee = [
    {
        name: '아메리카노',
        price: 1000,
        explain: '기본적인 아메리카노'
    },
    {
        name: '카페라떼',
        price: 1200,
        explain: '커피 + 우유'
    }
];

export const starbucks_tea = [
    {
        name: '얼그레이 티',
        price: 133,
        explain: '얼그레이 티 입니다.'
    }
]

export const starbucks_menu = {
    name: '스타벅스',
    cafe_menu: [
        {
            category: '커피',
            menus: starbucks_coffee
        },
        {
            category: '티',
            menus: starbucks_tea
        }
    ]
}
