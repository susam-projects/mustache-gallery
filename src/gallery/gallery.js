import galleryTemplate from './gallery.template.js';
import renderTemplate from '../utils/renderTemplate.js';
import { bindKeyEventHandlers, bindTargetedHandlers } from '../utils/bind.js';

const SELECTED_CLASS = 'gallery__image-selected';
const IMAGE_SIZE = 200;
const IMAGE_GAP = 10;

class Gallery {
    constructor({ photos = [], size = 5, current, container }) {
        this._photos = photos;
        this._size = Math.min(size, photos.length);
        this._$container = $(container);

        this._current = Math.min(current, photos.length - 1);
        this._current = Math.max(this._current, 0);
        this._watchField('_current', this._updateContent.bind(this));

        this._render();
        this._bindContent();
        this._initContent();
        this._updateContent();
    }

    _render() {
        renderTemplate(this._$container.get(0), galleryTemplate, {
            photos: this._photos,
        });
    }

    _watchField(fieldName, callback) {
        let value = this[fieldName];
        Object.defineProperty(this, fieldName, {
            get: () => value,
            set: (newValue) => {
                if (newValue !== value) {
                    value = newValue;
                    callback();
                }
            },
        });
    }

    _bindContent() {
        this._bindContentClick();
        this._bindContentKeyDown();
    }

    _bindContentClick() {
        const CLICK_HANDLERS = [
            {
                selector: '.gallery__image-item',
                handle: ($target) => {
                    const imageId = $target
                        .closest('.gallery__image-item')
                        .data('id');
                    this._onImageClick(imageId);
                },
            },
            {
                selector: '.gallery__icon-left',
                handle: () => {
                    this._goLeft();
                },
            },
            {
                selector: '.gallery__icon-right',
                handle: () => {
                    this._goRight();
                },
            },
        ];

        bindTargetedHandlers(this._$container, 'click', CLICK_HANDLERS);
    }

    _bindContentKeyDown() {
        const KEYDOWN_HANDLERS = [
            {
                keys: ['ArrowLeft'],
                handle: () => {
                    this._goLeft();
                },
            },
            {
                keys: ['ArrowRight'],
                handle: () => {
                    this._goRight();
                },
            },
        ];

        bindKeyEventHandlers(this._$container, 'keydown', KEYDOWN_HANDLERS);
    }

    _onImageClick(imageId) {
        if (!imageId) return;
        this._current = this._photos.findIndex((photo) => photo.id === imageId);
    }

    _goLeft() {
        this._current = Math.max(0, this._current - 1);
    }

    _goRight() {
        this._current = Math.min(this._photos.length - 1, this._current + 1);
    }

    _initContent() {
        const imagesWidth = this._size * IMAGE_SIZE + this._size * IMAGE_GAP;
        this._$container
            .find('.gallery__images-container')
            .css('width', imagesWidth);

        // setting image size here to not repeat the same values in css
        this._$container
            .find('.gallery__image-item')
            .css('width', IMAGE_SIZE)
            .css('height', IMAGE_SIZE)
            .css('margin-left', IMAGE_GAP / 2)
            .css('margin-right', IMAGE_GAP / 2);
    }

    _updateContent() {
        const firstPhoto = this._chooseFirstVisiblePhoto();
        const photoListPosition = firstPhoto * (IMAGE_SIZE + IMAGE_GAP);

        this._$container
            .find('.gallery__image-list')
            .css('transform', `translate(-${photoListPosition}px)`);

        this._$container.find('.gallery__image-item').each((i, el) => {
            const $imageEl = $(el);
            const isSelected = i === this._current;
            if (isSelected) {
                $imageEl.addClass(SELECTED_CLASS);
            } else {
                $imageEl.removeClass(SELECTED_CLASS);
            }
        });
    }

    _chooseFirstVisiblePhoto() {
        let firstPhoto = this._current - Math.floor(this._size / 2);

        if (firstPhoto + this._size > this._photos.length) {
            firstPhoto = this._photos.length - this._size;
        }

        if (firstPhoto < 0) {
            firstPhoto = 0;
        }

        return firstPhoto;
    }
}

export default Gallery;
