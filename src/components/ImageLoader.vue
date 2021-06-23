<template>
  <div class="image-loader">
        <form
            @submit.prevent="checkLink"
            class="image-loader__wrapper"
        >
            <input
                v-model="urlOfAddedImage"
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
                    {{url}}<strong> некорректный URL</strong>
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
            urlOfAddedImage: '',
            isError: false,
            isLoading: false,
            errorUrls: [],
            counterImage: 0,
        }
    },
    methods: {
        checkLink() {
            this.resetData();

            if(this.urlOfAddedImage === '') {
                this.isError = true;
                return;
            }

            this.isLoading = true;

            if(/\.json$/.test(this.urlOfAddedImage)) {
                this.getJson();
            } else {
                this.checkImageSrc(this.urlOfAddedImage);
            }
        },
        resetData() {
            this.isError = false;
            this.errorUrls = [];
            this.counterImage = 0;
        },
        setError(url) {
            this.isError = true;
            this.errorUrls.push(url);
        },
        getJson() {
            axios.get(this.urlOfAddedImage)
                .then( response => {
                    if(!response.data.galleryImages){
                        this.setError(this.urlOfAddedImage);
                        this.isLoading = false;
                    }
                    else {
                        const imageList = response.data.galleryImages;
                        imageList.forEach(item => {
                            this.urlOfAddedImage = item.url;
                            this.checkImageSrc(this.urlOfAddedImage, imageList.length)
                        });
                    }
                })
                .catch(error => {
                    this.setError(this.urlOfAddedImage);
                    this.isLoading = false;
                    console.log(error);
                })
        },
        checkImageSrc(imgUrl, lengthImageList = 1) {
            const img = new Image();
            img.src = imgUrl;
            img.onload = () => {
                this.addImage(imgUrl);
                this.checkIsLastImage(lengthImageList, ++this.counterImage);
            }
            img.onerror = () => {
                this.setError(imgUrl);
                this.checkIsLastImage(lengthImageList, ++this.counterImage);
            }
        },
        checkIsLastImage(lengthImageList, counterImage){
            if(counterImage === lengthImageList) {
                this.isLoading = false;
            }
        },
        addImage(imgUrl) {
            eventEmitter.$emit('addImage', imgUrl);
            this.urlOfAddedImage = '';
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
        min-height: 36px;
        margin: 12px 0;

        @include desktop-all {
            min-height: 48px;
        }
    }

    &__error-text {
        display: block;
        margin-bottom: 6px;
        color: #e06552;
    }

    &__loader {
        display: block;
        position: relative;
        width: 36px;
        height: 36px;
        margin: auto;
        background-image: url('../assets/img/loader.svg');
        background-size: 100%;

        @include desktop-all {
            width: 48px;
            height: 48px;
        }
    }
}
</style>
