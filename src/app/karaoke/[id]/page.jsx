export default function Home() {
  const data = {
    name: "NOX",
    location: "32 Жуулчны Гудамж, Чингэлтэй Дүүрэг, Ulaanbaatar, Mongolia",
    phoneNumber: "011 31 1266",
    openHour: "",
    prices: [
      {
        id: 1,
        name: "Энгийн өрөө",
        price: "10000₮",
      },
      {
        id: 2,
        name: "VIP өрөө",
        price: "10000₮",
      },
    ],
  };
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <p>{data.phoneNumber}</p>
      <p>{data.openHour}</p>
      <ul>
        {data.prices.map((price) => (
          <li key={price.id}>
            <p>{price.name}</p>
            <p>{price.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
