<template>
    <div class="ecwid-test">
        <h1 class="ecwid-test__title">Галерея изображений</h1>
        <image-loader/>
        <images-gallery/>
        <div
            class="ecwid-test__examples"
            ref="examples"
        >
            <h2>Примеры URL</h2>
            <h3>Пример ссылки на Json файл:</h3>
            <button class="ecwid-test__button-copy">Скопировать ссылку на JSON</button>
            <input type="text" class="ecwid-test__input-example" value="https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json">
            <h3>Примеры ссылок на картинки:</h3>
            <ol class="ecwid-test__list">
                <li class="ecwid-test__text">
                    <button class="ecwid-test__button-copy">Скопировать ссылку 1</button>
                    <input type="text" class="ecwid-test__input-example" value="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg">
                </li>
                <li class="ecwid-test__text">
                    <button class="ecwid-test__button-copy">Скопировать ссылку 2</button>
                    <input type="text" class="ecwid-test__input-example" value="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg">
                </li>
                <li class="ecwid-test__text">
                    <button class="ecwid-test__button-copy">Скопировать ссылку 3</button>
                    <input type="text" class="ecwid-test__input-example" value="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg">
                </li>
                <li class="ecwid-test__text">
                    <button class="ecwid-test__button-copy">Скопировать ссылку 4</button>
                    <input type="text" class="ecwid-test__input-example" value="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg">
                </li>
            </ol>
            <h3>Примеры картинок для Drag and Drop:</h3>
            <div class="ecwid-test__img-wrapper">
                <img
                src="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg"
                class="ecwid-test__img"
            >
            <img
                src="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg"
                class="ecwid-test__img"
            >
            <img
                src="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg"
                class="ecwid-test__img"
            >
            </div>
        </div>
    </div>
</template>

<script>
import ImageLoader from './components/ImageLoader.vue'
import ImagesGallery from './components/ImagesGallery.vue'
import {eventEmitter} from './main'

export default {
    name: 'EcwidTest',
    components: {
        ImageLoader,
        ImagesGallery
    },
    mounted() {
        const images = this.$refs.examples.querySelectorAll('.ecwid-test__img');
        const buttons = this.$refs.examples.querySelectorAll('.ecwid-test__button-copy');

        images.forEach(img => {
            img.setAttribute('draggable', 'true');
            img.addEventListener('dragstart', this.dragStart);
            img.addEventListener('dragend', this.dragEnd);
        });

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const buttontext = button.textContent;
                button.nextElementSibling.select();
                document.execCommand('copy');
                button.textContent = "Скопированно в буфер";
                setTimeout(() => {button.textContent = buttontext}, 1000);
            })
        })
    },
    methods: {
        dragStart(event) {
            eventEmitter.$emit('dragStart', event.target);
        },
        dragEnd(event) {
            eventEmitter.$emit('dragEnd', event.target);
        }
    }
}
</script>

<style lang="scss">
@import './assets/breakpoints.scss';

.ecwid-test {
    width: auto;
    padding: 0 18px;

    &__title {
        margin-top: 48px;

        @include desktop-all {
            margin-top: 60px;
        }
    }

    @include desktop-all {
        max-width: 860px;
        margin: 0 auto;
        padding: 0;
    }

    &__text {
        font-size: 12px;

        @include mobile-s {
            font-size: 15px;
        }

        @include mobile-ml {
            font-size: 18px;
        }

        @include desktop-all {
            font-size: 18px;
        }
    }

    &__list {
        padding: 0;
        list-style: none;
    }

    &__button-copy {
        padding: 12px 18px;
        width: 100%;
        margin-bottom: 12px;
        background-color: #00fdc7;
        border: 1px solid;
        border-radius: 3px;
        cursor: pointer;

        @include desktop-all {
            width: 240px;
        }

        &:hover {
            background-color: #00ecba;
        }

        &:active {
            background-color: #5cffdc;
        }

    }

    &__input-example {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
    }

    &__img-wrapper {
        display: flex;
        flex-direction: column;

        @include mobile-l {
            flex-direction: row;
            justify-content: space-between;
        }

        @include desktop-all {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    &__img {
        cursor: grab;

        @include mobile-l {
            width: 25%;
        }

        @include desktop-all {
            width: 25%;
        }

        &:active {
            cursor: grabbing;
        }
    }
}

</style>
