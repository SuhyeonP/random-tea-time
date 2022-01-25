export const gongcha_coffee = [
    {
        name: '아메리카노',
        price: 133300,
        explain: '기본적인 아메리카노'
    },
    {
        name: '카페라떼',
        price: 1233300,
        explain: '커피 + 우유'
    }
];

export const gongcha_milk_tea = [
    {
        name: '얼그레이 밀크티',
        price: 13333,
        explain: '얼그레이 밀크티 입니다.'
    }
]

export const gongcha_menu = {
    name: '공차',
    cafe_menu: [
        {
            category: '커피',
            menus: gongcha_coffee
        },
        {
            category: '밀크티',
            menus: gongcha_milk_tea
        }
    ]
}
