import css from "styled-jsx/css";

export default css.CitiesStyles`
.cities {
  width: 29%;
  margin-top: -142px; 
}
.citiesContainer{
  width: 88%;
  height: 114px;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 39px 38px 100px 0px rgba(0,0,0,0.4);
}
.citiesContainer_data {
  display: flex;
}
.citiesContainer_data img {
  width: 45px;
  height: 35px;
  padding: 21px 16px;
  background-color:  #DCE8F4; 
  border-radius: 10px;
}
.citiesContainer_inf {
  display: flex;
  padding: 25px 59px 25px 21px;
}
.citiesContainer_inf-degrees{
  display: flex;
}
.citiesContainer_inf-degrees p {
  font-size: 28px;
  font-weight: bold;
}
.citiesContainer_inf-degrees span {
  font-size: 12px;
  color: #A6A4AD;
}
.citiesContainer_inf-line {
  width: 2px;
  height: 28px;
  background-color: #A6A4AD;
  margin: 2px 7px;
}
.citiesContainer_inf-city h3 {
  font-size: 20px;
}
.citiesContainer_inf-city p {
  font-size: 12px;
}
.citiesContainer_weather{
  display: flex;
  justify-content: space-around;
}
.add{
  width: 88%;
  height: 140px;
  background-color: white;
  border: 2px dashed #A6A4AD;
  border-radius: 10px;
  cursor:pointer;
}
.add button {
  margin: 5% 25% 18px 25%;
	padding:5px 25px;
  align-self: center;
  background-color: #F0EEFC;
	border-radius:28px;
	color: #7E69E8;
	font-size: 15px;
  border: 0;
}
.add img{
  width: 135px;
  height: 70px;
  margin-left: 25%;
}
@media only screen and (max-width: 768px) {
  .cities {
    width: 100%;
    margin-top: 50px; 
  }
}
`