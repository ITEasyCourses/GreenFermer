# Компонент карточки.

### Принимает в себя :

1) Инпут `productName` НАЗВАНИЕ ТОВАРА (string) (в дальнейшем будет удалён, так как карточка будет принимать объект карточки целиком);

2) Инпут `price` ЦЕНА (string) (в дальнейшем будет удалён, так как карточка будет принимать объект карточки целиком);

3) Инпут `productCard` ОБЪЕКТ КАРТОЧКИ ЦЕЛИКОМ (пока что пустой, так как не реализован бэк-энд);

4) Инпут `imgUrl` УРЛА НА КАРТИНКУ КАРТОЧКИ (в дальнейшем скорее всего так же будет удалён и присваиваться в ts файле компонента).

По клику на `-` или `+` калькулирует итоговую цену в зависимости от колличества данной единицы товара и
при значени счетчика больше 1 эмиттит итоговую цену (`totalPriceInCents`: number).

По клику на иконку урны эмиттит объект карточки целиком (`deleteCardEmitter`: any) (пока пустой. см.выше).