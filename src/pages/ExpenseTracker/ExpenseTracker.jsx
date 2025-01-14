import { useEffect, useState } from "react";
import "./expenseTracker.css";
import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";

function ExpenseTracker() {
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");

    return savedBalance ? JSON.parse(savedBalance) : 0;
  });
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transaction, setTransaction] = useState({ amount: 0 });

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  function handleChange(e) {
    const { name, value } = e.target;

    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const amount = parseFloat(transaction.amount);

    if (amount > 0) {
      setIncome((prevIncome) => prevIncome + amount);
    } else {
      setExpense((prevExpense) => prevExpense + Math.abs(amount));
    }

    setBalance((prevBalance) => prevBalance + amount);
    setTransaction({ amount: 0 });
  }

  return (
    <main className="expenseTracker-main">
      <Header />
      <section>
        <h3>Your Balance:</h3>
        <h2>${balance.toFixed(2)}</h2>
      </section>
      <section>
        <article>
          <h4>Income</h4>
          <p>${income.toFixed(2)}</p>
        </article>
        <article>
          <h4>Expense</h4>
          <p>${expense.toFixed(2)}</p>
        </article>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <article className="expenseTracker-article">
            <label htmlFor="amount">Amount*</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount"
              min={-9999999}
              max={9999999}
              step="0.01"
              value={transaction.amount}
              onChange={handleChange}
            />
            <span>*negative - expense; positive - income</span>
          </article>
          <button type="submit" aria-label="Add transaction">
            Add transaction
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}

export default ExpenseTracker;
