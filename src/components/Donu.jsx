import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Donu({ percentage }) {
  return (
    <div style={{ width: 70, height: 70 }}>
      <CircularProgressbar
        value={parseFloat(percentage)}
        text={`${parseFloat(percentage)}%`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "#2196f3",
          trailColor: "#f0f0f0",
        })}
      />
    </div>
  );
}

export default Donu;
