import css from "styled-jsx/css";

export default css.ToVisitStyles`
.toVisit {
  width: 37%;
  height: 250px;
}
.title {
  margin-bottom: 35px;
  display: flex;
  justify-content: space-between;
}
.title_section {
  display: flex;
}
.title_section-bold {
  width: 80px;
  padding-right: 5px;
  font-size: 20px
}
.title_section-light {
  font-weight: lighter;
  font-size: 20px;
}
.title_users{
  display: flex;
  align-items: center;
}
.title_users-img {
  margin-left: 5px;
  display: flex;
  align-items: center;
}
.title_users-img img{
  padding: 1px; 
  width: 20px;
  height: 20px;
  border-radius: 5px;
}
.title_users-img span {
  width: 20px;
  height: 20px;
  padding-left: 1px;
  padding-top: 1px;
  font-size: 15px;
  background-color: #B1A5E6;
  color: white;
  border-radius: 5px;
}
.places{
  display: grid;
  grid-template-columns: 49% 8% 43%;
  grid-template-rows: 55px 25px 112px;
  color:  white;
}
.places img {
  width: 15px;
  height: 15px;
  padding-top: 5px;
  margin-right: 5px;
}
.places h3 {
  font-size: 16px;
}
.places_first{
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  border-radius: 10px;
  background-image: url('https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/03/arab-street.png');
}
.places_second{
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  border-radius: 10px;
  background-image: url('https://images.mansionglobal.com/im-144587?size=1.5005861664712778&width=640');
}
.places_third{
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  display: flex;
  border-radius: 10px;
  background-image: url('https://lh3.googleusercontent.com/w5lJ40uDy6iXFKndEFEB50jaaaIv-Zc_4Uppim3pFSm_Aeh9YaVvXKC0UzXnNJM-dTnk=s120');
}
.places_first-description, .places_second-description, .places_third-description {
  margin: 3% 0 0 3%;
  display: flex;
}
.places_third-plus{
  width: 55px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #7E69E8;
  border-radius: 10px;
}
.places_third-plus span {
  margin: 25%;
}
@media only screen and (max-width: 768px) {
  .toVisit {
    width: 100%;
    height: 250px;
    margin-bottom: 50px;
  }
}
`