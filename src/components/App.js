import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers";
import "./App.css";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  applyMemory,
  clearMemory,
} from "../actions";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelNumberClick = (number) => {
    dispatch(applyNumber(number));
  };
  const handelOperationClick = (opperator) => {
    dispatch(changeOperation(opperator));
  };
  const handelClearDisplay = () => {
    dispatch(clearDisplay());
  };
  const handelAddMemory = () => {
    dispatch(addMemory());
  };
  const handelApplyMemory = () => {
    dispatch(applyMemory());
  };
  const handelClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className='container row mt-5'>
        <div className='col-md-12 d-flex justify-content-center'>
          <form name='Cal'>
            <TotalDisplay value={state.total} />
            <div className='row details'>
              <span id='operation'>
                <b>Operation:</b> {state.operation}
              </span>
              <span id='memory'>
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className='row'>
              <CalcButton value={"M+"} onClick={handelAddMemory} />
              <CalcButton value={"MR"} onClick={handelApplyMemory} />
              <CalcButton value={"MC"} onClick={handelClearMemory} />
            </div>

            <div className='row'>
              <CalcButton value={1} onClick={() => handelNumberClick(1)} />
              <CalcButton value={2} onClick={() => handelNumberClick(2)} />
              <CalcButton value={3} onClick={() => handelNumberClick(3)} />
            </div>

            <div className='row'>
              <CalcButton value={4} onClick={() => handelNumberClick(4)} />
              <CalcButton value={5} onClick={() => handelNumberClick(5)} />
              <CalcButton value={6} onClick={() => handelNumberClick(6)} />
            </div>

            <div className='row'>
              <CalcButton value={7} onClick={() => handelNumberClick(7)} />
              <CalcButton value={8} onClick={() => handelNumberClick(8)} />
              <CalcButton value={9} onClick={() => handelNumberClick(9)} />
            </div>

            <div className='row'>
              <CalcButton value={"+"} onClick={() => handelOperationClick("+")} />
              <CalcButton value={"*"} onClick={() => handelOperationClick("*")} />
              <CalcButton value={"-"} onClick={() => handelOperationClick("-")} />
            </div>

            <div className='row ce_button'>
              <CalcButton value={"CE"} onClick={handelClearDisplay} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
