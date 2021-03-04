import css from "styled-jsx/css";

export default css.FutureStyles`
.future{
  width: 17%;
  height: 250px;
}
.title{
  margin-bottom: 35px;
  display: flex;
}
/* problems with the classNames, it's don't take the styles */
.title h2 {
  padding-right: 5px;
  font-size: 20px
}
.title p{
  font-weight: lighter;
  font-size: 20px;
}

.day{
  margin-top: 5px;
  border-radius: 10px;
  border: 2px solid #F7F7F7;
}
.day_weather{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.day_weather img{
  width: 22px;
  height: 22px;
  padding-left: 15px;
}
.day_weather-precise p {
  margin-bottom: 5px;
  padding-right: 10px;
  font-size: 14px;
  font-weight: bold;
}
/* .day_weather-precise h4 is repeated in all project, because I use like global on index.js */
.day_degrees, .day_degrees-first {
  width: 68px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DCE8F4;
  border-radius: 10px;
}

.day_degrees-first {
  color: white;
  background-color: #7E69E8;
}
@media only screen and (max-width: 768px) {
  .future{
    width: 100%;
    height: 250px;
    margin-bottom: 50px;
  }
}

`