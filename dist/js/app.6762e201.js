(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,g=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&g.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"323b":function(t,e,a){"use strict";a("a322")},"423d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"eventEmitter",(function(){return O}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ecwid-test"},[a("h1",{staticClass:"ecwid-test__title"},[t._v("Галерея изображений")]),a("image-loader"),a("images-gallery"),a("div",{ref:"examples",staticClass:"ecwid-test__examples"},[a("h2",[t._v("Примеры URL")]),a("h3",[t._v("Пример ссылки на Json файл:")]),a("button",{staticClass:"ecwid-test__button-copy"},[t._v("Скопировать ссылку на JSON")]),a("input",{staticClass:"ecwid-test__input-example",attrs:{type:"text",value:"https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json"}}),a("h3",[t._v("Примеры ссылок на картинки:")]),t._m(0),a("h3",[t._v("Примеры картинок для Drag and Drop:")]),t._m(1)])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",{staticClass:"ecwid-test__list"},[a("li",{staticClass:"ecwid-test__text"},[a("button",{staticClass:"ecwid-test__button-copy"},[t._v("Скопировать ссылку 1")]),a("input",{staticClass:"ecwid-test__input-example",attrs:{type:"text",value:"https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg"}})]),a("li",{staticClass:"ecwid-test__text"},[a("button",{staticClass:"ecwid-test__button-copy"},[t._v("Скопировать ссылку 2")]),a("input",{staticClass:"ecwid-test__input-example",attrs:{type:"text",value:"https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg"}})]),a("li",{staticClass:"ecwid-test__text"},[a("button",{staticClass:"ecwid-test__button-copy"},[t._v("Скопировать ссылку 3")]),a("input",{staticClass:"ecwid-test__input-example",attrs:{type:"text",value:"https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg"}})]),a("li",{staticClass:"ecwid-test__text"},[a("button",{staticClass:"ecwid-test__button-copy"},[t._v("Скопировать ссылку 4")]),a("input",{staticClass:"ecwid-test__input-example",attrs:{type:"text",value:"https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ecwid-test__img-wrapper"},[a("img",{staticClass:"ecwid-test__img",attrs:{src:"https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg"}}),a("img",{staticClass:"ecwid-test__img",attrs:{src:"https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg"}}),a("img",{staticClass:"ecwid-test__img",attrs:{src:"https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg"}})])}],i=(a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-loader"},[a("form",{staticClass:"image-loader__wrapper",on:{submit:function(e){return e.preventDefault(),t.checkLink.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.urlOfAddedImage,expression:"urlOfAddedImage"}],staticClass:"image-loader__input",class:{"image-loader__input_type_error":t.isError},attrs:{type:"text",placeholder:"Введите URL"},domProps:{value:t.urlOfAddedImage},on:{input:function(e){e.target.composing||(t.urlOfAddedImage=e.target.value)}}}),a("button",{staticClass:"image-loader__button",attrs:{disabled:t.isLoading}},[t._v(" Загрузить ")])]),a("div",{staticClass:"image-loader__information"},[t.isError?t._l(t.errorUrls,(function(e,n){return a("span",{key:n,staticClass:"image-loader__error-text"},[t._v(" "+t._s(e)),a("strong",[t._v(" некорректный URL")])])})):t._e(),t.isLoading?a("span",{staticClass:"image-loader__loader"}):t._e()],2)])}),o=[],c=a("bc3a"),l=a.n(c),d={name:"ImageLoader",data:function(){return{urlOfAddedImage:"",isError:!1,isLoading:!1,errorUrls:[],counterImage:0}},methods:{checkLink:function(){this.resetData(),""!==this.urlOfAddedImage?(this.isLoading=!0,/\.json$/.test(this.urlOfAddedImage)?this.getJson():this.checkImageSrc(this.urlOfAddedImage)):this.isError=!0},resetData:function(){this.isError=!1,this.errorUrls=[],this.counterImage=0},setError:function(t){this.isError=!0,this.errorUrls.push(t)},getJson:function(){var t=this;l.a.get(this.urlOfAddedImage).then((function(e){if(e.data.galleryImages){var a=e.data.galleryImages;a.forEach((function(e){t.urlOfAddedImage=e.url,t.checkImageSrc(t.urlOfAddedImage,a.length)}))}else t.setError(t.urlOfAddedImage),t.isLoading=!1})).catch((function(e){t.setError(t.urlOfAddedImage),t.isLoading=!1,console.log(e)}))},checkImageSrc:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new Image;n.src=t,n.onload=function(){e.addImage(t),e.checkIsLastImage(a,++e.counterImage)},n.onerror=function(){e.setError(t),e.checkIsLastImage(a,++e.counterImage)}},checkIsLastImage:function(t,e){e===t&&(this.isLoading=!1)},addImage:function(t){O.$emit("addImage",t),this.urlOfAddedImage=""}}},u=d,g=(a("fe4f"),a("2877")),f=Object(g["a"])(u,i,o,!1,null,null,null),m=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"field",staticClass:"images-gallery"},[t.dataImgs.length?a("div",{ref:"wrapper",staticClass:"images-gallery__wrapper"},t._l(t.dataImgs,(function(e,n){return a("div",{key:e.key,staticClass:"images-gallery__image-wrapper",on:{click:t.selectImageMobile}},[a("img",{staticClass:"images-gallery__image",attrs:{src:e.url,alt:"some image"}}),a("span",{staticClass:"images-gallery__image-delete",on:{click:function(e){return t.deleteImage(n,e)}}})])})),0):t._e()])},_=[],h=a("b85c"),v=(a("a434"),{name:"ImagesGallery",data:function(){return{dataImgs:[],counterKey:0}},created:function(){var t=this;O.$on("addImage",(function(e){var a={url:e,key:t.counterKey++};t.dataImgs.unshift(a)}))},beforeMount:function(){window.addEventListener("resize",this.updatImagesSize)},mounted:function(){var t=this,e=this.$refs.field,a=null;e.addEventListener("dragover",(function(t){t.preventDefault()})),e.addEventListener("drop",(function(){var e={url:a.src,key:t.counterKey++};t.dataImgs.unshift(e)})),O.$on("dragStart",(function(t){e.classList.add("images-gallery_type_backlight"),a=t})),O.$on("dragEnd",(function(){e.classList.remove("images-gallery_type_backlight")}))},updated:function(){this.updatImagesSize()},methods:{deleteImage:function(t){this.dataImgs.splice(t,1)},selectImageMobile:function(t){window.innerWidth>1023||this.$refs.wrapper.children.forEach((function(e){e===t.currentTarget?e.classList.toggle("images-gallery__image-wrapper_type_select"):e.classList.remove("images-gallery__image-wrapper_type_select")}))},updatImagesSize:function(){if(this.dataImgs.length){var t,e=240,a=200,n=this.$refs.wrapper.clientWidth,s=document.querySelectorAll(".images-gallery__image"),r=0,i=[],o=Object(h["a"])(s);try{for(o.s();!(t=o.n()).done;){var c=t.value;c.style.height="".concat(e,"px"),r+=c.clientWidth+12,i.push(c),r>n&&(this.updatImagesSizeInLine(r,i,n),r=0,i=[])}}catch(l){o.e(l)}finally{o.f()}i.forEach((function(t){t.style.height="".concat(a,"px")}))}},updatImagesSizeInLine:function(t,e,a){var n=0;t<a||(e.forEach((function(t){var e=t.clientHeight-1;t.style.height="".concat(e,"px"),n+=t.clientWidth+12})),this.updatImagesSizeInLine(n,e,a))}}}),y=v,b=(a("323b"),Object(g["a"])(y,p,_,!1,null,null,null)),I=b.exports,w={name:"EcwidTest",components:{ImageLoader:m,ImagesGallery:I},mounted:function(){var t=this,e=this.$refs.examples.querySelectorAll(".ecwid-test__img"),a=this.$refs.examples.querySelectorAll(".ecwid-test__button-copy");e.forEach((function(e){e.setAttribute("draggable","true"),e.addEventListener("dragstart",t.dragStart),e.addEventListener("dragend",t.dragEnd)})),a.forEach((function(t){t.addEventListener("click",(function(){var e=t.textContent;t.nextElementSibling.select(),document.execCommand("copy"),t.textContent="Скопированно в буфер",setTimeout((function(){t.textContent=e}),1e3)}))}))},methods:{dragStart:function(t){O.$emit("dragStart",t.target)},dragEnd:function(t){O.$emit("dragEnd",t.target)}}},x=w,C=(a("f72d"),Object(g["a"])(x,s,r,!1,null,null,null)),E=C.exports,k=a("2106"),L=a.n(k),O=new n["a"];n["a"].use(L.a,l.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(E)}}).$mount("#app")},a322:function(t,e,a){},b787:function(t,e,a){},f72d:function(t,e,a){"use strict";a("423d")},fe4f:function(t,e,a){"use strict";a("b787")}});
//# sourceMappingURL=app.6762e201.js.map