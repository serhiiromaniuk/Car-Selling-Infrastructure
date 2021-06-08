import { CardSpecsInterface } from './card-specs';

interface ActionCardInterface extends Omit<CardSpecsInterface, 'photos'> {
    photos: Blob
}
