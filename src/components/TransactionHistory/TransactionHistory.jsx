import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tableTitleValue}>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tableTitleValue} key={id}>
              <td className={css.tableValue}>{type}</td>
              <td className={css.tableValue}>{amount}</td>
              <td className={css.tableValue}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
