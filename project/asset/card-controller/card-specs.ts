export interface RequestCardSpecsInterface {
    type: string
    link: string
    photos: string[]
    year: string
    price: number
    make: string
    model: string
    mileage: number
    country: string
    description: string
    used?: boolean
    color?: string
    body_style?: string
    region?: string
    seller_type?: string
    fuel_cons?: string
    fuel_volume?: number
    gearbox?: string
    power?: number
    drive?: string
    seat_number?: number
    door_number?: number
}

export interface ResponseCardSpecsInterface extends RequestCardSpecsInterface {
    card_id: number
}
