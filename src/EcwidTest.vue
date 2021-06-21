<template>
    <div class="ecwid-test">
        <h1 class="ecwid-test__title">Галерея изображений</h1>
        <image-loader/>
        <image-gallery/>
        <div
            class="ecwid-test__examples"
            ref="examples"
        >
            <h2>Примеры URL</h2>
            <h3>Пример ссылки на Json файл:</h3>
            <p class="ecwid-test__text">https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json</p>
            <h3>Примеры ссылок на картинки:</h3>
            <ol class="ecwid-test__list">
                <li class="ecwid-test__text">https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg</li>
                <li class="ecwid-test__text">https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg</li>
                <li class="ecwid-test__text">https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg</li>
                <li class="ecwid-test__text">https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg</li>
            </ol>
            <h3>Примеры картинок для Drag and Drop</h3>

            <img
                src="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg"
                class="ecwid-test__img"
            >
            <img
                src="https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg"
                class="ecwid-test__img"
            >
        </div>
    </div>
</template>

<script>
import ImageLoader from './components/ImageLoader.vue'
import ImageGallery from './components/ImageGallery.vue'
import {eventEmitter} from './main'
//import {dragAndDrop} from './modules/drag-and-drop'

export default {
    name: 'EcwidTest',
    components: {
        ImageLoader,
        ImageGallery
    },
    mounted() {
        const images = this.$refs.examples.querySelectorAll('.ecwid-test__img');

        this.setDraggableAttribute(images);
        images.forEach(img => {
            img.addEventListener('dragstart', this.dragStart);
            img.addEventListener('dragend', this.dragEnd);
        });
    },
    methods: {
        setDraggableAttribute(images) {
            images.forEach(img => {
                img.setAttribute('draggable', 'true');
            });
        },
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
        font-size: 15px;

        @include mobile-l {
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

    &__img {
        height: 180px;
        cursor: grab;

        &:active {
            cursor: grabbing;
        }

    }
}

</style>
