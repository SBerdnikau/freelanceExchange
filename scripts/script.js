document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Злементы
    const customer = document.getElementById('customer'),
    freelancer = document.getElementById('freelancer'),
    blockCustomer = document.getElementById('block-customer'),
    blockFreelancer = document.getElementById('block-freelancer'),
    blockChoice = document.getElementById('block-choice'),
    btnExit = document.getElementById('btn-exit'),
    formCustomer = document.getElementById('form-customer'),
    ordersTabel = document.getElementById('orders');

    const orders = [];

    //отрисовка во фриланс таблице
    const renderOrders = () => {

        ordersTabel.textContent = '';

        orders.forEach( (order, i) => {

            ordersTabel.innerHTML += `
            <tr class="order" data-number-order="${i}">
                <td>${i + 1}</td>
                <td>${order.title}</td>
                <td class="${order.currency}"></td>
                <td>${order.deadline}</td>
            </tr>`;

        } );
        
    }

    //обработчик фриланс - заказы
    ordersTabel.addEventListener('click', event => {
        const target = event.target;
        const targetOrder = target.closest('.order');

        if(targetOrder){
            //открываем модальное окно
            openModal();
        }

        console.log(orders[targetOrder.dataset.numberOrder]);
    });


    customer.addEventListener('click', () => {
        blockCustomer.style.display = 'block';
        blockChoice.style.display = 'none';
        btnExit.style.display = 'block';
    })

    freelancer.addEventListener('click', () => {
        blockFreelancer.style.display = 'block';
        renderOrders();
        blockChoice.style.display = 'none';
        btnExit.style.display = 'block';
    })

    //паказываем главное меню
    btnExit.addEventListener('click', () => {
        btnExit.style.display = 'none';
        blockFreelancer.style.display = 'none';
        blockCustomer.style.display = 'none';
        blockChoice.style.display = 'block';
    })

    //обрабатываем форму заказчика
    formCustomer.addEventListener('submit', (event) => {
        event.preventDefault();
        const objElem = {};
        
        //Способ 1 получам из формы все элементы + значения
        const elements  = [...formCustomer.elements]
            .filter( (elem) => ( elem.tagName === "INPUT" && elem.type !== "radio" || 
            (elem.type === "radio" && elem.checked) || elem.tagName === "TEXTAREA") );

            elements.forEach( (elem) => {
                    objElem[elem.name] = elem.value;

            });
    
        //Способ 2 получам из формы все элементы + значения
        // [...formCustomer.elements].forEach( (elem) => {
        //     if(elem.tagName === "INPUT" && elem.type !== "radio" || 
        //     (elem.type === "radio" && elem.checked) || 
        //     elem.tagName === "TEXTAREA"  ) {
        //         objElem[elem.name] = elem.value;

        //         //очищаем если не radio
        //         if(elem.type !== 'radio'){
        //             elem.value = '';
        //         }

        //     }
        // } );

        //Способ 3 получам из формы все элементы + значения
        // for(const elem of formCustomer.elements){
        //     if(elem.tagName === "INPUT" && elem.type !== "radio" || 
        //     (elem.type === "radio" && elem.checked) || 
        //     elem.tagName === "TEXTAREA"  ) {
        //         objElem[elem.name] = elem.value;

        //         //очищаем если не radio
        //         if(elem.type !== 'radio'){
        //             elem.value = '';
        //         }

        //     }
        // }

        formCustomer.reset();

        //добавляем элементы формы заказа в массив
        orders.push(objElem);
        console.dir(orders);
    });

   
    
})

