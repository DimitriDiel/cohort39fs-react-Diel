import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatar: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "scating",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  return (
    <div className="lesson03-wrapper">
      {/* <Card
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        hobby={homerSimpson.hobby}
        job={homerSimpson.job}
        avatar={homerSimpson.avatar}
      />
      <Card
        firstName={margeSimpson.firstName}
        lastName={margeSimpson.lastName}
        hobby={margeSimpson.hobby}
        job={margeSimpson.job}
        avatar={margeSimpson.avatar}
      /> */}
      <Card userData={homerSimpson} />
      <Card userData={margeSimpson} />
      <Card userData={bartSimpson} />
      {/* <Button>Get user data</Button> */}
      <Button buttonName={"Update user data"} />
      <Button buttonName={"Delete user data"} />
      <Button />
    </div>
  );
}

export default Lesson03;
