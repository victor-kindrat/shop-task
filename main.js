const fileExt = '.jpg';
let basket = [];
let countOfElements = 278;

for (let i = 1; i < countOfElements; i++) {
    $('.productContainer').append(`<div class="productItem" id="productItem${i}"><span>${i}</span></div>`)
    $(`#productItem${i}`).click(function() {
        basket.push({
            id: i
        });
        $('#productCounter').html(basket.length)
        console.log(basket)
    })
}

$('.productItem').css({
    'backgroundImage': 'url(./img/loader.gif)',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center'
})
$(document).ready(function() {
    for (let i = 1; i < countOfElements; i++) {
        setTimeout(() => {
            $('#productItem' + i).css({
                'backgroundImage': `url("./img/${i}${fileExt}")`
            })
        }, 2000);
    }
});


$('#receipt').fadeOut(0)
$('#productBtn').click(function() {
    $('.popup__goods-container').html('')
    for (let item of basket) {
        let itemBlock = `<div class="popup__text popup__goods__item">
                            <span>${item.id}</span>
                        </div>`
        $('.popup__goods-container').append(itemBlock)
    }
    $('#receipt').fadeToggle(300);
})