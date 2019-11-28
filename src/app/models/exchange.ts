import { Product } from './product';

export class Exchange {
    id: string;
    sender: string;
    receiver: string;
    productSend: Product;
    productReceiver: Product;
    state: boolean;
    date: Date;
}