interface Data {
    id: number,
    title: string
};

const getData = async () => {
    const json = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Data[] = await json.json();
    return data;
}


async function page() {
    const cars = await getData();
    return (
        <>
            {cars.map((car) => (
                <div key={car.id}>
                    <span>{car.id}</span>
                    <span>{car.title}</span>
                </div>
            ))}
        </>
    );
}

export default page;