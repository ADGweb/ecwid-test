<template>
    <div class="images-gallery" ref="field">
        <div
            v-if="dataImgs.length"
            class="images-gallery__wrapper"
            ref="wrapper"
        >
            <div
                v-for="(dataImg, index) in dataImgs"
                :key="dataImg.key"
                @click="selectImageMobile"
                class="images-gallery__image-wrapper"
            >
                <img
                    :src="dataImg.url"
                    alt="some image"
                    class="images-gallery__image"
                >
                <span
                    class="images-gallery__image-delete"
                    @click="deleteImage(index, $event)"
                ></span>
            </div>
        </div>
    </div>
</template>

<script>
import {eventEmitter} from '../main'

export default {
    name: 'ImagesGallery',
    data() {
        return {
            dataImgs: [],
            counterKey: 0,
        }
    },
    created() {
        eventEmitter.$on('addImage', imgUrl => {
            const dataImg = {
                url: imgUrl,
                key: this.counterKey++,
            }

            this.dataImgs.push(dataImg);
        });
    },
    beforeMount() {
        window.addEventListener('resize', this.updatImagesSize);
    },
    mounted() {
        const field = this.$refs.field;
        let dragedImage = null;

        field.addEventListener('dragover', (event) => {
            event.preventDefault();
        })

        field.addEventListener('drop', () => {
            const dataImg = {
                url: dragedImage.src,
                key: this.counterKey++,
            }
            this.dataImgs.push(dataImg);
        })

        eventEmitter.$on('dragStart', img => {
            field.classList.add('images-gallery_type_backlight');
            dragedImage = img;
        });

        eventEmitter.$on('dragEnd', () => {
            field.classList.remove('images-gallery_type_backlight');
        });
    },
    updated() {
        this.updatImagesSize();
    },
    methods: {
        deleteImage(index) {
            this.dataImgs.splice(index, 1)
        },
        selectImageMobile(event) {
            if(window.innerWidth > 1023) {
                return;
            }

            this.$refs.wrapper.children.forEach(el => {
                if(el === event.currentTarget) {
                    el.classList.toggle('images-gallery__image-wrapper_type_select');
                }
                else {
                    el.classList.remove('images-gallery__image-wrapper_type_select');
                }

            })

        },
        updatImagesSize() {
            if(!this.dataImgs.length) {
                return;
            }

            const maxImageHeight = 240;
            const lastImageHeight = 200;
            const wrapperWidth = this.$refs.wrapper.clientWidth;
            const imageList = document.querySelectorAll('.images-gallery__image');
            let widthLine = 0;
            let arrImageLine = [];

            for(const img of imageList){
                img.style.height = `${maxImageHeight}px`;
                widthLine += img.clientWidth + 12;
                arrImageLine.push(img);
                if(widthLine > wrapperWidth) {
                    this.updatImagesSizeInLine(widthLine, arrImageLine, wrapperWidth);

                    widthLine = 0;
                    arrImageLine = [];
                }
            }

            arrImageLine.forEach(img => {
                img.style.height = `${lastImageHeight}px`;
            })
        },
        updatImagesSizeInLine(widthLine, arrImageLine, wrapperWidth) {
            let newWidthLine = 0;

            if(widthLine < wrapperWidth) {
                return;
            }

            arrImageLine.forEach(img => {
                const newHeight = img.clientHeight - 1;
                img.style.height = `${newHeight}px`;
                newWidthLine += img.clientWidth + 12;
            })

            this.updatImagesSizeInLine(newWidthLine, arrImageLine, wrapperWidth);
        }
    }

}
</script>

<style lang="scss">
@import '../assets/breakpoints.scss';

.images-gallery {
    min-height: 48px;

    @include desktop-all {
        min-height: 120px;
    }

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
        margin: -6px;
    }

    &__image-wrapper {
        display: flex;
        position: relative;

        @include desktop-all {
            &:hover .images-gallery__image {
                opacity: 0.5;
            }

            &:hover .images-gallery__image-delete {
                display: block;

            }
        }

        &_type_select {
            &:hover .images-gallery__image {
                opacity: 0.5;
            }

            &:hover .images-gallery__image-delete {
                display: block;

            }
        }
    }

    &__image {
        margin: 6px;
    }

    &__image-delete {
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
