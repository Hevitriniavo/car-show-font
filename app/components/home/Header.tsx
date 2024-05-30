import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-gray-800 bg-header text-white p-6 text-center min-h-96">
      <div className="pt-40 reveal">
        <h1 className="text-4xl font-bold mb-2 ">
          <span className="text-blue-500">HIGH</span>
          <span className="text-white">-</span>
          <span className="text-red-500">CAR</span>
        </h1>
        <h2 className="text-xl mb-4">Bienvenue chez votre meilleur concessionnaire automobile</h2>
        <Link href="/" className=" btn-animated hover:opacity-60 hover:underline rounded block mt-4 lg:inline-block lg:mt-0 text-white mr-4 px-6 py-3 bg-orange-400">
          Acheter maintenant
        </Link>
      </div>

    </div>
  );
}

export default Header;
