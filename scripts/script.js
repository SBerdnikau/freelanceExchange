document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const customer = document.getElementById('customer');
    const freelancer = document.getElementById('freelancer');
    const blockCustomer = document.getElementById('block-customer');
    const blockFreelancer = document.getElementById('block-freelancer');
    const blockChoice = document.getElementById('block-choice');
    const btnExit = document.getElementById('btn-exit');
    const formCustomer = document.getElementById('form-customer');

    const orders = [];


    customer.addEventListener('click', () => {
        blockCustomer.style.display = 'block';
        blockChoice.style.display = 'none';
        btnExit.style.display = 'block';
    })

    freelancer.addEventListener('click', () => {
        blockFreelancer.style.display = 'block';
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
        
        //получам из формы все элементы + значения
        for(const elem of formCustomer.elements){
            if(elem.tagName === "INPUT" && elem.type !== "radio" || 
            (elem.type === "radio" && elem.checked) || 
            elem.tagName === "TEXTAREA"  ) {
                objElem[elem.name] = elem.value;

                //очищаем если не radio
                if(elem.type !== 'radio'){
                    elem.value = '';
                }

            }
        }

        orders.push(objElem);
        console.log(orders);
    })
    
})