import { WithRuBalance } from "../helpers/hoc/withRuBalance";
import "./styles.css";

const Card = ({ balance, setBalance }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button onClick={setBalance}>
          Add money
        </button>
      </div>

      <div className="card-block">
        <p>Andy</p>
        <p>{balance}$</p>
      </div>
    </div>
  );
};

export default WithRuBalance(Card);
