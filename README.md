# Сборка
Проект собран на vue-cli
Node v14.11.0
Vue-cli v4.5.13
## Описание
Галерея изображений. В инпут можно ввести url до Json-файла с изображениями или
url до изображения. При клике по кнопке "Загрузить" или нажатии ENTER, начнется валидация и загрузка
изображения/изображений. Отобразится лоадер.
Лоадер будет показываться на протяжении всей валидации/загрузки.

При единичной загрузки изображения, после сабмита, лоадер отобразится. Будет проверена ссылка
на изображение. Лоадер пропадет после успешной загрузки или ошибки. В случае ошибки, появится информация
об ошибке с указанием url, а также поле инпута веделится красным бордером. В случае успешной загрузки,
в поле под формой появится изображение и инпут очистится.

При загрузки изображений из Json, после сабмита, отобразится лоадер, будет проверена ссылка
на Json-файла. В случае если ссылка не верная лоадер пропадет, появится информация об ошибке с указанием url.
Еслии ссылка корректная, начнется валидация и загрузка изображений указанных в Json. В случае если в файле
будут некорректные url, информация об ошибках будет показана списком с указанием url.
Лоадер пропадет после обработки всех потенциальных изображений в Json.

На момент загрузки, кнопка "Загрузить" становится неактивной.

Если поле ввода было пустым на момент сабмита формы, ему добавится красный бордер как ошибка/подсказка.

Также добавлять изображения можно используя drag and drop. При перетягивании изображения, поле, в которое
можно дропнуть изображение, подсветится/акцентируется.

Добавление изображения ВСЕГДА и ЛЮБЫМ СПОСОБОМ происходит вначало списка галереи, т.е. в верхний левый угол.

Изображения можно удалять.

На десктопе при наведении на изображение, оно становится светлее и появляется значек корзины.
При наведении на корзину она немного увеличивается акцентируя то, что с ней можно взаимодействовать. При клике по казине,
изображение удалится. Удалять изображения можно любое.

На мобильной версии, чтобы удалить изображение на него необходимо кликнуть, после чего изображение станет
светлее и появится значек корзины. Клик по корзине удалит изображение, клик по выделенному изображению повторно или
вне изображений, вернет внешний вид изображения в изночальное состояние. Клик по другому изображению поменяет выделенное
изображение.

Верстка сделана адаптивной.

При добавлении, удалении изображений или ресайзе окна браузера, у изображений в галерее будут динамически меняться размеры.
Так чтобы высота изображений в ряду была одинаковой. При этом пропорции изображений сохраняются.

Для того чтобы посмотреть работу галереи, можно воспользоваться примерами ссылок и изображений, указанными под галереей.
При клике по кнопкам будет скопирована ссылка в буфер обмена, которую можно сразу вставить в инпут. Информация, о том что ссылка была
скопирована, ненадолго появится в названии кнопки.
Изображения, для проверки работы drag and drop.
