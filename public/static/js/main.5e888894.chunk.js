(this.webpackJsonpback=this.webpackJsonpback||[]).push([[0],{171:function(e,t,a){},201:function(e,t){},296:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a.n(r),c=a(60),s=a.n(c),l=a(77),i=(a(171),a(51)),o=a(32),d=a(53),b=a(144),u=a.n(b),_=a(300),j=a(301),p=a(299),m=a(145),h=a.n(m),f=a(9);var x=function(e){var t=e.data,a=Object(r.useState)(),n=Object(d.a)(a,2),c=n[0],s=n[1];Object(r.useEffect)((function(){h.a.get("https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data").then((function(e){s(e.vaccination_trends_data.Administered_7_Day_Rolling_Average)})).catch((function(e){console.log(e)}))}),[]);var l={pop:331449281,vdd:t.entry.Doses_Distributed,advdg:c||1431517},i=new Date,o=Math.ceil(Object(_.a)("((pop * .7) - (vdd * .5))/(advdg * .5 )",l)),b=Object(j.a)(Object(p.a)(i,106),"MMM Lo, yyyy");return Object(f.jsxs)("div",{className:"card border-dark green stacks_head",children:[Object(f.jsxs)("div",{className:"card-header card-header-vcenter text-capitalize stacks-header ",children:[Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"calendar-check",class:"svg-inline--fa fa-calendar-check fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"})}),Object(f.jsx)("h5",{className:"title",children:"Back To Normal On"})]}),Object(f.jsxs)("div",{className:"d-flex flex-row-reverse justify-content-evenly align-items-center inner_container",children:[Object(f.jsxs)("div",{className:"card-body text-center card-inner card-inner-big",children:[Object(f.jsx)("h4",{className:"num-days card-title ",children:Object(f.jsx)(u.a,{end:o,delay:.5,duration:1})}),Object(f.jsx)("p",{className:"card-text fw-bold ",children:Object(f.jsx)("strong",{children:"days"})})]}),Object(f.jsxs)("strong",{children:["OR",Object(f.jsx)("br",{}),"IN"]}),Object(f.jsxs)("div",{className:"card-body text-center card-inner",children:[Object(f.jsx)("h4",{className:"date card-title ",children:b.split(",")[0]}),Object(f.jsx)("p",{className:"card-text text-center",children:Object(f.jsx)("strong",{children:b.split(",")[1]})})]})]})]})};var O=function(e){var t=e.title,a=e.data.entry,r=a.Administered_Dose1_Recip,n=r-a.Series_Complete_Yes,c=n/a.Census*100;return Object(f.jsxs)("div",{className:"card border-dark  partially stacks",children:[Object(f.jsxs)("div",{className:"card-header card-header-vcenter text-capitalizes stacks-header ",children:[Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"syringe",className:"svg-inline--fa fa-syringe fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"})}),Object(f.jsx)("h5",{className:"title",children:t})]}),Object(f.jsxs)("div",{className:"d-flex justify-content-evenly inner_container",children:[Object(f.jsxs)("div",{className:"card-body text-center card-inner ",children:[Object(f.jsx)("h4",{className:"card-title .4 ",children:r?n.toLocaleString():"N/A"}),Object(f.jsx)("p",{className:"card-text fw-bold",children:Object(f.jsx)("strong",{children:"people"})})]}),Object(f.jsxs)("div",{className:"card-body text-center card-inner",children:[Object(f.jsxs)("h4",{className:"card-title .4 ",children:[Number.parseFloat(c).toPrecision(3),"%"]}),Object(f.jsx)("p",{className:"card-text text-center fw-bold ",children:"of the population"})]})]})]})};var g=function(e){var t=e.title,a=e.data.entry,r=a.Administered_Dose1_Recip,n=a.Administered_Dose1_Pop_Pct;return Object(f.jsxs)("div",{className:"card border-dark  purple stacks",children:[Object(f.jsxs)("div",{className:"card-header card-header-vcenter text-capitalize stacks-header ",children:[Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"syringe",className:"svg-inline--fa fa-syringe fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"})}),Object(f.jsx)("h5",{className:"title",children:t})]}),Object(f.jsxs)("div",{className:"d-flex justify-content-evenly inner_container",children:[Object(f.jsxs)("div",{className:"card-body text-center card-inner ",children:[Object(f.jsx)("h4",{className:"card-title ",children:r?r.toLocaleString():"N/A"}),Object(f.jsx)("p",{className:"card-text fw-bold",children:Object(f.jsx)("strong",{children:"people"})})]}),Object(f.jsxs)("div",{className:"card-body text-center card-inner",children:[Object(f.jsxs)("h4",{className:"card-title ",children:[Number.parseFloat(n).toPrecision(3),"%"]}),Object(f.jsx)("p",{className:"card-text text-center fw-bold ",children:"of the population"})]})]})]})};var v=function(e){var t=e.title,a=e.data.entry,r=a.Series_Complete_Yes,n=a.Series_Complete_Pop_Pct;return Object(f.jsxs)("div",{className:"card border-dark  fully stacks",children:[Object(f.jsxs)("div",{className:"card-header card-header-vcenter text-capitalize stacks-header",children:[Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"syringe",className:"svg-inline--fa fa-syringe fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"})}),Object(f.jsx)("h5",{className:"title",children:t})]}),Object(f.jsxs)("div",{className:"d-flex justify-content-evenly inner_container",children:[Object(f.jsxs)("div",{className:"card-body text-center card-inner ",children:[Object(f.jsx)("h4",{className:"card-title .4",children:r?r.toLocaleString():0}),Object(f.jsx)("p",{className:"card-text fw-bold ",children:Object(f.jsx)("strong",{children:"people"})})]}),Object(f.jsxs)("div",{className:"card-body text-center card-inner",children:[Object(f.jsxs)("h4",{className:"card-title .4 ",children:[Number.parseFloat(n).toPrecision(3),"%"]}),Object(f.jsx)("p",{className:"card-text text-center",children:Object(f.jsx)("strong",{children:"of the population"})})]})]})]})};var y,P=function(e){var t=e.title,a=e.data.entry,r=a.Administered_Dose1_Recip,n=a.Administered_Dose1_Pop_Pct,c=a.Census;return Object(f.jsxs)("div",{className:"card border-dark  red stacks",children:[Object(f.jsxs)("div",{className:"card-header card-header-vcenter text-capitalize stacks-header",children:[Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"syringe",className:"svg-inline--fa fa-syringe fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"})}),Object(f.jsx)("h5",{className:"title",children:t})]}),Object(f.jsxs)("div",{className:"d-flex justify-content-evenly inner_container",children:[Object(f.jsxs)("div",{className:"card-body text-center card-inner ",children:[Object(f.jsx)("h4",{className:"card-title .4",children:r?(c-r).toLocaleString():"N/A"}),Object(f.jsx)("p",{className:"card-text fw-bold ",children:Object(f.jsx)("strong",{children:"people"})})]}),Object(f.jsxs)("div",{className:"card-body text-center card-inner",children:[Object(f.jsxs)("h4",{className:"card-title .4 ",children:[Number.parseFloat(100-n).toPrecision(3),"%"]}),Object(f.jsx)("p",{className:"card-text text-center",children:Object(f.jsx)("strong",{children:"of the population"})})]})]})]})},C=a(31),S=(a(121),a(50)),N=a(302),w=Object(o.gql)(y||(y=Object(i.a)(['\n\tquery GetChartInfo {\n\t\tentriesBy(state: "United States", from: "2021-03-08", to: "2021-05-01") {\n\t\t\tdate\n\t\t\tSeries_Complete_Yes\n\t\t\tSeries_Complete_Moderna\n\t\t\tSeries_Complete_Pfizer\n\t\t\tSeries_Complete_Janssen\n\t\t\tSeries_Complete_Unk_Manuf\n\t\t}\n\t}\n']))),k=function(e){var t=e.entriesBy,a=[];return t.forEach((function(e){a.includes(e.date)||a.push(e.date)})),[].concat(a).sort((function(e,t){return new Date(e)-new Date(t)})).reverse().reduce((function(e,t,a){return a%14===0&&e.push("".concat(Object(N.a)(new Date(t),new Date)," ago")),e}),[])},A=function(e,t,a){var r=e.entriesBy;return Object(C.a)(r).sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})).reduce((function(e,a,r){return r%14===0&&e.push(Math.ceil(a[t]/(a.Series_Complete_Moderna+a.Series_Complete_Pfizer+a.Series_Complete_Janssen+a.Series_Complete_Unk_Manuf)*100)),e}),[])};var D,M=function(){var e=Object(o.useQuery)(w),t=e.loading,a=e.error,r=e.data;if(t)return Object(f.jsx)("p",{children:"Loading..."});if(a)return Object(f.jsx)("p",{children:"Error :("});var n={labels:k(r),datasets:[{backgroundColor:"rgb(179,157,219)",borderColor:"rgb(179,157,219)",data:A(r,["Series_Complete_Janssen"]),label:"Janssen"},{backgroundColor:"rgb(255,183,78)",borderColor:"rgb(255,183,78)",data:A(r,["Series_Complete_Pfizer"]),label:"Pfizer"},{backgroundColor:"rgb(252,126,152)",borderColor:"rgb(252,126,152)",data:A(r,["Series_Complete_Unk_Manuf"]),label:"Unknown"},{backgroundColor:"rgb(187,222,251)",borderColor:"rgb(187,222,251)",data:A(r,["Series_Complete_Moderna"]),label:"Moderna"}]};return Object(f.jsxs)("div",{className:"card border-dark",children:[Object(f.jsx)("div",{className:"card-header-dark text-center partially chart_title",children:"Vaccinations By Manufacturer"}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)(S.HorizontalBar,{data:n,options:{animation:{duration:0},maintainAspectRatio:!1,plugins:{labels:[{render:"percentage"}],datalabels:{color:"#303030",display:function(e){return"".concat(e.dataset.data[e.dataIndex],"%")},font:{weight:"bold"},formatter:function(e){return e>8?e+"%":""}}},tooltips:{mode:"index",axis:"y"},legend:{display:!1,position:"bottom",labels:{fontColor:"white",fontStyle:"bold"}},scales:{yAxes:[{stacked:!0,ticks:{callback:function(e,t,a){return"".concat(e)},fontColor:"white",fontStyle:"bold"},gridLines:{display:!1}}],xAxes:[{stacked:!0,ticks:{max:100,fontColor:"white",fontStyle:"bold",callback:function(e,t,a){return"".concat(e,"%")}},gridLines:{display:!1}}]}}})})]})},L=a(2),z=Object(o.gql)(D||(D=Object(i.a)(['\n\tquery GetChartInfo {\n\t\tentriesBy(state: "United States", from: "2021-03-15", to: "2021-05-01") {\n\t\t\tdate\n\t\t\tAdministered_Dose1_Pop_Pct\n\t\t\tSeries_Complete_Pop_Pct\n\t\t}\n\t}\n']))),R=function(e){var t=e.entriesBy,a=[];return t.forEach((function(e){a.includes(e.date)||a.push(e.date)})),[].concat(a).sort((function(e,t){return new Date(e)-new Date(t)})).reduce((function(e,t,a){return a%7===0&&e.push(Object(j.a)(new Date(t),"MMMM do")),e}),[])},B=function(e,t){var a=e.entriesBy;return Object(C.a)(a).sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:e.date-t.date})).reduce((function(e,a,r){return r%7===0&&e.push(a[t]),e}),[])},F=function(e,t,a){var r=e.entriesBy;return Object(C.a)(r).sort((function(e,t){return e.date-t.date})).reduce((function(e,r,n){return n%7===0&&e.push(Object(L.me)(r[t]-r[a],3)),e}),[])};var U=function(){var e=Object(o.useQuery)(z),t=e.loading,a=e.error,r=e.data;if(t)return Object(f.jsx)("p",{children:"Loading..."});if(a)return Object(f.jsx)("p",{children:"Error :("});var n="Series_Complete_Pop_Pct",c={labels:R(r),datasets:[{type:"bar",label:"Fully Vaccinated",backgroundColor:"rgb(187,222,251)",borderColor:"rgb(187,222,251)",data:B(r,[n])},{type:"bar",label:"Only 1 Dose",backgroundColor:"rgb(255,183,78)",borderColor:"rgb(255,183,78)",data:F(r,["Administered_Dose1_Pop_Pct"],[n])}]};return Object(f.jsxs)("div",{className:"card border-dark data_head",children:[Object(f.jsx)("div",{className:"card-header-dark text-center green chart_title",children:"Vaccinations of US Population"}),Object(f.jsx)("div",{className:"card-body d-flex justify-content-center align-items-center",children:Object(f.jsx)("div",{className:"vacchart",children:Object(f.jsx)(S.Bar,{data:c,options:{animation:{duration:0},maintainAspectRatio:!1,responsive:!0,plugins:{labels:[{render:function(e){}}],datalabels:{color:"#303030",display:function(e){return"".concat(e.dataset.data[e.dataIndex],"%")},font:{weight:"bold",fontFamily:"Montserrat"},formatter:function(e){return e>1?e+" %":""}}},tooltips:{mode:"index",xAlign:"center",yAlign:"bottom"},legend:{display:!0,labels:{fontColor:"white",fontStyle:"bold",fontFamily:"Montserrat"}},scales:{yAxes:[{stacked:!0,ticks:{max:50,stepSize:10,callback:function(e,t,a){return"".concat(e,"%")},fontColor:"white",fontStyle:"bold",fontFamily:"Montserrat"},gridLines:{color:"#444",zeroLineColor:"white"}}],xAxes:[{stacked:!0,ticks:{fontColor:"white",fontStyle:"bold",fontFamily:"Montserrat"},gridLines:{color:"#444"}}]}}})})})]})},J=(a(295),function(e,t){return Math.ceil(e/t*100)});var V,I=function(e){var t=e.data.entry,a=t.Administered_Dose1_Recip_18Plus,r=t.Administered_Dose1_Recip_18PlusPop_Pct,n=t.Administered_Dose1_Recip_65Plus,c=t.Administered_Dose1_Recip_65PlusPop_Pct,s=t.Series_Complete_18Plus,l=t.Series_Complete_18PlusPop_Pct,i=t.Series_Complete_65Plus,o=t.Series_Complete_65PlusPop_Pct,d=t.Series_Complete_Pfizer_65Plus,b=t.Series_Complete_Pfizer_18Plus,u=t.Series_Complete_Janssen_18Plus,_=t.Series_Complete_Janssen_65Plus,j=t.Series_Complete_Moderna_18Plus,p=t.Series_Complete_Moderna_65Plus,m=t.Series_Complete_Unk_Manuf_18Plus,h=t.Series_Complete_Unk_Manuf_65Plus,x={atleastOne:n,fully:i,fully_pct:o,partially:n-i,partially_pct:c},O={atleastOne:a,fully:s,fully_pct:l,partially:a-s,partially_pct:r},g=Math.ceil(n/(c/100)),v=Math.ceil(a/(r/100)),y=x.partially,P=x.fully,C=[y,P,g-y-P],N=[O.partially,O.fully,v-O.partially-O.fully],w=function(e){return{labels:["Only 1 Dose","Fully Vaccinated","Not Vaccinated"],datasets:[{data:e,backgroundColor:["rgba(255,183,79,1)","rgba(187,222,251,1)","rgba(252,126,151,1)"],borderColor:["rgba(255,183,79,1)","rgba(187,222,251,1)","rgba(252,126,151,1)"],borderWidth:0}]}},k={animation:{duration:0},cutoutPercentage:40,responsive:!0,maintainAspectRatio:!0,legend:{display:!1,position:"bottom",align:"start"},plugins:{labels:[{render:"label",fontColor:"#FFF",fontStyle:"bold",position:"outside",arc:!0,outsidePadding:4,textMargin:4,overlap:!1},{showActualPercentages:!1,render:"percentage",precision:1,fontStyle:"bold",fontColor:"#303030"}],datalabels:{color:"white",display:!1}}},A=b+j+u+m,D=d+p+_+h,M={labels:["\u2265 18 Years Of Age","\u2265 65 Years Of Age"],datasets:[{label:"Janssen",backgroundColor:"rgb(179,157,219)",borderColor:"rgb(179,157,219)",data:[J(u,A),J(_,D)]},{label:"Pfizer",backgroundColor:"rgb(255,183,78)",borderColor:"rgb(255,183,78)",data:[J(b,A),J(d,D)]},{label:"Unknown",backgroundColor:"rgb(252,126,152)",borderColor:"rgb(252,126,152)",data:[J(m,A),J(h,D)]},{label:"Moderna",backgroundColor:"rgb(187,222,251)",borderColor:"rgb(187,222,251)",data:[J(j,A),J(p,D)]}]};return Object(f.jsxs)("div",{className:"card border-dark data_stack",children:[Object(f.jsx)("div",{className:"card-header-dark text-center chart_title purple",children:"Vaccinated Percentage by Age Group"}),Object(f.jsxs)("div",{className:"donuts",children:[Object(f.jsxs)("div",{className:"card-body text-center donut",children:[Object(f.jsxs)("div",{className:"donut_title white pb-3 fw-bold",children:[" ","Adults 18 and Older"]}),Object(f.jsx)(S.Doughnut,{data:w(N),options:k})]}),Object(f.jsxs)("div",{className:"card-body text-center donut",children:[Object(f.jsx)("div",{className:"donut_title white pb-3 fw-bold",children:"Adults 65 and Older"}),Object(f.jsx)(S.Doughnut,{data:w(C),options:k})]})]}),Object(f.jsx)("div",{className:"card-body",children:Object(f.jsx)(S.HorizontalBar,{data:M,options:{animation:{duration:0},maintainAspectRatio:!1,aspectRatio:1,plugins:{labels:[{render:"percentage"}],datalabels:{color:"#303030",display:function(e){return"".concat(e.dataset.data[e.dataIndex],"%")},font:{weight:"bold"},formatter:function(e){return e>8?e+"%":""}}},tooltips:{mode:"index",axis:"y"},legend:{display:!1,labels:{fontColor:"white",fontStyle:"bold"}},scales:{yAxes:[{stacked:!0,ticks:{callback:function(e,t,a){return"".concat(e)},fontColor:"white",fontStyle:"bold"},gridLines:{display:!1}}],xAxes:[{stacked:!0,ticks:{max:100,fontColor:"white",fontStyle:"bold",callback:function(e,t,a){return"".concat(e,"%")}},gridLines:{display:!1}}]}}})})]})},q=a(85),E=a(86),Y=Object(o.gql)(V||(V=Object(i.a)(['\n\tquery getStateInfo {\n\t\tstates {\n\t\t\tname\n\t\t\tentry(date: "2021-05-01") {\n\t\t\t\tAdministered_Dose1_Pop_Pct\n\t\t\t\tAdministered_Dose1_Recip\n\t\t\t\tAdministered_Dose1_Recip_18Plus\n\t\t\t\tAdministered_Dose1_Recip_18PlusPop_Pct\n\t\t\t\tAdministered_Dose1_Recip_65Plus\n\t\t\t\tAdministered_Dose1_Recip_65PlusPop_Pct\n\t\t\t\tCensus\n\t\t\t\tDoses_Distributed\n\t\t\t\tSeries_Complete_18Plus\n\t\t\t\tSeries_Complete_18PlusPop_Pct\n\t\t\t\tSeries_Complete_65Plus\n\t\t\t\tSeries_Complete_65PlusPop_Pct\n\t\t\t\tSeries_Complete_Janssen\n\t\t\t\tSeries_Complete_Janssen_18Plus\n\t\t\t\tSeries_Complete_Janssen_65Plus\n\t\t\t\tSeries_Complete_Moderna\n\t\t\t\tSeries_Complete_Moderna_18Plus\n\t\t\t\tSeries_Complete_Moderna_65Plus\n\t\t\t\tSeries_Complete_Pfizer\n\t\t\t\tSeries_Complete_Pfizer_18Plus\n\t\t\t\tSeries_Complete_Pfizer_65Plus\n\t\t\t\tSeries_Complete_Pop_Pct\n\t\t\t\tSeries_Complete_Unk_Manuf_18Plus\n\t\t\t\tSeries_Complete_Unk_Manuf_65Plus\n\t\t\t\tSeries_Complete_Yes\n\t\t\t\tdate\n\t\t\t}\n\t\t}\n\t}\n'])));var H,G=function(){var e=Object(o.useQuery)(Y),t=e.loading,a=e.error,r=e.data;if(t)return Object(f.jsx)("p",{children:"Loading..."});if(a)return Object(f.jsx)("p",{children:"Error :("});var n=r.states,c=Object(C.a)(n).sort((function(e,t){return e.entry.Series_Complete_Pop_Pct<t.entry.Series_Complete_Pop_Pct?1:e.entry.Series_Complete_Pop_Pct>t.entry.Series_Complete_Pop_Pct?-1:0}));return Object(f.jsx)(q.a,{defaultActiveKey:"0",children:c.reduce((function(e,t,a){var r=t.name;return"United States"!==r&&t.entry.Series_Complete_Pop_Pct&&t.entry.Administered_Dose1_Recip&&e.push(Object(f.jsxs)(E.a,{children:[Object(f.jsxs)(q.a.Toggle,{as:E.a.Header,eventKey:a+1,children:[Object(f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",className:"svg-inline--fa fa-chevron-down fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(f.jsx)("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"})}),r]}),Object(f.jsx)(q.a.Collapse,{eventKey:a+1,children:Object(f.jsx)(E.a.Body,{className:"list_container",children:Object(f.jsx)("div",{className:"list"})})})]},a)),e}),[])})},Q=(a(296),Object(o.gql)(H||(H=Object(i.a)(["\n\tquery GetInfo($date: String!, $state: String!) {\n\t\tentry(date: $date, state: $state) {\n\t\t\tAdministered_Dose1_Pop_Pct\n\t\t\tAdministered_Dose1_Recip\n\t\t\tAdministered_Dose1_Recip_18Plus\n\t\t\tAdministered_Dose1_Recip_18PlusPop_Pct\n\t\t\tAdministered_Dose1_Recip_65Plus\n\t\t\tAdministered_Dose1_Recip_65PlusPop_Pct\n\t\t\tCensus\n\t\t\tDoses_Distributed\n\t\t\tSeries_Complete_18Plus\n\t\t\tSeries_Complete_18PlusPop_Pct\n\t\t\tSeries_Complete_65Plus\n\t\t\tSeries_Complete_65PlusPop_Pct\n\t\t\tSeries_Complete_Janssen\n\t\t\tSeries_Complete_Janssen_18Plus\n\t\t\tSeries_Complete_Janssen_65Plus\n\t\t\tSeries_Complete_Moderna\n\t\t\tSeries_Complete_Moderna_18Plus\n\t\t\tSeries_Complete_Moderna_65Plus\n\t\t\tSeries_Complete_Pfizer\n\t\t\tSeries_Complete_Pfizer_18Plus\n\t\t\tSeries_Complete_Pfizer_65Plus\n\t\t\tSeries_Complete_Pop_Pct\n\t\t\tSeries_Complete_Unk_Manuf_18Plus\n\t\t\tSeries_Complete_Unk_Manuf_65Plus\n\t\t\tSeries_Complete_Yes\n\t\t\tdate\n\t\t}\n\t}\n"]))));var T=function(){var e=Object(o.useQuery)(Q,{variables:{date:"2021-05-01",state:"United States"}}),t=e.loading,a=e.error,r=e.data;return t?Object(f.jsx)("p",{children:"Loading..."}):a?(console.log(a),"Error! ".concat(a)):(console.log(r),Object(f.jsxs)("div",{className:"d-flex flex-column justify-content-center my-6 wrap",children:[Object(f.jsx)("h1",{className:"title title-mobile text-center",children:"COVID-19 Vaccinations in the US"}),Object(f.jsxs)("section",{className:"main",children:[Object(f.jsxs)("div",{className:"top",children:[Object(f.jsxs)("div",{className:"info",children:[Object(f.jsx)(x,{data:r}),Object(f.jsx)(g,{title:"At Least One Dose",data:r}),Object(f.jsx)(O,{title:"Only One Dose",data:r}),Object(f.jsx)(v,{title:"Fully Vaccinated",data:r}),Object(f.jsx)(P,{title:"Not Vaccinated",data:r})]}),Object(f.jsxs)("div",{className:"data",children:[Object(f.jsx)(U,{}),Object(f.jsx)(I,{data:r})]})]}),Object(f.jsx)(M,{data:r}),Object(f.jsx)(G,{})]})]}))},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,303)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},K=new o.ApolloClient({uri:"/graphql",cache:new o.InMemoryCache});s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(l.ApolloProvider,{client:K,children:Object(f.jsx)(T,{})})}),document.getElementById("root")),$()}},[[297,1,2]]]);
//# sourceMappingURL=main.5e888894.chunk.js.map