import css from "styled-jsx/css";

export default css.HeaderStyles`
/* Element in left with info */
.weather{
  width: 93px;
  height: 185px;
  position: absolute;
  top: 103px;
  color: white;
}
.weather_desing-top{
  width: 10px;
  height: 10px;
  background-color: white;
  border-bottom-left-radius: 900%;
  z-index: 3;
  position: fixed;
  left: 1px;
}
.weather_desing-bottom{
  background-color: #5F64A3;
  width: 10px;
  height: 10px;
  z-index: 2;
}
.weather_how{
  width: 93px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #5F64A3;
  border-radius: 25%;
  border-top-left-radius: 0%;
  border-bottom-left-radius: 15%;
  z-index: 5;
}
.weather_how img {
  width: 45px;
  height: 35px;
  align-self: center;
}
.weather_how p {
  padding-top: 5px;
  font-size: 10px;
  align-self: center;
}
.weather_howMuch{
  width: 93px;
  height: 75px;
  margin-top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7D68E9;
  z-index: 2;
}
.weather_howMuch p {
  font-size: 30px;
  font-weight: bold;
}
.weather_howMuch span {
  font-size: 10px;
  margin-top: -10px;
}
/* Image header with information about city */
.city {
  height: 50vh;
  margin: 45px 47px;
/*   color: #7D68E9; */
}
.city_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.city_location {
  position: fixed;
  left: 13%;
  top: 110px;
}
.city_location-name {
  display: flex;
}
.city_location-name img {
  width: 20px;
  height: 20px;
  display: flex;
  padding-right: 20px;
}
.city_location-name h1 {
  font-size: 20px;
}
.city_location-img{
  width: 100px;
  height: 50px;
  padding-top: 45px;
  padding-left: 24px;
  object-fit: cover;
}
`