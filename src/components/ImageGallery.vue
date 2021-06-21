<template>
    <div class="image-gallery" ref="field">
        <div
            v-if="dataImgs.length"
            class="image-gallery__wrapper"
            ref="wrapper"
        >
            <div
                v-for="(dataImg, index) in dataImgs"
                :key="dataImg.key"
                @click="selectImgMobile"
                class="image-gallery__imgage-wrapper"
            >
                <img
                    :src="dataImg.url"
                    alt="some img"
                    class="image-gallery__img"
                >
                <span
                    class="image-gallery__imgage-delete"
                    @click="deleteImg(index, $event)"
                ></span>
            </div>
        </div>
    </div>
</template>

<script>
import {eventEmitter} from '../main'

export default {
    name: 'ImageGallery',
    data() {
        return {
            dataImgs: [],
            counterKey: 0,
        }
    },
    created() {
        eventEmitter.$on('addImg', img => {
            const dataImg = {
                url: img,
                key: this.counterKey++,
            }

            this.dataImgs.unshift(dataImg);
            //this.dataImgs = [dataImg, ...this.dataImgs]; можно так, но unshift думаю более читаемый
        });
    },
    mounted() {
        const field = this.$refs.field;
        let card = null;

        field.addEventListener('dragover', (event) => {
            event.preventDefault();
        })

        field.addEventListener('drop', () => {
            const dataImg = {
                url: card.src,
                key: this.counterKey++,
            }

            this.dataImgs.unshift(dataImg);
        })

        eventEmitter.$on('dragStart', img => {
            field.classList.add('image-gallery_type_backlight');
            card = img;
        });

        eventEmitter.$on('dragEnd', () => {
            field.classList.remove('image-gallery_type_backlight');
        });
    },
    methods: {
        deleteImg(index) {
            this.dataImgs.splice(index, 1)
        },
        selectImgMobile(event) {
            if(window.innerWidth > 1023) {
                return;
            }

            this.$refs.wrapper.children.forEach(el => {
                if(el === event.currentTarget) {
                    el.classList.toggle('image-gallery__imgage-wrapper_type_select');
                }
                else {
                    el.classList.remove('image-gallery__imgage-wrapper_type_select');
                }

            })

        },
    }

}
</script>

<style lang="scss">
@import '../assets/breakpoints.scss';

.image-gallery {
    min-height: 120px;

    &_type {
        &_backlight {
            background-color: #8aeed8;
            box-shadow: 0px 0px 3px 3px #00130f;
            border-radius: 6px;
            opacity: 0.3;
        }
    }

    &__wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    &__imgage-wrapper {
        display: flex;
        position: relative;

        @include desktop-all {
            &:hover .image-gallery__img {
                opacity: 0.5;
            }

            &:hover .image-gallery__imgage-delete {
                display: block;

            }
        }

        &_type_select {
            &:hover .image-gallery__img {
                opacity: 0.5;
            }

            &:hover .image-gallery__imgage-delete {
                display: block;

            }
        }
    }

    &__img {
        height: 180px;
    }

    &__imgage-delete {
        position: absolute;
        display: none;
        width: 48px;
        height: 48px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url('../assets/img/dustbin.svg');
        background-size: 100%;

        &:hover {
            transform: translate(-50%, -50%) scale(1.1, 1.1);
        }

    }
}
</style>
