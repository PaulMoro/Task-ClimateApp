import React from "react";
/* compoenents */
import Header from '../src/components/Header'
import Future from '../src/components/Future'
import ToVisit from '../src/components/ToVisit'
import Cities from '../src/components/Cities'
/* Data */
import getData from '../src/hook/getData'

const HomePage = () => {
/*   const data = getData();
  console.log(data)
 */
  return (
    <>
      <div className="city">
        <Header 
        />
      </div>
      <div className="about">
        <Future />
        <ToVisit />
        <Cities />
      </div>
      <style global jsx>{`
        *{
          margin: 0px;
          padding: 0px;
          font-family: Helvetica, sans-serif;
        }
        h4{
          font-size: 12px;
          color: #D9D9D9;
        }
        .about{
          margin: 0px 5% 60px 5%;
          display: flex;
          justify-content: space-between;
        }
        @media only screen and (max-width: 768px) {
          .about{
            margin: 0px 5% 60px 5%;
            display: block;
          }
          .future{
            width: 100%;
            height: 250px;
          }
        }

      `}
      </style>
    </>
)};

export default HomePage;