# Life Expectancy Correlations

### Where can I find it?
[You can find it by clicking right here!](https://spencerbarriball.github.io/Life-Expectancy-Correlation/)

### What does it do?
It shows visual representation of data from World Health Organisation country data from 2015.

### What does it fulfil?
It explores the data and splits the countries into developed and developing and graphically shows whether there is 
any correlation between life expectancy and gross national income per capita.

### Functionality of the project
There is a drop down select box which allows each country to be chosen individually.

There is a pie chart graphically showing numbers of developed and developing countries.

There are two bar charts split by development status which show status against life expectancy and  adult mortality 
(ages 15 to 65).

Finally there is a scatter graph which shows gross national income per capita based on purchasing power parity (PPP) 
and life expectancy. The country data points are color coded into developed and developing as well as a hover tooltip
 showing what each country it represents.

Each chart is interconnected and one action on one reflects in the other charts.

Note that as these charts use D3.js the webpages are not mobile-ready (responsive) as D3.js is designed for 
desktop or large-screen viewing.
 
 ###Technologies Used
+ HTML5
+ CSS3
+ Bootstrap
+ Javascript
+ d3 library
+ Crossfilter library
+ Queue for data retrievals

###How was it deployed and tested
By using Git locally as my VCS (Version Control System) and then uploading to Github. 
It was tested by selecting countries on the drop down list and interacting with each graph element and seeing the 
changes in others. It was also cross-checked with the original comma separated value file to ensure the correct data 
was being reported.   
     

