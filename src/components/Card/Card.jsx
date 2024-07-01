import "./styles.css";

function Card({ userData }) {
  const { avatar, firstName, lastName, job, hobby } = userData;

  return (
    <div className="card-simpson">
      <div className="img-control">
        <img src={avatar} alt="Тут должен быть аватар Simpson" />
      </div>
      <div className="description">
        <h2>Имя и Фамилия: {`${firstName} ${lastName}`}</h2>
        <h3>Род деятельности: {job} </h3>
        <p>Хобби: {hobby} </p>
      </div>
    </div>
  );
}

export default Card;
