<template>
  <div class="image-loader">
        <form
            @submit.prevent="checkLink"
            class="image-loader__wrapper"
        >
            <input
                v-model="newUrl"
                type="text"
                class="image-loader__input"
                placeholder="Введите URL"
                :class="{'image-loader__input_type_error': isError}"
            />

            <button
                class="image-loader__button"
                :disabled="isLoading"
            >
                Загрузить
            </button>
        </form>
        <div class="image-loader__information">
            <template v-if="isError">
                <span
                    v-for="(url, index) in errorUrls"
                    :key="index"
                    class="image-loader__error-text"
                >
                    {{url}}<strong>{{errorText}}</strong>
                </span>
            </template>
            <span
                v-if="isLoading"
                class="image-loader__loader"
            >
            </span>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import {eventEmitter} from '../main'

export default {
    name: 'ImageLoader',
    data() {
        return {
            newUrl: '',
            isError: false,
            isLoading: false,
            errorText: '',
            errorUrls: []
        }
    },
    methods: {
        checkLink() {
            this.resetErrors();

            if(this.newUrl === '') {
                this.isError = true;
                return;
            }

            this.isLoading = true;

            if(/\.json$/.test(this.newUrl)) {
                this.getJson();
            } else {
                //this.getImg();
                this.checkImgSrc(this.newUrl, false);
            }
        },
        resetErrors() {
            this.isError = false;
            this.errorUrls = [];
            this.errorText = '';
        },
        setError(url) {
            this.isError = true;
            this.errorUrls.push(url);
            this.errorText = ' не корректный URL'
            this.isLoading = false;
        },
        // setErrorImg(url) {
        //     this.isError = true;
        //     this.errorUrls.push(url);
        //     this.errorText = ' не является изображением'
        //     this.isLoading = false;
        // },
        getJson() {
            axios.get(this.newUrl)
                .then( response => {
                    if(!response.data.galleryImages){
                        this.setError();
                    }
                    else {
                        const imgList = response.data.galleryImages;
                        imgList.forEach((item, index) => {
                            this.newUrl = item.url;
                            const keepsLoading = index !== imgList.length - 1;
                            console.log(keepsLoading);
                            //this.getImg(this.newUrl);
                            this.checkImgSrc(this.newUrl, keepsLoading)
                        });
                    }
                })
                .catch(error => {
                    this.setError(this.newUrl);
                    console.log(error);
                })
        },
        checkImgSrc(src, keepsLoading) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                this.addImg(src);
                this.isLoading = keepsLoading;
            }
            img.onerror = () => {
                this.setError(src);
            }
        },
        // getImg(url = this.newUrl) {
        //     this.isLoading = true;

        //     axios.head(url, { responseType:"blob" })
        //         .then( response => {
        //             if(!/^image/.test(response.data.type)) {
        //                 this.setErrorImg(url);
        //             }
        //             else {
        //                 this.addImg(url);
        //                 this.isLoading = false;
        //             }
        //         })
        //         .catch(error => {
        //             this.setError(url)
        //             console.log(error);
        //         })
        // },
        addImg(data) {
            eventEmitter.$emit('addImg', data);
            this.newUrl = '';
        },
    }
}
</script>

<style lang="scss">
@import '../assets/breakpoints.scss';

.image-loader {
    margin: 60px 0 0;

    &__wrapper {
        display: flex;
        flex-direction: column;

        @include desktop-all {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }

    &__input {
        height: 18px;
        padding: 0 6px;
        border: 1px solid;
        border-radius: 3px;

        @include desktop-all {
            width: 600px;
            margin-right: 12px;
        }

        &_type_error {
            border-color: #e06552;
        }
    }

    &__button {
        padding: 12px 18px;
        margin-top: 24px;
        background-color: #00fdc7;
        border: 1px solid;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            background-color: #00ecba;
        }

        &:active {
            background-color: #5cffdc;
        }

        @include desktop-all {
            margin-top: 0;
        }
    }

    &__information {
        min-height: 64px;
        margin: 12px 0;
    }

    &__error-text {
        display: block;
        margin-bottom: 6px;
        color: #e06552;
    }

    &__loader {
        display: block;
        position: relative;
        width: 64px;
        height: 64px;
        margin: auto;
        background-image: url('../assets/img/loader.svg');
        background-size: 100%;
    }
}
</style>
