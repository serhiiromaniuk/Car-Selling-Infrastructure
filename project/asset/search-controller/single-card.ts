import { CardSpecsInterface } from '../card-controller/card-specs';

interface SearchSingleRequestInterface {
    card_id: string
}

interface SearchSingleResponseInterface {
    data: CardSpecsInterface
}
