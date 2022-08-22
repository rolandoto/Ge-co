import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";
import "./expenses.css"

export default function Expenses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const todayExpenses = [
    {
      id: 1,
      expense: "Grocery",
      time: "5:12 pm",
      location: "Belanja di pascar",
      price: 326.8,
      icon: "",
      iconBackgroundColor: "#32a7e2",
    },
    {
      id: 2,
      expense: "Transportation",
      time: "5:12 pm",
      location: "Naik bus umum",
      price: 15.0,
      icon:  "",
      iconBackgroundColor: "#B548C6",
    },
    {
      id: 3,
      expense: "Housing",
      time: "5:12 pm",
      location: "Bayar Listrik",
      price: 185.75,
      icon:  "",
      iconBackgroundColor: "#FF8700",
    },
  ];
  const previousExpenses = [
    {
      id: 1,
      expense: "Food and Drink",
      time: "5:12 pm",
      location: "Makan Steak",
      price: 156.0,
      icon: "cartIcon",
      iconBackgroundColor: "#DC3434",
    },
    {
      id: 2,
      expense: "Entertainment",
      time: "5:12 pm",
      location: "Nonton Bioskop",
      price: 35.2,
      icon: "",
      iconBackgroundColor: "#4BA83D",
    },
  ];
  const spendCategories = [
    {
      id: 1,
      category: "Food and Drinks",
      price: 872.4,
    },
    {
      id: 2,
      category: "Shopping",
      price: 1378.2,
    },
    {
      id: 3,
      category: "Housing",
      price: 928.5,
    },
    {
      id: 4,
      category: "Transportation",
      price: 420.7,
    },
    {
      id: 5,
      category: "Vehicle",
      price: 520,
    },
  ];

  const onMouseOver = (data,index) => setActiveIndex(index);

  return (
    <>
      <main className={"expenses"}>
        <div className={"expensesCard"}>
          <section className={"expensesOverview"}>
            <div className={"expensesHeader"}>
              <p className={"expensesTitle"}>Expenses</p>
              <div className={"expensesActions"}>
                <div className={"personImages"}>
                  <img
                    className={"personOne"}
                    src={"personOne"}
                    alt="person one"
                  />
                  <img
                    className={"personTwo"}
                    src={
                      ""
                    }
                    alt="person two"
                  />
                  <img
                    className={"personThree"}
                    src={"personThree"}
                    alt="person three"
                  />
                </div>
                <button>
                  <img className={"addIcon"} src={"addIcon"} alt="add" />
                </button>
              </div>
            </div>

            <p className={"dateRange"}>01 - 25 March, 2020</p>
            <ResponsiveContainer width="100%" height="9%">
              <BarChart data={data}>
                <Bar
                  dataKey="uv"
                  fill="rgba(21, 122, 255, .2)"
                  onMouseOver={onMouseOver}
                >
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={
                        index === activeIndex
                          ? "rgb(21, 122, 255)"
                          : "rgba(21, 122, 255, .2)"
                      }
                      key={index}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className={"expensesOverviewHeader"}>
              <p className={"expensesOverviewTitle"}>Today</p>
              <button>
                <img
                  className={"expenseOption"}
                  src={"optionIcon"}
                  alt="options"
                />
              </button>
            </div>

            <ul>
              {todayExpenses.map((expense) => (
                <li className={"expenseItem"} key={expense.id}>
                  <div className={"expenseItemLeft"}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={"expenseItemDiv"}
                    >
                      <img src={"cartIcon"} alt={"alt"} />
                    </div>
                    <div className={"expenseItemDetails"}>
                      <p className={"expenseItemTitle"}>
                        {expense.expense}
                      </p>
                      <p className={"expenseItemTime"}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={"expenseItemPrice"}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={"expensesOverviewHeader"}>
              <p className={"expensesOverviewTitle"}>
                Monday, 23 March 2020
              </p>
              <button>
                <img
                  className={"expenseOption"}
                  src={"optionIcon"}
                  alt="options"
                />
              </button>
            </div>

            <ul>
              {previousExpenses.map((expense) => (
                <li className={"expenseItem"} key={expense.id}>
                  <div className={"expenseItemLeft"}>
                    <div
                      style={{ backgroundColor: expense.iconBackgroundColor }}
                      className={"expenseItemDiv"}
                    >
                      <img src={"cartIcon"} alt={expense.expense} />
                    </div>
                    <div className={"expenseItemDetails"}>
                      <p className={"expenseItemTitle"}>
                        {expense.expense}
                      </p>
                      <p className={"expenseItemTime"}>
                        {expense.time} • {expense.location}
                      </p>
                    </div>
                  </div>
                  <p className={"expenseItemPrice"}>
                    {expense.price.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className={"moneyOverview"}>
            <p className={"moneyOverviewTitle"}>Where'd your money go</p>

            <ul>
              {spendCategories.map((category) => (
                <li key={category.id}>
                  <div className={"spendCategory"}>
                    <p className={"spendCategoryName"}>
                      {category.category}
                    </p>
                    <p className={"spendCategoryPrice"}>
                      {category.price.toFixed(2)}
                    </p>
                  </div>
                  <div className={"spendCategoryBar"}>
                    <div
                      style={{
                        width: `${
                          (category.price /
                            spendCategories.reduce(
                              (acc, current) => acc + current.price,
                              0
                            )) *
                          100
                        }%`,
                      }}
                      className={"spendCategoryColoredBar"}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
