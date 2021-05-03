(this.webpackJsonpback=this.webpackJsonpback||[]).push([[0],{171:function(e,t,r){},201:function(e,t){},296:function(e,t,r){},297:function(e,t,r){"use strict";r.r(t);var n=r(10),a=r.n(n),s=r(60),c=r.n(s),l=r(77),i=(r(171),r(50)),o=r(31),d=r(53),b=r(51),_=r.n(b),u=r(299),p=r(144),j=r.n(p),m=r(9);var f=function(e){var t=e.data,r=Object(n.useState)(),a=Object(d.a)(r,2),s=a[0],c=a[1];Object(n.useEffect)((function(){j.a.get("https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data").then((function(e){c(e.vaccination_trends_data.Administered_7_Day_Rolling_Average)})).catch((function(e){console.log(e)}))}),[]);var l={pop:331449281,vdd:t.entry.Doses_Distributed,advdg:s||1431517};return Object(m.jsx)("div",{className:"card border-dark mb-3 green ocd align-items-center justify-content-center",children:Object(m.jsxs)("div",{className:"card-header card-header-center text-uppercase",children:[Object(m.jsx)("h1",{className:"display-6 text-center fw-bold",children:"Days until normal :"}),Object(m.jsx)("h2",{className:" display-3 text-center fully fw-bold monts",children:Object(m.jsx)(_.a,{end:Math.ceil(Object(u.a)("((pop * .7) - (vdd * .5))/(advdg * .5 )",l))})}),Object(m.jsx)("p",{className:"text-center fw-bold",children:" days"})]})})};var x=function(e){var t=e.title,r=e.data.entry,n=r.Administered_Dose1_Recip,a=(r.Administered_Dose1_Pop_Pct,r.Series_Complete_Yes),s=(r.Series_Complete_Pop_Pct,r.Census),c=n-a;return Object(m.jsx)("div",{className:"partially",children:Object(m.jsxs)("div",{className:"card  mb-3",children:[Object(m.jsxs)("div",{className:"card-header card-header-vcenter text-uppercase ",children:[Object(m.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"syringe",className:"svg-inline--fa fa-syringe fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(m.jsx)("path",{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"})}),Object(m.jsx)("strong",{children:t})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-evenly flex-wrap",children:[Object(m.jsxs)("div",{className:"card-body text-center ",children:[Object(m.jsx)("h4",{className:"card-title display-6 monst",children:n?c.toLocaleString():"N/A"}),Object(m.jsx)("p",{className:"card-text fw-bold",children:Object(m.jsx)("strong",{children:"people"})})]}),Object(m.jsxs)("div",{className:"card-body text-center",children:[Object(m.jsx)("h4",{className:"card-title display-6 monts",children:Object(m.jsx)(_.a,{suffix:"%",decimals:2===(c/s*100).toString().length?0:1,end:c/s*100})}),Object(m.jsx)("p",{className:"card-text text-center fw-bold ",children:"of the population"})]})]})]})})};var h=function(e){var t=e.title,r=e.data.entry,n=r.Series_Complete_Yes,a=r.Series_Complete_Pop_Pct;return Object(m.jsx)("div",{className:"fully",children:Object(m.jsxs)("div",{className:"card mb-3",children:[Object(m.jsxs)("div",{className:"card-header card-header-vcenter text-uppercase",children:[Object(m.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"syringe",className:"svg-inline--fa fa-syringe fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(m.jsx)("path",{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"})}),Object(m.jsx)("strong",{children:t})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-evenly flex-wrap",children:[Object(m.jsxs)("div",{className:"card-body text-center ",children:[Object(m.jsx)("h4",{className:"card-title display-6",children:n?n.toLocaleString():0}),Object(m.jsx)("p",{className:"card-text fw-bold ",children:Object(m.jsx)("strong",{children:"people"})})]}),Object(m.jsxs)("div",{className:"card-body text-center",children:[Object(m.jsx)("h4",{className:"card-title display-6 monts",children:Object(m.jsx)(_.a,{suffix:"%",decimals:n?2===a.toString().length?0:1:0,end:a})}),Object(m.jsx)("p",{className:"card-text text-center",children:Object(m.jsx)("strong",{children:"of the population"})})]})]})]})})};var g,O=function(e){var t=e.title,r=e.data.entry,n=r.Administered_Dose1_Recip,a=r.Administered_Dose1_Pop_Pct,s=r.Census;return Object(m.jsx)("div",{className:"red",children:Object(m.jsxs)("div",{className:"card mb-3",children:[Object(m.jsxs)("div",{className:"card-header card-header-vcenter text-uppercase",children:[Object(m.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"syringe",className:"svg-inline--fa fa-syringe fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(m.jsx)("path",{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"})}),Object(m.jsx)("strong",{children:t})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-evenly flex-wrap",children:[Object(m.jsxs)("div",{className:"card-body text-center ",children:[Object(m.jsx)("h4",{className:"card-title display-6",children:n?(s-n).toLocaleString():"N/A"}),Object(m.jsx)("p",{className:"card-text fw-bold ",children:Object(m.jsx)("strong",{children:"people"})})]}),Object(m.jsxs)("div",{className:"card-body text-center",children:[Object(m.jsx)("h4",{className:"card-title display-6 monts",children:Object(m.jsx)(_.a,{suffix:"%",decimals:2===(100-a).toString().length?0:1,end:100-a})}),Object(m.jsx)("p",{className:"card-text text-center",children:Object(m.jsx)("strong",{children:"of the population"})})]})]})]})})},y=r(30),P=r(49),C=(r(137),r(301)),v=Object(o.gql)(g||(g=Object(i.a)(['\n\tquery GetChartInfo {\n\t\tentriesBy(state: "United States", from: "2021-03-08", to: "2021-05-01") {\n\t\t\tdate\n\t\t\tSeries_Complete_Yes\n\t\t\tSeries_Complete_Moderna\n\t\t\tSeries_Complete_Pfizer\n\t\t\tSeries_Complete_Janssen\n\t\t\tSeries_Complete_Unk_Manuf\n\t\t}\n\t}\n']))),S=function(e){var t=e.entriesBy,r=[];return t.forEach((function(e){r.includes(e.date)||r.push(e.date)})),[].concat(r).sort((function(e,t){return new Date(e)-new Date(t)})).reverse().reduce((function(e,t,r){return r%14===0&&e.push("".concat(Object(C.a)(new Date(t),new Date)," ago")),e}),[])},w=function(e,t,r){var n=e.entriesBy;return Object(y.a)(n).sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})).reduce((function(e,r,n){return n%14===0&&e.push(Math.ceil(r[t]/(r.Series_Complete_Moderna+r.Series_Complete_Pfizer+r.Series_Complete_Janssen+r.Series_Complete_Unk_Manuf)*100)),e}),[])};var N,k=function(){var e=Object(o.useQuery)(v),t=e.loading,r=e.error,n=e.data;if(t)return Object(m.jsx)("p",{children:"Loading..."});if(r)return Object(m.jsx)("p",{children:"Error :("});var a={labels:S(n),datasets:[{backgroundColor:"rgb(179,157,219)",borderColor:"rgb(179,157,219)",data:w(n,["Series_Complete_Janssen"]),label:"Janssen"},{backgroundColor:"rgb(255,183,78)",borderColor:"rgb(255,183,78)",data:w(n,["Series_Complete_Pfizer"]),label:"Pfizer"},{backgroundColor:"rgb(252,126,152)",borderColor:"rgb(252,126,152)",data:w(n,["Series_Complete_Unk_Manuf"]),label:"Unknown"},{backgroundColor:"rgb(187,222,251)",borderColor:"rgb(187,222,251)",data:w(n,["Series_Complete_Moderna"]),label:"Moderna"}]};return Object(m.jsxs)("div",{className:"card border-dark mb-3",children:[Object(m.jsx)("div",{className:"card-header-dark text-center green fs-4 fw-bold",children:"Vaccinations By Manufacturer"}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)(P.HorizontalBar,{data:a,options:{maintainAspectRatio:!1,plugins:{labels:[{render:"percentage"}],datalabels:{color:"#303030",display:function(e){return"".concat(e.dataset.data[e.dataIndex],"%")},font:{weight:"bold"},formatter:function(e){return e>8?e+"%":""}}},tooltips:{mode:"index",axis:"y"},legend:{display:!1,position:"bottom",labels:{fontColor:"white",fontStyle:"bold"}},scales:{yAxes:[{stacked:!0,ticks:{callback:function(e,t,r){return"".concat(e)},fontColor:"white",fontStyle:"bold"},gridLines:{display:!1}}],xAxes:[{stacked:!0,ticks:{max:100,fontColor:"white",fontStyle:"bold",callback:function(e,t,r){return"".concat(e,"%")}},gridLines:{display:!1}}]}}})})]})},A=r(159),D=r(300),M=r(2),L=Object(o.gql)(N||(N=Object(i.a)(['\n\tquery GetChartInfo {\n\t\tentriesBy(state: "United States", from: "2021-03-15", to: "2021-05-01") {\n\t\t\tdate\n\t\t\tAdministered_Dose1_Pop_Pct\n\t\t\tSeries_Complete_Pop_Pct\n\t\t}\n\t}\n']))),z=function(e){var t=e.entriesBy,r=[];return t.forEach((function(e){r.includes(e.date)||r.push(e.date)})),[].concat(r).sort((function(e,t){return new Date(e)-new Date(t)})).reduce((function(e,t,r){return r%7===0&&e.push(Object(D.a)(new Date(t),"MMMM do")),e}),[])},R=function(e,t){var r=e.entriesBy;return Object(y.a)(r).sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:e.date-t.date})).reduce((function(e,r,n){return n%7===0&&e.push(r[t]),e}),[])},B=function(e,t,r){var n=e.entriesBy;return Object(y.a)(n).sort((function(e,t){return e.date-t.date})).reduce((function(e,n,a){return a%7===0&&e.push(Object(M.me)(n[t]-n[r],3)),e}),[])};var U=function(){var e=Object(o.useQuery)(L),t=e.loading,r=e.error,n=e.data;if(t)return Object(m.jsx)("p",{children:"Loading..."});if(r)return Object(m.jsx)("p",{children:"Error :("});var a="Series_Complete_Pop_Pct",s={labels:z(n),datasets:[{type:"bar",label:"Fully Vaccinated",backgroundColor:"rgb(187,222,251)",borderColor:"rgb(187,222,251)",data:R(n,[a])},{type:"bar",label:"Only 1 Dose",backgroundColor:"rgb(255,183,78)",borderColor:"rgb(255,183,78)",data:B(n,["Administered_Dose1_Pop_Pct"],[a])}]},c={maintainAspectRatio:!1,plugins:{labels:[{render:function(e){}}],datalabels:Object(A.a)({color:"#303030",display:function(e){return"".concat(e.dataset.data[e.dataIndex],"%")},font:{weight:"bold",family:"Montserrat"},formatter:function(e){return"".concat(Object(M.me)(e),"%")}},"formatter",(function(e){return e>1?e+" %":""}))},tooltips:{mode:"index",xAlign:"center",yAlign:"bottom"},legend:{display:!0,labels:{fontColor:"white",fontStyle:"bold"}},scales:{yAxes:[{stacked:!0,ticks:{max:50,stepSize:10,callback:function(e,t,r){return"".concat(e,"%")},fontColor:"white",fontStyle:"bold"},gridLines:{color:"#444",zeroLineColor:"white"}}],xAxes:[{stacked:!0,ticks:{fontColor:"white",fontStyle:"bold"},gridLines:{color:"#444"}}]}};return Object(m.jsxs)("div",{className:"card border-dark mb-3 ocd",children:[Object(m.jsx)("div",{className:"card-header-dark text-center green fs-4 fw-bold",children:"Vaccinations of US Population"}),Object(m.jsx)("div",{className:"card-body d-flex align-items-center",children:Object(m.jsx)("div",{className:"vacchart",children:Object(m.jsx)(P.Bar,{data:s,options:c})})})]})},J=(r(295),function(e,t){return Math.ceil(e/t*100)});var I,q=function(e){var t=e.data.entry,r=t.Administered_Dose1_Recip_18Plus,n=t.Administered_Dose1_Recip_18PlusPop_Pct,a=t.Administered_Dose1_Recip_65Plus,s=t.Administered_Dose1_Recip_65PlusPop_Pct,c=t.Series_Complete_18Plus,l=t.Series_Complete_18PlusPop_Pct,i=t.Series_Complete_65Plus,o=t.Series_Complete_65PlusPop_Pct,d=t.Series_Complete_Pfizer_65Plus,b=t.Series_Complete_Pfizer_18Plus,_=t.Series_Complete_Janssen_18Plus,u=t.Series_Complete_Janssen_65Plus,p=t.Series_Complete_Moderna_18Plus,j=t.Series_Complete_Moderna_65Plus,f=t.Series_Complete_Unk_Manuf_18Plus,x=t.Series_Complete_Unk_Manuf_65Plus,h={atleastOne:a,fully:i,fully_pct:o,partially:a-i,partially_pct:s},g={atleastOne:r,fully:c,fully_pct:l,partially:r-c,partially_pct:n},O=Math.ceil(a/(s/100)),y=Math.ceil(r/(n/100)),C=h.partially,v=h.fully,S=[C,v,O-C-v],w=[g.partially,g.fully,y-g.partially-g.fully],N=function(e){return{labels:["Only 1 Dose","Fully Vaccinated","Not Vaccinated"],datasets:[{data:e,backgroundColor:["rgba(255,183,79,1)","rgba(187,222,251,1)","rgba(252,126,151,1)"],borderColor:["rgba(255,183,79,1)","rgba(187,222,251,1)","rgba(252,126,151,1)"],borderWidth:0}]}},k={responsive:!0,maintainAspectRatio:!0,legend:{display:!1,position:"bottom",align:"start"},plugins:{labels:[{render:"label",fontColor:"#FFF",fontStyle:"bold",position:"outside",arc:!0,outsidePadding:4,textMargin:4,overlap:!1},{showActualPercentages:!1,render:"percentage",precision:1,fontStyle:"bold",fontColor:"#303030"}],datalabels:{color:"white",display:!1}}},A=b+p+_+f,D=d+j+u+x,M={labels:["\u2265 18 Years Of Age","\u2265 65 Years Of Age"],datasets:[{label:"Janssen",backgroundColor:"rgb(179,157,219)",borderColor:"rgb(179,157,219)",data:[J(_,A),J(u,D)]},{label:"Pfizer",backgroundColor:"rgb(255,183,78)",borderColor:"rgb(255,183,78)",data:[J(b,A),J(d,D)]},{label:"Unknown",backgroundColor:"rgb(252,126,152)",borderColor:"rgb(252,126,152)",data:[J(f,A),J(x,D)]},{label:"Moderna",backgroundColor:"rgb(187,222,251)",borderColor:"rgb(187,222,251)",data:[J(p,A),J(j,D)]}]};return Object(m.jsx)("div",{className:"age",children:Object(m.jsxs)("div",{className:"card border-dark mb-3",children:[Object(m.jsx)("div",{className:"card-header-dark text-center fs-4 fw-bold purple",children:"Vaccinated Percentage by Age Group"}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("div",{className:"donuts",children:[Object(m.jsxs)("div",{className:"card-body text-center donut",children:[Object(m.jsxs)("div",{className:"fs-5 white pb-3 fw-bold",children:[" ","Adults 18 and Older"]}),Object(m.jsx)(P.Doughnut,{data:N(w),options:k})]}),Object(m.jsxs)("div",{className:"card-body text-center donut",children:[Object(m.jsx)("div",{className:"fs-5 white pb-3 fw-bold",children:"Adults 65 and Older"}),Object(m.jsx)(P.Doughnut,{data:N(S),options:k})]})]}),Object(m.jsx)("div",{className:"hbar",children:Object(m.jsx)(P.HorizontalBar,{data:M,options:{maintainAspectRatio:!1,plugins:{labels:[{render:"percentage"}],datalabels:{color:"#303030",display:function(e){return"".concat(e.dataset.data[e.dataIndex],"%")},font:{weight:"bold"},formatter:function(e){return e>8?e+"%":""}}},tooltips:{mode:"index",axis:"y"},legend:{display:!1,labels:{fontColor:"white",fontStyle:"bold"}},scales:{yAxes:[{stacked:!0,ticks:{callback:function(e,t,r){return"".concat(e)},fontColor:"white",fontStyle:"bold"},gridLines:{display:!1}}],xAxes:[{stacked:!0,ticks:{max:100,fontColor:"white",fontStyle:"bold",callback:function(e,t,r){return"".concat(e,"%")}},gridLines:{display:!1}}]}}})})]})]})})},F=r(85),E=r(86),V=Object(o.gql)(I||(I=Object(i.a)(['\n\tquery getStateInfo {\n\t\tstates {\n\t\t\tname\n\t\t\tentry(date: "2021-04-28") {\n\t\t\t\tdate\n\t\t\t\tSeries_Complete_Pfizer_18Plus\n\t\t\t\tAdministered_Dose1_Pop_Pct\n\t\t\t\tAdministered_Dose1_Recip\n\t\t\t\tAdministered_Dose1_Recip_18Plus\n\t\t\t\tAdministered_Dose1_Recip_18PlusPop_Pct\n\t\t\t\tAdministered_Dose1_Recip_65Plus\n\t\t\t\tAdministered_Dose1_Recip_65PlusPop_Pct\n\t\t\t\tCensus\n\t\t\t\tDoses_Distributed\n\t\t\t\tSeries_Complete_18Plus\n\t\t\t\tSeries_Complete_18PlusPop_Pct\n\t\t\t\tSeries_Complete_65Plus\n\t\t\t\tSeries_Complete_65PlusPop_Pct\n\t\t\t\tSeries_Complete_Janssen\n\t\t\t\tSeries_Complete_Janssen_18Plus\n\t\t\t\tSeries_Complete_Janssen_65Plus\n\t\t\t\tSeries_Complete_Moderna\n\t\t\t\tSeries_Complete_Moderna_18Plus\n\t\t\t\tSeries_Complete_Moderna_65Plus\n\t\t\t\tSeries_Complete_Pfizer\n\t\t\t\tSeries_Complete_Pfizer_65Plus\n\t\t\t\tSeries_Complete_Pop_Pct\n\t\t\t\tSeries_Complete_Unk_Manuf_18Plus\n\t\t\t\tSeries_Complete_Unk_Manuf_65Plus\n\t\t\t\tSeries_Complete_Yes\n\t\t\t}\n\t\t}\n\t}\n'])));var Y,G=function(){var e=Object(o.useQuery)(V),t=e.loading,r=e.error,n=e.data;if(t)return Object(m.jsx)("p",{children:"Loading..."});if(r)return Object(m.jsx)("p",{children:"Error :("});var a=n.states,s=Object(y.a)(a).sort((function(e,t){return e.entry.Series_Complete_Pop_Pct<t.entry.Series_Complete_Pop_Pct?1:e.entry.Series_Complete_Pop_Pct>t.entry.Series_Complete_Pop_Pct?-1:0}));return Object(m.jsx)(F.a,{defaultActiveKey:"0",children:s.reduce((function(e,t,r){var n=t.name;return"United States"!==n&&t.entry.Series_Complete_Pop_Pct&&t.entry.Administered_Dose1_Recip&&e.push(Object(m.jsxs)(E.a,{children:[Object(m.jsxs)(F.a.Toggle,{as:E.a.Header,eventKey:r+1,children:[Object(m.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",className:"svg-inline--fa fa-chevron-down fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(m.jsx)("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"})}),n]}),Object(m.jsx)(F.a.Collapse,{eventKey:r+1,children:Object(m.jsxs)(E.a.Body,{children:[Object(m.jsx)(x,{title:"Only 1 Dose",data:t}),Object(m.jsx)(h,{title:"fully vaccinated",data:t}),Object(m.jsx)(O,{title:"not vaccinated",data:t}),Object(m.jsx)(q,{data:t})]})})]},r)),e}),[])})},Q=(r(296),Object(o.gql)(Y||(Y=Object(i.a)(['\n\tquery GetInfo {\n\t\tentry(date: "2021-05-01", state: "United States") {\n\t\t\tAdministered_Dose1_Pop_Pct\n\t\t\tAdministered_Dose1_Recip\n\t\t\tAdministered_Dose1_Recip_18Plus\n\t\t\tAdministered_Dose1_Recip_18PlusPop_Pct\n\t\t\tAdministered_Dose1_Recip_65Plus\n\t\t\tAdministered_Dose1_Recip_65PlusPop_Pct\n\t\t\tCensus\n\t\t\tDoses_Distributed\n\t\t\tSeries_Complete_18Plus\n\t\t\tSeries_Complete_18PlusPop_Pct\n\t\t\tSeries_Complete_65Plus\n\t\t\tSeries_Complete_65PlusPop_Pct\n\t\t\tSeries_Complete_Janssen\n\t\t\tSeries_Complete_Janssen_18Plus\n\t\t\tSeries_Complete_Janssen_65Plus\n\t\t\tSeries_Complete_Moderna\n\t\t\tSeries_Complete_Moderna_18Plus\n\t\t\tSeries_Complete_Moderna_65Plus\n\t\t\tSeries_Complete_Pfizer\n\t\t\tSeries_Complete_Pfizer_18Plus\n\t\t\tSeries_Complete_Pfizer_65Plus\n\t\t\tSeries_Complete_Pop_Pct\n\t\t\tSeries_Complete_Unk_Manuf_18Plus\n\t\t\tSeries_Complete_Unk_Manuf_65Plus\n\t\t\tSeries_Complete_Yes\n\t\t\tdate\n\t\t}\n\t}\n']))));var H=function(){var e=Object(o.useQuery)(Q),t=e.loading,r=e.error,n=e.data;return t?Object(m.jsx)("p",{children:"Loading..."}):r?Object(m.jsx)("p",{children:"Error :("}):Object(m.jsxs)("div",{className:"d-flex flex-column justify-content-center my-6 mx-2",children:[Object(m.jsx)("h1",{className:"title text-center",children:"Covid Vaccinations in the US"}),Object(m.jsxs)("section",{className:"main",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)(f,{data:n}),Object(m.jsx)(x,{title:"Only 1 Dose",data:n}),Object(m.jsx)(h,{title:"fully vaccinated",data:n}),Object(m.jsx)(O,{title:"not vaccinated",data:n})]}),Object(m.jsxs)("div",{className:"data",children:[Object(m.jsx)(U,{}),Object(m.jsx)(q,{data:n})]})]}),Object(m.jsx)(k,{data:n})]}),Object(m.jsx)(G,{})]})},K=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,302)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))},T=new o.ApolloClient({uri:"/graphql",cache:new o.InMemoryCache});c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(l.ApolloProvider,{client:T,children:Object(m.jsx)(H,{})})}),document.getElementById("root")),K()}},[[297,1,2]]]);
//# sourceMappingURL=main.f6bdd9f1.chunk.js.map