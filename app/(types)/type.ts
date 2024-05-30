export type CarImage = {
    imageUrl: string;
    productId: string;
    url: string;
};

export type Car = {
    carName: string;
    description: string;
    brand: string;
    model: string;
    price: number;
    color: string;
    motorType: string;
    power: string;
    placeNumber: number;
    status: string;
    type: string;
    images: CarImage[];
};
