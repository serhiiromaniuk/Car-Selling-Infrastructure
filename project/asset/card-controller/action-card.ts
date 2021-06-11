import { RequestCardSpecsInterface } from './card-specs';

interface ActionCardInterface extends Omit<RequestCardSpecsInterface, 'photos'> {
    photos: Blob
}
