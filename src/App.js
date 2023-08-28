import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(String());
  const [num2, setNum2] = useState(String());
  const [sign, setSign] = useState(String());
  const [calc, setCalc] = useState(String());
  const [example, setExample] = useState(String());
  const [equally, setEqually] = useState(String());
  const [deleteAll, setDeleteAll] = useState(false);
  function handleNum(e) {
    console.log(num);

    console.log(sign);

    console.log(num2);
    if (!sign) {
      setNum((num) => num + e.target.dataset.value);
    }
    if (sign) {
      setNum2((num2) => num2 + e.target.dataset.value);
    }
  }
  function handleSign(e) {
    console.log(sign);
    if (num) {
      equally === "" && setSign(e.target.dataset.value);
    } else if (e.target.dataset.value === "-") {
      equally === "" && setNum(e.target.dataset.value);
    }
  }
  useEffect(() => {
    setExample(num + sign + num2);
    handleCalc();
  }, [calc, sign, num2, num]);
  function handleCalc(e) {
    let nums = Number(num);
    let nums2 = Number(num2);

    if (sign === "+") {
      setCalc(nums + nums2);
    }
    if (sign === "/") {
      setCalc(nums / nums2);
    }
    if (sign === "*") {
      setCalc(nums * nums2);
    }
    if (sign === "-") {
      setCalc(nums - nums2);
    }
    if (sign === "%") {
      setCalc((nums / 100) * nums2);
    }
  }
  function handleEqually(e) {
    if (num2) {
      setEqually(e.target.dataset.value);
      setSign(null);
    }
  }
  function handleDeleteAll(e) {
    setDeleteAll(!deleteAll);
    if (!deleteAll) {
      setNum("");
      setNum2("");
      setSign("");
      setCalc("");
      setExample("");
      setEqually("");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">КАЛЬКУЛЯТОР</h1>
      </header>
      <main className="App-main">
        <div className="container container__calculator">
          <div className="calculator-display">
            {equally != null ? example : calc}
          </div>

          <div className="calculator">
            <ul className="calculator-elements">
              <li className="element element__num grid-el-1">
                <button
                  data-value={1}
                  onClick={handleNum}
                  className="element element__num"
                >
                  1
                </button>
              </li>
              <li className="element element__num grid-el-2">
                <button
                  data-value={2}
                  onClick={handleNum}
                  className="element element__num"
                >
                  2
                </button>
              </li>
              <li className="element element__num grid-el-3">
                <button
                  data-value={3}
                  onClick={handleNum}
                  className="element element__num"
                >
                  3
                </button>
              </li>
              <li className="element element__num grid-el-4">
                <button
                  data-value={4}
                  onClick={handleNum}
                  className="element element__num"
                >
                  4
                </button>
              </li>
              <li className="element element__num grid-el-5">
                <button
                  data-value={5}
                  onClick={handleNum}
                  className="element element__num"
                >
                  5
                </button>
              </li>
              <li className="element element__num grid-el-6">
                <button
                  data-value={6}
                  onClick={handleNum}
                  className="element element__num"
                >
                  6
                </button>
              </li>
              <li className="element element__num grid-el-7">
                <button
                  data-value={7}
                  onClick={handleNum}
                  className="element element__num"
                >
                  7
                </button>
              </li>
              <li className="element element__num grid-el-8">
                <button
                  data-value={8}
                  onClick={handleNum}
                  className="element element__num"
                >
                  8
                </button>
              </li>
              <li className="element element__num grid-el-9">
                <button
                  data-value={9}
                  onClick={handleNum}
                  className="element element__num"
                >
                  9
                </button>
              </li>
              <li className="element element__num grid-el-10">
                <button
                  data-value={0}
                  onClick={handleNum}
                  className="element element__num"
                >
                  0
                </button>
              </li>
              <li className="element element__num grid-el-11">
                <button
                  data-value={"."}
                  onClick={handleNum}
                  className="element element__num"
                >
                  .
                </button>
              </li>

              <li className="element element__operation grid-el-12">
                <button
                  data-value={"АС"}
                  onClick={handleDeleteAll}
                  className="element element__num"
                >
                  АС
                </button>
              </li>

              <li className="element element__operation grid-el-14">
                <button
                  data-value={"%"}
                  onClick={handleSign}
                  className="element element__num"
                >
                  %
                </button>
              </li>
              <li className="element element__operation grid-el-15">
                <button
                  data-value={"/"}
                  onClick={handleSign}
                  className="element element__num"
                >
                  /
                </button>
              </li>
              <li className="element element__operation grid-el-16">
                <button
                  data-value={"*"}
                  onClick={handleSign}
                  className="element element__num"
                >
                  *
                </button>
              </li>
              <li className="element element__operation grid-el-17">
                <button
                  data-value={"-"}
                  onClick={handleSign}
                  className="element element__num"
                >
                  -
                </button>
              </li>
              <li className="element element__operation grid-el-18">
                <button
                  data-value={"+"}
                  onClick={handleSign}
                  className="element element__num"
                >
                  +
                </button>
              </li>
              <li className="element element__operation grid-el-19">
                <button
                  data-value={"="}
                  onClick={handleEqually}
                  className="element element__num"
                >
                  <span>=</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
