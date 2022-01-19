import React, { useState, useEffect } from "react";
import request from "./Api/DemoApi";
import leader from "./images/LEADERBOARD.png";
import axios from "axios";

const LeaderBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("https://api.metakidz.io/find");
      setData(result.data);
    };
    getData();
  }, []);
  // console.log(result.data);
  // result.data.map((i) => console.log(i));

  return (
    <>
      <div className="bg ">
        <div className="character mx-lg-5">
          <div className="char-left ">
            <img src="../images/Char_2.png" alt="left_char" className="" />
          </div>
          <div className="char-right">
            <img src="../images/Char_1.png" alt="right_char" className="" />
          </div>
        </div>
        <img
          src={leader}
          alt="LeaderBoard"
          className="d-block m-auto w-75 px-lg-5 py-md-3 p-3 img-fluid my-md-5 "
        />
        <div className=" w-100 mx-auto  ">
          <div className="">
            <div className="w-50 mx-auto  text-center ">
              <div className="d-flex justify-content-between w-75 table-head mx-md-4 mx-lg-4 mx-xxl-4 ">
                <p className="c-h4 side-left ">#</p>
                <p className="c-h4 side-mid">Discord</p>
                <p className="c-h4 side-right">Points</p>
              </div>
            </div>
          </div>

          <div className="mx-auto">
            {data.map((elem, i) => {
              console.log(elem);
              const { discordUserName, score } = elem;
              return (
                <>
                  <div key={i} className=" wrap-row w-50 ms-4">
                    <div className="d-flex flex-row justify-content-between  w-75 table-body ">
                      <p className="c-h4">{i+1}</p>
                      <p className="c-h4">{discordUserName}</p>
                      <p className="c-h4">{score}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
