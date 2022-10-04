import Card from "../UI/Card/Card";
import styles from "./Grid.module.css";

const Grid = (props) => {
  return (
    <Card className={styles.gridContainer}>
      <h1>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.grid}>{props.list}</div>
    </Card>
  );
};

export default Grid;
