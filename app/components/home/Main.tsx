import { Car } from "@/app/(types)/type";
import Image from "next/image";
import Link from "next/link";

const bannier = require("../../../assets/images/Bannier.jpg");

export const cars: Car[] = [
  {
    carName: "Toyota Corolla",
    description: "La Toyota Corolla est une voiture compacte populaire.",
    brand: "Toyota",
    model: "Corolla",
    price: 25000,
    color: "Blanc",
    motorType: "Essence",
    power: "120cv",
    placeNumber: 5,
    status: "Pinned",
    type: "Sedan",
    images: [
      {

        imageUrl: bannier,
        productId: "123456",
        url: bannier,
      },
      {
        imageUrl: bannier,
        productId: "123456",
        url: bannier,
      },
    ],
  },
  {
    carName: "Tesla Model 3",
    description: "La Tesla Model 3 est une voiture électrique de luxe.",
    brand: "Tesla",
    model: "Model 3",
    price: 45000,
    color: "Rouge",
    motorType: "Électrique",
    power: "450cv",
    placeNumber: 5,
    status: "Pinned",
    type: "Berline",
    images: [
      {
        imageUrl: bannier,
        productId: "789012",
        url: bannier,
      },
      {
        imageUrl: bannier,
        productId: "789012",
        url: bannier,
      },
    ],
  },
];


const Main: React.FC = async () => {
  return (
    <main className="bg-gray-100 mt-6">
      <div className="py-6 px-24">
        {cars.map((car, i) => (
          <div key={car.carName} className={`flex justify-between mb-20 ${i % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="rounded-2xl reveal">
              <Image
                src={car.images[0].imageUrl}
                alt={car.carName}
                height={100}
                width={500} className="rounded-sm" />
            </div>
            <div className="reveal">
              <h2 className="text-xl font-bold mb-2">{car.carName}</h2>
              <p className="text-gray-600 mb-4">{car.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">${car.price.toLocaleString()}</p>
                <Link href={`/cars/${car.model.toLowerCase().replace(" ", "-")}`} className="hover:opacity-60 border border-white rounded block mt-4 lg:inline-block lg:mt-0 text-white mr-4 px-6 py-3 bg-orange-400">
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;



