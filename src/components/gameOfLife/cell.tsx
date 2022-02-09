import "../../global.css";

interface props {
  alive: boolean;
}

export const Cell = (props: props) => {
  return (
    <div>
      {props.alive ? (
        <div className="cell-alive"></div>
      ) : (
        <div className="cell-dead"></div>
      )}
    </div>
  );
};
