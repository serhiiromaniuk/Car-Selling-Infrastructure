interface SearchRequestInterface {
    type?: string,
    year?: string,
    price?: number,
    mileage?: number,
    used?: boolean,
    color?: string
}

interface SearchRequestAdvancedInterface {
    make?: string,
    model?: string,
    body_style?: string
    country?: string,
    region?: string,
    seller_type?: string,
    fuel_cons?: string,
    fuel_volume?: number,
    gearbox?: string,
    power?: number,
    drive?: string,
    seat_number?: number,
    door_number?: number
}

interface SearchResponseInterface {
    list: [
        {
            card_id: number,
            link: string,
            title: string,
            price: string
        }
    ]
}
