"use strict";(self.webpackChunkpower_pulse_project=self.webpackChunkpower_pulse_project||[]).push([[224],{7587:function(e,s,i){i.d(s,{Z:function(){return x}});var t=i(4942),r=i(2791),n=i(3733),a=i(5125),c="BasicModalWindow_backdrop__qR8QT",l="BasicModalWindow_modal__t-hN1",d="BasicModalWindow_modalCloseBtn__xCIln",o="BasicModalWindow_modalCloseBtnHidden__JYo4j",u="BasicModalWindow_modalCloseIcon__5cQIt",m=i(184),x=function(e){var s=e.children,i=e.onClose,x=e.showCloseBtn,g=void 0===x||x;(0,r.useEffect)((function(){var e=function(e){"Escape"===e.code&&i()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[i]);return(0,m.jsx)("div",{className:c,onClick:function(e){e.target===e.currentTarget&&i()},children:(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("button",{type:"button",className:(0,n.Z)(d,(0,t.Z)({},o,!g)),onClick:i,children:(0,m.jsx)("svg",{className:u,children:(0,m.jsx)("use",{href:a.Z+"#close_icon"})})}),s]})})}},332:function(e,s,i){i.d(s,{Z:function(){return o}});var t=i(1413),r=i(3433),n=i(4925),a=(i(2791),{hidden:"Button_hidden__yHMy6","modal-backdrop":"Button_modal-backdrop__A6BnN","is-hidden":"Button_is-hidden__-IhJD","swiper-pagination-bullet":"Button_swiper-pagination-bullet__ybCMR","swiper-pagination-bullet-active":"Button_swiper-pagination-bullet-active__VVknO","swiper-pagination":"Button_swiper-pagination__u2ZII",accentButton:"Button_accentButton__KKfrH",btn:"Button_btn__W1TTO",transparentButton:"Button_transparentButton__utX7c"}),c=i(3733),l=i(184),d=["title","styled","classes"],o=function(e){var s=e.title,i=void 0===s?"Title":s,o=e.styled,u=void 0===o?"accent":o,m=e.classes,x=void 0===m?[]:m,g=(0,n.Z)(e,d);return"accent"===u?(0,l.jsx)("button",(0,t.Z)((0,t.Z)({type:"button"},g),{},{className:c.Z.apply(void 0,[a.accentButton,a.btn].concat((0,r.Z)(x))),children:i})):"transparent"===u?(0,l.jsx)("button",(0,t.Z)((0,t.Z)({type:"button"},g),{},{className:c.Z.apply(void 0,[a.transparentButton,a.btn].concat((0,r.Z)(x))),children:i})):void 0}},3409:function(e,s,i){i.d(s,{Z:function(){return n}});i(2791);var t="Container_container__MM274",r=i(184),n=function(e){var s=e.children;return(0,r.jsx)("div",{className:t,children:s})}},646:function(e,s,i){i.d(s,{Z:function(){return c}});var t=i(3433),r=(i(2791),{hidden:"TitlePage_hidden__Y9DZT","modal-backdrop":"TitlePage_modal-backdrop__odjKb","is-hidden":"TitlePage_is-hidden__tnHIJ","swiper-pagination-bullet":"TitlePage_swiper-pagination-bullet__swd3q","swiper-pagination-bullet-active":"TitlePage_swiper-pagination-bullet-active__HM60O","swiper-pagination":"TitlePage_swiper-pagination__bqxC2",titlePage:"TitlePage_titlePage__EHOTO"}),n=i(3733),a=i(184),c=function(e){var s=e.children,i=e.classes,c=void 0===i?[]:i;return(0,a.jsx)("h2",{className:n.Z.apply(void 0,[r.titlePage].concat((0,t.Z)(c))),children:s})}},8295:function(e,s,i){i.r(s),i.d(s,{default:function(){return de}});var t=i(9439),r=i(4942),n=i(2791),a="ExercisesCategories_category-list__RHiZn",c="ExercisesCategories_category-name__QoAUM",l="ExercisesCategories_active__kx5wZ",d=i(3733),o=i(184),u={bodyParts:"Body parts",equipment:"Equipment",muscules:"Muscles"},m=function(e){var s=e.activeFilter,i=e.setActiveFilter,t=e.filterValues,n=e.setChosenCard;return(0,o.jsx)("ul",{className:a,children:t.map((function(e){var t;return(0,o.jsx)("li",{onClick:function(){return function(e){i(e),n(null)}(e)},className:(0,d.Z)((t={},(0,r.Z)(t,l,e===s),(0,r.Z)(t,c,!0),t)),children:u[e]},e)}))})},x="ExercisesItem_exercise-item-block__f4a2p",g="ExercisesItem_top-flex__NdcC4",p="ExercisesItem_exercise-name__rf9Ba",A="ExercisesItem_workout-tag__Ctgch",h="ExercisesItem_start-button__zonjf",j="ExercisesItem_arrow-svg__IX-sC",_="ExercisesItem_running-svg__oIfhz",b="ExercisesItem_middle-flex__w-S2k",N="ExercisesItem_stats-list__sk4l6",E="ExercisesItem_stat-item__JghZ9",v="ExercisesItem_stat-item-value__nLbZ4",C=i(5125),f=function(e){var s=e.exercise,i=e.setIsModalOpen,t=e.setAddedExercise;return(0,o.jsxs)("li",{className:x,children:[(0,o.jsxs)("div",{className:g,children:[(0,o.jsx)("p",{className:A,children:"workout"}),(0,o.jsxs)("button",{type:"button",className:h,onClick:function(){return i(!0),void t(s)},children:["Start",(0,o.jsx)("svg",{className:j,children:(0,o.jsx)("use",{href:C.Z+"#icon-arrow-right"})})]})]}),(0,o.jsxs)("div",{className:b,children:[(0,o.jsx)("svg",{className:_,children:(0,o.jsx)("use",{href:C.Z+"#running_stick_figure_icon"})}),(0,o.jsx)("h3",{className:p,children:s.name})]}),(0,o.jsxs)("ul",{className:N,children:[(0,o.jsxs)("li",{className:E,children:["Burned calories:"," ",(0,o.jsx)("span",{className:v,children:s.burnedCalories})]}),(0,o.jsxs)("li",{className:E,children:["Body part: ",(0,o.jsx)("span",{className:v,children:s.bodyPart})]}),(0,o.jsxs)("li",{className:E,children:["Target: ",(0,o.jsx)("span",{className:v,children:s.target})]})]})]})},w="ExercisesList_exercise-list__2qLT1",B=function(e){var s=e.exerciseList,i=e.setIsModalOpen,t=e.setAddedExercise;return(0,o.jsx)("ul",{className:w,children:s.map((function(e){return(0,o.jsx)(f,{exercise:e,setIsModalOpen:i,setAddedExercise:t},e._id)}))})},W="ExercisesSubcategoriesItem_exercise-card__XF+sg",I="ExercisesSubcategoriesItem_exercise-card-subcategory__3-v6q",y="ExercisesSubcategoriesItem_exercise-card-category__Ov2CI",Y=function(e){var s=e.name,i=e.category,t=e.imageURL,r=e.handleClick,n={backgroundImage:"linear-gradient(\n      to right,\n      rgba(4, 4, 4, 0.5),\n      rgba(4, 4, 5, 0.5)\n    ), url(".concat(t,")"),backgroundSize:"cover"};return(0,o.jsxs)("div",{className:W,style:n,onClick:function(){return r(s)},children:[(0,o.jsx)("h3",{className:I,children:s}),(0,o.jsx)("p",{className:y,children:i})]})},S=(i(6497),i(6966),i(7040)),Z=function(e){var s,i=e.activeFilter,t=e.setChosenCard,r=e.exerciseFilters[i],a=function(e){t(e)};return(0,n.useEffect)((function(){s&&s.destroy(!0,!0),s=new S.Z(".mySwiper",{slidesPerView:1,spaceBetween:20,grid:{rows:9,fill:"row"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,s){return'<span class="'.concat(s,'"></span>')}},breakpoints:{768:{direction:"horizontal",slidesPerView:3,spaceBetween:32,grid:{rows:3,fill:"row"}},1440:{slidesPerView:5,spaceBetween:32,grid:{rows:2,fill:"row"}}}})}),[i]),(0,n.useEffect)((function(){return function(){s&&s.destroy(!0,!0)}}),[i]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"swiper mySwiper",children:[(0,o.jsx)("div",{className:"swiper-wrapper",children:r&&r.map((function(e){return(0,o.jsx)("div",{className:"swiper-slide",children:(0,o.jsx)(Y,{name:e.name,category:e.filter,imageURL:e.imgURL,handleClick:a})},e._id)}))}),(0,o.jsx)("div",{className:"swiper-pagination"})]})})},M=i(646),P=i(3855),k="ExercisesPage_back-button__GcPgZ",Q="ExercisesPage_btn-svg__qLiyD",F="ExercisesPage_btn-text__hz2nt",G="ExercisesPage_category-flex-secondary__O-Bjl",T="ExercisesPage_category-flex__bv81C",U="ExercisesPage_page-wrapper__u0pAt",L=i(6351),K=i(2526),R=i(3409),V=i(7587),J={hidden:"AddExerciseForm_hidden__WMHnE","modal-backdrop":"AddExerciseForm_modal-backdrop__unLQN","is-hidden":"AddExerciseForm_is-hidden__2xAul","swiper-pagination-bullet":"AddExerciseForm_swiper-pagination-bullet__nwLXr","swiper-pagination-bullet-active":"AddExerciseForm_swiper-pagination-bullet-active__GY5VA","swiper-pagination":"AddExerciseForm_swiper-pagination__T4p3Z",container:"AddExerciseForm_container__6cM3u",button:"AddExerciseForm_button__rRZom",rightContainer:"AddExerciseForm_rightContainer__o52cX",gifWrapper:"AddExerciseForm_gifWrapper__2nStb",gif:"AddExerciseForm_gif__k13NZ",timer:"AddExerciseForm_timer__3yd7T",timerTitle:"AddExerciseForm_timerTitle__1ID9l",timerWrapper:"AddExerciseForm_timerWrapper__hmJ0d",remainingTime:"AddExerciseForm_remainingTime__AzShQ",timerButton:"AddExerciseForm_timerButton__T6NUU",timerButtonIcon:"AddExerciseForm_timerButtonIcon__eVoL-",calories:"AddExerciseForm_calories__vy1Wd",caloriesSpan:"AddExerciseForm_caloriesSpan__zwKrM",list:"AddExerciseForm_list__hRpZZ",listItem:"AddExerciseForm_listItem__Gb-Ez",itemTitle:"AddExerciseForm_itemTitle__YZ4ZS",itemValue:"AddExerciseForm_itemValue__OnET-",buttonContainer:"AddExerciseForm_buttonContainer__DY2ob"},X=i(332),O=i(8794),D=i(3402),z=function(e){var s=e.data,i=e.onSuccess,r=s._id,a=s.bodyPart,c=s.equipment,l=s.gifUrl,d=s.name,u=s.target,m=s.burnedCalories,x=s.time,g=(0,n.useState)(60*x),p=(0,t.Z)(g,2),A=p[0],h=p[1],j=(0,n.useState)(!1),_=(0,t.Z)(j,2),b=_[0],N=_[1],E=(0,P.I0)(),v=Math.floor(A/60*(m/3));return(0,o.jsxs)("div",{className:J.container,children:[(0,o.jsxs)("div",{className:J.leftContainer,children:[(0,o.jsx)("div",{className:J.gifWrapper,children:(0,o.jsx)("img",{src:l,alt:d,className:J.gif})}),(0,o.jsxs)("div",{className:J.timer,children:[(0,o.jsx)("p",{className:J.timerTitle,children:"Time"}),(0,o.jsx)("div",{className:J.timerWrapper,children:(0,o.jsx)(O.$,{isPlaying:b,duration:60*x,colors:"#e6533c",size:125,strokeWidth:4,trailColor:"#262625",strokeLinecap:"round",rotation:-1,children:function(e){return function(e){var s=e.remainingTime;h(60*x-s);var i=Math.floor(s/60),t=s%60,r=String(i).padStart(2,"0"),n=String(t).padStart(2,"0");return(0,o.jsxs)("div",{className:J.remainingTime,role:"timer","aria-live":"assertive",children:[r,":",n]})}({remainingTime:e.remainingTime})}})}),(0,o.jsx)("button",{type:"button",className:J.timerButton,onClick:function(){N(!b)},children:(0,o.jsx)("svg",{className:J.timerButtonIcon,children:(0,o.jsx)("use",{href:"".concat(C.Z,b?"#pause_square_icon":"#play_icon")})})}),(0,o.jsxs)("p",{className:J.calories,children:["Burned calories: ",(0,o.jsx)("span",{className:J.caloriesSpan,children:v})]})]})]}),(0,o.jsxs)("div",{className:J.rightContainer,children:[(0,o.jsxs)("ul",{className:J.list,children:[(0,o.jsxs)("li",{className:J.listItem,children:[(0,o.jsx)("p",{className:J.itemTitle,children:"Name"}),(0,o.jsx)("p",{className:J.itemValue,children:d})]}),(0,o.jsxs)("li",{className:J.listItem,children:[(0,o.jsx)("p",{className:J.itemTitle,children:"Target"}),(0,o.jsx)("p",{className:J.itemValue,children:u})]}),(0,o.jsxs)("li",{className:J.listItem,children:[(0,o.jsx)("p",{className:J.itemTitle,children:"Body Part"}),(0,o.jsx)("p",{className:J.itemValue,children:a})]}),(0,o.jsxs)("li",{className:J.listItem,children:[(0,o.jsx)("p",{className:J.itemTitle,children:"Equipment"}),(0,o.jsx)("p",{className:J.itemValue,children:c})]})]}),(0,o.jsx)("div",{className:J.buttonContainer,children:(0,o.jsx)(X.Z,{title:"Add to diary",classes:[J.button],onClick:function(){v&&E((0,K.U0)({exercise:r,time:A,calories:v})).then(i(A,v)).catch((function(e){(0,D.ZP)(e.message)}))}})})]})]})},H="AddExerciseSuccess_container__C3sur",q="AddExerciseSuccess_button__O2sNj",$="AddExerciseSuccess_image__6usaS",ee="AddExerciseSuccess_title__YZQPQ",se="AddExerciseSuccess_infoText__TRm5n",ie="AddExerciseSuccess_text__9jk05",te="AddExerciseSuccess_link__RlIcS",re="AddExerciseSuccess_span__Jq1QD",ne="AddExerciseSuccess_buttonLink__lzH8B",ae="AddExerciseSuccess_arrowIcon__5Yd5x",ce=i(1087),le=function(e){var s=e.data,i=e.onClose,t=s.time,r=s.burnedCalories;return(0,o.jsxs)("div",{className:H,children:[(0,o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABJCAYAAADoi9JpAAAAAXNSR0IArs4c6QAAHNhJREFUeNrsW2uMXVd1/tbe59x75xVf2zhMnDge5+EmysNjkiaEQjFUKi0oykNVVYk2qtRaArVVSiWkqn9wflSl6h/zi1b8SSoBEooggAhEAeQAscCYJCYCBHZihzDxIxN7bM/cxzlnr8W9++ydnfOYm0mAMEh3XX13n7PPvnP2Xd9ej73OHcLvQRaf/e7fRY34PkStW0lFbWGzxFn2fU77n0+Sc09sfceHXsBYfiMhvMXyyrNPfIKI9oEULERBQBBhcNYHJ73jXdN9/4477jmBsfxhELt45Nu3A/ge6TgCFNik4DQBs4Gw5K3JBuBfNPrT75j9wAdWMJY3JQpvoTBn/wZSESgCWyuFJZOzDGzMAIwsYyT9ZOdKvHwXxvKHQSyYbgVpCBQgBBGBsNiWHURgiU576b0Yy5uWCG+RnH7qG7sguApQEGEIBhBHKrMlVFgcGGz6V2Ms699iOeVdIIIFAGFPpHEEO2uFQIAhrsBY1j+xCjIPUjmpYt8hklstHKmwx/B9lxx74pFtGMv6dsVQ+ioCQewJ56QyAyJFcn2qLtJQWawwlvVtsRB+m3fDcNYZSAWkvAsTgyRZaWEs65xY0O05sUNIiKSOaSoMJUt4U7dmMZb1S+zhw/8XgxABPsYWrNb1SeBVEYiAnmRzGMv6JXbWXLGDfEYcrNS+vKnm1+Gg7DmxvAdjWb/ENkRdA6VApBxzIQO2CO7YjlHDsQNI1pnCWNYvsRSrPyalAUUIIg6eawqHSoG0giJ1E8ayjomFutUSCwpuWCRvCwPJQikFpTUAvkGOHm1iLOuTWCG5DRQhuGB2EJC3Vssp5bCuOAKB8fyp58Zxdj0Se+bHj/0pKb0lj69iIZwTK86e/SsYrbXYPNamK3dgLOuPWM3xh5WOCCQ5mWyAAXzVCT4zdtaKIRTlxMYRwPLRFw8enMBY1k9J8ezT3/kQtOz1NWIIO1KNd8WFpMmeObcsSuVbXzazbM7fAuB7eAvk5Nc/P/fUt7/aTlKZ2xln7fbWt29fXHip3emn7Vgr9EW3VdZf2rpx5sSp5sYjl5qTB3bse2QJ60wIvyM5/eyTVzcUHwZRW0AQFpgsg2QpjEnBw2N2j+7gWAVBQnUKJAaSZaAofnz7e+/5c/wW5Pi//83cyZTn+ysX2pdtvXLXpFluU2tqrnN+aS6emJzTWQIrgloR37pJp8ZAjHmwofmBHZ98ZN38nOe3TuzQbc5s5H+C6P9A3NgIUhDD4LQHkwyQpWBjSc0hPjemmikJwMY2qjl1+7Z3/cUhrFEe3/eRPTOLv9qV6cb85VNxW2k130uyuWYcgVAvUj0b3SOhN00zvLLcfeC/Hz344Gy7jT+an2/P9k61rxgcb795dxsnj7cBwBhYeTk1G873pQ0n10xHL8CJvuzKpf7pXy4d6s8sffh/PvPM74zYzrFD2/qp0QCgYola3IxTI5GK9UxPepsV6xsVYSdI7xDCe0nFEIpcLd+Asx5MvwdOu5ZYMVx4BgtvtX5KZNu8AYPYgKLG0e55fdO1H/xgHyPksfveva9B6v7JZtSearXQmpiAjmIQUWG7VUvXaAsNUu0oPKUipXyWX7sQRotUhmQZP5MY88xkA9YrvGliz/3k4G4i2guFd4vIDiKaAKBBClAapGOAtCv9IZTwJTQ2ljrr5KwPTgcYkuoSJ0+qVGrF5BpCsOE8i9bNmS83N83ct/nad15AST7yzuvm7tw5+6WL587N99MMsSZsmGhi84YZbNrYRtxs5pUvKutWVtW7rH5QJdW3wgMgz+iJsHYR14z4+xD00uxBxfTA9ftHE0yVhOfZ73yclPovAbSdGCkLS55I6VP2erXwIAwZwsafLAcbh/DlBeKUUVmswWoJIDeOiKAnNhy+ZGr2rqnrrnsJTr509562npKnz5w5PXe+28dKL0PGBtOtBq7cNIO5LZuw6W2b0Gg0AaIimW+QSKm1QClYrbA41WgEbqlG4V4HqxMtNZ6BICdWtu362M3/su+RNRG7+Mzj9wL6YSEQqRjQA0CVFBEKDCG7rZusQJgLRAd3VbLWwqovzspnyYQhxFqCbk0KtaY+Lar5ubdft/vJh+++Zf/5Tvf+Mxc7GOKlCx2cXu5hqSdoNiLcc+MV+LPrt2Pjpk3QUVTiblR0ldLAegleB/4NbBjQGooIRGuJe1L1GHWuP9wDx84s/f1f/v+Bh16X2FM/ePQrpNWdIA2KGoAvA/r4FEzLEWctslBJAiFMsGCRUnS7EggNTYi1RWpD6FU0QBQNEIN0BObo1Pnnfza7cORHOHLoEH708+fwi8WLON0RLDKwAmAyUviHm7dh759cj6npS+CLJVUDHR17pWLi9dcEkieMIlCRhiJVo/SQMtaHXlnl1OtO0E8ytLZd875rP77/wKrEinxBv/RkMyGtFPk4Omzh4pKfHBG8hGKDCVbsLEukLtcYQWg4KVquhEd65Fyz0graEWvn6hZLlhgsLy3hxaPHcPS5o3jh1MtYWFjA8krHbq/+8YatuPayjYgaDe/oAlH1JI7QsaDYlBQvDGOMnZ+Pt/VWO5pIqV9BEIEFm/REn1Z2795/YKm2QHHiwEqsQEqJBikDYraTAulhb7DckLWWiAouoqorCpOiutY3vjP0F4m2b2AWwBgoEBRpGzJIEeJIsLHVRPvSLbjpjtuQJX30LpzD2QG5nXNn0Tl7foBjmI40vKJFZKQyRd4gEUEHIJAldyiKgt7qRUZ2iUjNorMZ+FyTpz4B4GOruuLnH/vsgo6jrbYIrzVIeUQAqQLBhWzNWayIKWoi8FOvOEGNpdYnFcFiwwMDZeeZu2Wl89ARMlGxyVvWWR6QuoiLL59G58IFyM+PYEsLtmQJKZO4doVLecKl7+RzCWYDvGq1hTpbPQ1StlEphcGqh7vYTdDv9d/3ngcPHKgtKaa97heF439WcQTFEUgzSDGUJpAGRPyEVOl7E6QwQXEgiEjoX41yshPPewoWXNIZFd0jg0GSQpjBOrML0C9GkLKtak2hMZ1gIunbyldv69VITv4UjdZEhTiRkdZY3X5UuqVw7McJs/ua5BZnXZySEUWS6njfCARTzQiYmBha7YHahwDdfvrJZGX5pOl2YdI+xO47M/AAUqrtBhFnQcGaIXCQUlQSf/S6Oy8J8byYsPlWGMwOJgOnqa9uWdjjNLHXSceImi3EE5OINl+KbnNz4aevwhauls3uPIDFgx0E4uH7md05u78dvq2d36uVNmOPC7Cv/B72JR7wCPNx92F3Lz827nf3PP2ve9q1xM7/9UcXsqWLe/tnX1nMli/A9LrgJAE4K+9hgxCNjBsiAa5vxKqngtutinh+wxYpkGstkrMEgeCOrXaJsHWHURRDR4CZmIIxbrHyawkCGCXlBrKCcoV9nwU4MCA5OY6oYIzGmNpFgSF4CAaEXRsgHvAvhL8R1ju0UlC9xv1wolGST3/lm0f3zt/4GSX9F8HZRQ1cRnFjkqIYKmqAoHKXErLkWjcUOKx3wQIqmudqNNPa6n3hnkH5fjsm2ZD0NEeaIVEziM4ch9YaEogMK0ZQINWz4xEkOCbxr0rdIngXIgX/7eFQ/hznbYCUUU5WwiAB438PP//QmmrFJ7/10G2YaP9AtaYBFTtXWIghfg/rtz2ulfwYZfdNtXFWVssGq4WCSiwMmqytz9r5ZEmCpLOC3vIykm6C+CdPYkKHPeHq4XR0tlp/TQoJoLEexdj9tw5bt+LKlbXcoC6DD/V2ZsbDPz42958Hj78QFSpPB796eWKy9zea8bSQ2ilEdyoVX4m4CaEIIpLHIHDYrVSrSK4tKt02LnEQUN1ERwgBJKUxJVIktCUJ8c/nAGTQb21BMzldWSz1WdHaFF4xJpGgdFe0gCIoUhASUNlT0Wq3kFHPHvybHXXXDVfdPSD2U1FeSvzW5cxmv4D+KqY89PrfHckAEBRjS86ka7lQ8w398NfDBIh8W2e5oa8+1a9ulQIbYU5lHZVivGuQTV0C6Z50A8vbiNH1XMFaCShW2jI2IGgIGW+x9amjrP2RYpizK9KYbA+AT0UiEr381ONfBtEt/umNJZN0/gFPKDsSBYW448gLLYc+p9T67J0KpK75EVrYXlW3FoAELwIKCYa3WAnjs8aktWSlKFyrJU1qGsEaJGS2Tk/MAkPk6scCkpAsSkET5fUmtdZcVK1Y3ScZD4lFtPD9R/820uoWUgoyAIRclpdCAHiyAomvdV1csExx8AkMENrgUgkjhahksDVxRVAtbriOwpbIXWMWB0cwC/RkjCwziCJt+wJxr+Nupa4XFWakoHBHKjNAhGgAsvCDqZI08kiTrU9UGYJYq/bX7n3X9shk/fuINWA39gKQAUClYkBdLbdQFw0kislbMPBat10glrwrCvtefy5SLHSEVV1aVFLzL5gMsCc2jLWEOrDx25YMfTUJzT2wcI0F1DI2spgR2Cwc+vBl50EgGOWJDZWotUrVZwR+xOluw4ZoT8RJcpXRyj00t20ggAIZUpu4lMgXrrbhuiORIDRAzqolgogQ6PRjR/hiN4YdqQWSK4SLI9Q4i2UY5vy4NQ3udvIxlYy7yqJgdFytqijoyUjuOQQGgIYKzsta7hsVkSoXPkwunF2ej9JenznSIEWOWAo/I1HK3dgTgXAuVYIt4F03gsV6tQkhfFa5dUO234+y94c7IQrLn4rkSmVBseOYa4gdolzxEQhxKE5UE7SSEutldHL/6o4hwACGGJJXBApOyssonmVVJxHusXmqORf1up0fRlrtUFpDaQXyxX7yRMNOAWF51a6ewHDBckoJFDnyFAAGA/YeUoqv5MZR+X5l5TP7PCBczytCwVqMKwN6qzWc9zEjjabRlDMh9o7afb3h7awUEjt2xywMygBo+nU1ZxZrSVHG8f9X3X3uuXdm7pyB0cBg9KIPblHRRBP37cGoUQE1UR6Muz6ogcTgo8SYiIlrjBo1SnxCicJIDEtMyPjgghi4ioAjindGlmGAmXO3c7q7Ns98pypfaqrpXBYXKqn56p6lq6d//S31fdUHXtbd/bssJK3z6EX+MPYOOLZdn1dujTevKAu8t6xKmvVQ5yxQqFjhkUxTskxJp8qiGp+axOTkPcktyuOsBE0ABdnt62QOFy+gg5jh6GvTlKNncxxBe9hyCTGwkdR2CnjHXldaZ505BnCGix0WHvG6eghcvzOwueYmS03tMOJj3PDlSy8vyV86WBjQYLiAanGRN3+V1QCKzXQJpYg1TRhQZiLFkSdmUibOT19kx52bzhUn89zzGjBDTaNiJ2CtMdBNi2YyRTvrRmsUmxMsP3wXrHUxR5wD830gc5+awxVTbKyDdg6lUrNOoUZLGUiQDHoqTXmZM7iUf57YkkNc/dmPvmupUJ9eWKqePVhcOKdcWhyUu/ZgsLSEajiEKkqAKDGXndFZUmxPc7ASolAKuxOsAGUpwULPTSQuAECEypJzxI1GO63R1jWnGNXmNvY+cjgk6L2A2InB9YnovsnlOvDxtXXcy0LAguRaUmfCZgc7PGTI89y3LmCTdvMXPvESGi6djUHxjsGe0YfL5X3DGVzxvacbhvTOhABNZHchnbKardRyuxbq3eNsa0oaEbPGzsHWLXRdQ+sW5aTF8vG/QBsL8bF+Zya4/7pnm/TYDDuH1joUilhrVVzPdt3b/evY5E8vFoM90/3r2/mzO2s//97Z9dbU1/XUDUZ779yz/4y7LehFzlkBFyQlIJOe+jovPS1Cp/5IWAu3LE0olNMcRl4zkjyttbA2BFVx2RP9XoDPsicS7tbKfr/r5TjsFmyA6/0cpqMQGVPHl/Nbvdv8yyAEaDyHgPU33rjraDX+Epy7aNfe5TOXFyqgGMCriqNPtDWcMaB5oTgcyyV5SileJwGM5JnTfHL3pjYOLiiJKqUJaIrzphch81nOyhLHngIcHyuxHt40czMdgqne7Z+SMOn/UCdcz53nsQ5gbXVxGZnuPaae6nbPzc0y+NhSqbUIFvcubF5VqOptUAQK+WIPxUDkASpJIYrJc/ASqCQgJa3oRGsFtqzzhKz4ZGKRa4bvzKWK7ycSuEErGa6J/jbA9gB5Fd6fdfGHPcwSq5DGc+iPjJ1YCFYUAwWlEKo88ZzTYgNBYhLqNr/xr6QuXCoaM9i1m35yoQfeOjevik0FrJ/JsDXGaMQgBD5KAebmlf8gw9/RxEXI8vnuTeNCkaF3pi7Ro1JEESr7LtGUuNSwcf0qW01MCxs01qZz9rf+j6QXW4InnssEHxuBuQA02VSelQNcb+1arBt4nqWimIP1Fh/x5AhBQ2G9gOALYmUrCEuBJK93v+aCZPCdGnv6ujerj+a13S6oLIi7JZKFkeVzmGspjyWlWDrN52Ssl3xxL6s+rJRqu/SwDIEUAqBAAZbsvExX8nlQ4Xuyqz5Kfqm1frW87ZorRs7Z18J6QDnAyoczYBFsGhjB5RqcfidCDWCTSDmDizRd2ANUHE+AKl1Mk/PiZ/m8pNpS6g3Y8J4Nc/fD7aee13AFQNRYO5MIcAsAKuQQk5wbUf/hSY7dFRVP2natHAIjo/Vu5WSHYaJJAWTiL1l2mtguoPJZlmkgJQkMAckyq+T0bFehWONMH1+MF5TBscYGGcDapkXUYMMfxpPS0jW7lNSMmZtirwiSOwcUCVbZ+bmTlGYaeLpwmRbLYq2sgbGaTNarqhipQqVwk71NAjcCSsEiQmcpgKMGZ0DTCFm0VcBlSQMBSwnX4KsiVJL/MENMoSJC9l4h+j2HJ7d5gRsiYsCwC5CKjgegPMA6hai5YoGp99j5etlhPsffHnrkCH/3Nz+8/GeDqnp3NSjlORM5bFYDdWJKM7AAa4gELjbT8DCOPc8tJ0oaoJPPH0ImErCKixeh1kskx2eQnqNirWe9NdCNgTEaZz6wimnTQofM05NDNAoB6/x8PGkMz1OE81UFoGJs0LlDsz/69tmSCpgaO/7Mobv3lQAwfqT+FPzJ1y8tLeyvBhWqquKtmVQomZQo1STugMBJgqUEpEuCrfg6Ul/b5WPR9cR7EjCKT6VQCBT4AtY4WDuXRruZtGgmDQDO33IXsMnhxY13MexNIkjSIPp7HZdbyqOcdWeiC5EjET2W2E2uWTz/RptVAGCwb7/0smNXXPLxNxVkf1JVxQsWl4Y41RcWhwy5rEpQ0AgCiXbhdDgC0OWmWN5LgWamuG+fchQxCmZtDgt+5yne2WKGuQDAUFljjbEzabCga2hj0FoLE4M/PM7Ws870EI1qtIUK2aYYIyny/G2wfCLmHqEMSgfRdSN+/2MXvWVQ0usXhuWLB8Pq1dVwONq1vIchl2UJkEpLpAlUL6ZY1rD8d6K1Wc8eZkoivbxeyWglaOKeQJXNY8ZxN8bDtA5tY2a9xd7JMRTbD2CzbmEdfyHTVhlTl6Z2q7VHJ2ALj41JC1KYm2JFLPnck+Ml4/xgJD7WZ4kQwpV/PfLSWx7SqwT0tys/9b53qmr4xX1n7X/R4p7dKAcVlFLJcoRBxiSAT8DKOECVKLkfcFpUF6SnC5UWJgSqjUGSZy01GtCtR1NrBntOs4Z6e4ztVs+/k1ANM/a0HeTrxfoQsbZOWw0+0wBVEUBBiine6c6J6L5EAdYbu/alW/91bjDFefvj9y7f27TNBzZOnLhAa/ecM8468+ylfct5AMTG3aZbLYNmWhuAClSRAjY5lgRg0bAllY/sP0hEfKwYLEmy3UWwrK0MVXu0jUU9beG0RuknqLWBtnyz9XjMfoi0gyIAKWCr0XyuIB8iYZUudYi6j9ttggUupFXkLuNBF9i7r/vBM0yLn+4GXvn0lWeQKkt4UrBtg7ZpYHQ732ICF4AgABeQ1gagLC1cqr1zLbenm+V0qZNqJmWhvbwp61U/n0MCJQbrods52KY2mE4bnLno0GqLibbsY2XKFA6l55AWE3Po+R4kECjkIybG8jjCVGTnUu7azoK7mN/u9asXX7s2cdu/ELBZG3xtMFSvipMxFH6gyTC87t178jihtZbBW4HK4xBEpUFVl0mW21/MK+R/5sT+sAjHEKAc5YZkAAdNQNsQdOtQ1y2ms34ujmNTz8bahMAJXaBSgOpRr3qmXcnmPQXUrUWrDYNEgElKNrMR7ahUl29rhdg15+myb/x5PO4Ee/vVP3i+h7/AhSpO3LbJXX7YMgUhjxfy50RrbdDaRGNj/VOAZP41tDSASj7vOJcdQIb5DI/5tQAWsEbNJMG0nv3qpK7RmimWRhb31xq1sbDO5/vV01uKG7mMa8/eJIGgvMK4bvmcYgTMWutI5qId+ewUbLq1de07dz74Y0hLwRbAhdbYkiD5XIHDgBKgLnbWUDOTc6DGGNgw5tecZRgBalroRjxeao5dUpkJ0BxrZNDK8HfozsW9u8Rjx2AtTGvRtqegTrFZ13jzAY31WmM8bVFrG82a6F0UPQCpq24qCx6BSsQFlM3GQEn0G7WWm0rVNd8o0LOEImLNHyvfvhHScrDG2v0FiVYiJs4FYIg4E5PLUI2xbK75YlrLkmEELbbRxwZIAk3GVuqnMEGrTRhbHjNAHjuA+/yCFqxbk8kEdWOwOZPbW9tYn9aYtg0D1dbgefsG4wO7zxrdfbzmYMY4WTRQR5GeunwtdWHuDnLKQuHkVEMbJ+lOIAKWY9Hj/OE2IugGH7pybbzWC7Zt6ro0FCZMzK0AMAYxMDIRJMsAN0g2j3O4kp+N41PgvbzGWmfmAE3USgcY72EBzul6qLEH7gKpwyhojLL4gzL+GAH3HF793cETJ0+cd3SjxYbz2OrI55+zOMD7n3tgdGx9guNbNabaiYaRCAYlMLOoPP1c6m29oGZNbL3Fw9MGhZhbltK8zNW/baL7sXDnPnjV0TEnJHrBTra27ygK4juNKM1DImgXm+SgkfoUUG1mUjMsrQNY66ImszRzgPJ6gGeiT3SYA50HAc2s3+WIblNEf/K+/HsJf8tXrrnmONDdXjWqPuRAt1XkUQFYANBg3oYF4eVP342LXniA51w7sYVxrXneYM4STJS8ltjkBDKhg7iYV76GD2/U0MbDhL3DJOgzmDtSWvneGhX+goNHx6sIrResnepfnqy37xgU6oWDQQmKWyTncBOfqrWB0Zrh6pk02rEJNgKWpTERoGN4POZSLsGxZqnjHv46InWzter3tmnu+db112/gMbTfjvXqy0bVJbsXiq/7xqK0gAdwzu4Kr3nmCC89sJ/ztIcf2sD9mzV0zDRRgiuDSgKOoSQanDAXQQHqpDbY1m7uW71s36HUrnYvsdD1M0jMYAyib5Sb+ObB8Xj8mBIo3734kyvOtTcNS5w7rAqUs14UChTXS6x5p6ByCM8gWTJsJxBtCGw8uDsQHLDmPW51qjyiiG5QTh3+6tVXH8GT1F6xPPi88f6yUxDP3jXA85+2jGedsQsehCMnt3H05BSNc6DkKvaY2/R9AZ3ClX8VoZgrAwdMPjPrPRRkiTcmj7EjjAtgDTNJhNXt1qz+6tjWr5/w7xV/7n0XXlQ4/x4o97oB4QzFrtcLXCdLDcvxFsETS+MJ95IqVq2jf6iCbidXrI6tvedH1167if9we8NouLIwKD6/f9fCB2cPJzGHBzcbbGkD57sfTn6MLYVJEMnRrr/44a324BAAFoHRcAiZq1xhCbOuCCcR2riu4abD9UOshf/FXxi/+PzzRwBWLDV7C1c8zaMtnFNqXlxRDiU2lMcxrYYnv80a+L9v56+MRhXKl2w07XkLpVohYMV5jMjTiiesAD7/CYLHAZyknnrIgi657j72e73tKfnT8U+Vdv5oNFL7sFdrrIAwKqkYWdgVbd2IPEZVUQTtwkpAvpKQJ3YraxY45I05dP0pM/l/1P4NP4C60SSA/mkAAAAASUVORK5CYII=",alt:"thumb up",className:$}),(0,o.jsx)("h2",{className:ee,children:"Well done"}),(0,o.jsxs)("div",{className:se,children:[(0,o.jsxs)("p",{className:ie,children:["Your time: ",(0,o.jsx)("span",{className:re,children:function(e){if(e>=60){var s=Math.floor(e/60);return"".concat(s," minute").concat(1!==s?"s":"")}return"".concat(e," second").concat(1!==e?"s":"")}(t)})]}),(0,o.jsxs)("p",{className:ie,children:["Burned calories:",(0,o.jsx)("span",{className:re,children:r})]})]}),(0,o.jsx)(ce.rU,{to:"/exercises",onClick:i,className:ne,children:(0,o.jsx)(X.Z,{title:"Next exercise",classes:[q]})}),(0,o.jsx)(ce.rU,{to:"/diary",onClick:i,children:(0,o.jsxs)("p",{className:(0,d.Z)(ie,te),children:["To the diary",(0,o.jsx)("svg",{className:ae,children:(0,o.jsx)("use",{href:C.Z+"#arrow_add_icon"})})]})})]})},de=function(){var e=(0,P.I0)(),s=(0,P.v9)(L.bF),i=(0,P.v9)(L.w0),r=(0,n.useState)(!1),a=(0,t.Z)(r,2),c=a[0],l=a[1],d=(0,n.useState)(null),u=(0,t.Z)(d,2),x=u[0],g=u[1],p=(0,n.useState)("bodyParts"),A=(0,t.Z)(p,2),h=A[0],j=A[1],_=(0,n.useState)(null),b=(0,t.Z)(_,2),N=b[0],E=b[1],v=(0,n.useState)(null),f=(0,t.Z)(v,2),w=f[0],W=f[1],I=function(){l(!1),W(null)};(0,n.useEffect)((function(){e((0,K.gr)()),N&&e((0,K.kI)({name:N}))}),[e,N]);var y=Object.keys(s);return(0,o.jsxs)("div",{children:[!N&&(0,o.jsxs)(R.Z,{children:[(0,o.jsxs)("div",{className:T,children:[(0,o.jsx)(M.Z,{style:{marginTop:"0px"},children:"Exercises"}),(0,o.jsx)(m,{activeFilter:h,setActiveFilter:j,filterValues:y,setChosenCard:E})]}),(0,o.jsx)(Z,{activeFilter:h,setChosenCard:E,exerciseFilters:s})]}),N&&(0,o.jsx)("div",{className:U,children:(0,o.jsxs)(R.Z,{children:[(0,o.jsxs)("button",{type:"button",onClick:function(){E(null)},className:k,children:[(0,o.jsx)("svg",{className:Q,children:(0,o.jsx)("use",{href:C.Z+"#icon-back-arrow"})})," ",(0,o.jsx)("span",{className:F,children:"Back"})]}),(0,o.jsxs)("div",{className:G,children:[(0,o.jsx)(M.Z,{children:N}),(0,o.jsx)(m,{activeFilter:h,setActiveFilter:j,filterValues:y,setChosenCard:E})]}),(0,o.jsx)(B,{exerciseList:i,setIsModalOpen:l,setAddedExercise:g}),c&&(0,o.jsx)(V.Z,{onClose:I,showCloseBtn:w,children:w?(0,o.jsx)(le,{onClose:I,data:w}):(0,o.jsx)(z,{data:x,onSuccess:function(e,s){W({time:e,burnedCalories:s})}})})]})})]})}}}]);
//# sourceMappingURL=224.b02a822d.chunk.js.map