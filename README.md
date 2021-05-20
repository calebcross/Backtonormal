# Back to Normal
![Screenshot of Back To Normal](https://user-images.githubusercontent.com/4029060/118316928-691d0a80-b4c5-11eb-8049-c2d3faf77531.png)*Homepage*

Back to Normal started as a individual 2-week Capstone project for BrainStation Web Development Bootcamp in Miami, Florida in May of 2021

It's a React app built with a few different libraries, which I'll list below, paired with a GraphQL server and mySQL database built with Node and Express.

I felt like there was a need to show the crucial data that the Centers for Disease Control and Prevention uploads everyday about the pace of COVID-19 vaccine rollout.

I also tried to solve the problem of seeing how the data has changed over time. The CDC website's REST API only has the daily data. There are many github accounts that have scraped this raw data daily and saved it into repositories. I used the one created by [SimonW](https://github.com/simonw) and I credit the ones I used to seed my database with below under credits
## USAGE
![Screen Recording 2021-05-19 at 11 47 09 AM (3)](https://user-images.githubusercontent.com/4029060/118889666-6ce8cc80-b8cb-11eb-94db-1a691eaf8074.gif)
## Raw Endpoints

Below is the raw API endpiont that my database scrapes daily:

- Vaccinations: https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data
## Front End

### Libraries
[![BootStrap](https://user-images.githubusercontent.com/4029060/118845925-32b30700-b89a-11eb-8370-7533b90941da.png)](https://getbootstrap.com/) [![BootSwatch](https://user-images.githubusercontent.com/4029060/118846996-4448de80-b89b-11eb-9edb-9852a6fe0633.png)](https://bootswatch.com/darkly/) [![Apollo Client](https://user-images.githubusercontent.com/4029060/118849872-28930780-b89e-11eb-806c-d9e10cdaed50.png)](https://www.apollographql.com/docs/react/)  [![Chart.js](https://user-images.githubusercontent.com/4029060/119051330-06c67d00-b991-11eb-9c9e-4f92d0a7b9b9.png)](https://www.chartjs.org/)
## Back End
[GraphiQL Interface](https://backtonormal.herokuapp.com/graphql)  
![Screen Shot 2021-05-19 at 2 02 16 PM](https://user-images.githubusercontent.com/4029060/119047173-91a47900-b98b-11eb-93f2-aefeae51466f.png)*Example Query and Response from GraphQL server*

You can find descriptions about the GraphQL Schema I defined through the Docs link from the GraphiQL link above.

### Libraries
- Express
 - GraphQL
 - Express-GraphQL
- Node-Cron
## Next Steps

I would like to incorporate the daily trend data. As of now the 7 daily moving average I used to calculate the amount of days are left until we reach herd immunity is hard coded in. The CDC just started publishing trend data as of March 2021 into a new endpoint:
https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_trends_data
## Author
[My GitHub](https://github.com/calebcross)  
[My LinkedIn](https://www.linkedin.com/in/calebacross/)

## Credits
[Font Awesome 5](https://fontawesome.com/start)


## License
[MIT](https://choosealicense.com/licenses/mit/)
