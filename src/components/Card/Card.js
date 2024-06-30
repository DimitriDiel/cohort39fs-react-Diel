import "./styles.css";

function Card() {
  return (
    <div className="card-simpson">
      <div className="img-control">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
          alt="Тут должен быть аватар Simpson"
        />
      </div>
      <div className="description">
        <h1>Имя и Фамилия: Гомер Симпсон</h1>
        <h3>
          Род деятельности: Гомер работает инспектором по технике безопасности
          на Спрингфилдской АЭС
        </h3>
        <p>
          Хобби: Он проводит много времени в Таверна Мо со своими друзьями
          Барни, Карлом, Ленни и барменом Мо и страдает достаточно заметной
          зависимостью от пива Duff. Дома он в основном смотрит телевизор, сидя
          или лежа на любимом диване, перекусывая, либо выпивая.
        </p>
      </div>
    </div>
  );
}

export default Card;
