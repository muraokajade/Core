const btn1 = document.querySelector('.feature-btn-1');
const btn2 = document.querySelector('.feature-btn-2');
const btn3 = document.querySelector('.feature-btn-3');
const btn4 = document.querySelector('.feature-btn-4');
const feature1 = document.querySelector('#feature1');
const feature2 = document.querySelector('#feature2');
const feature3 = document.querySelector('#feature3');
const feature4 = document.querySelector('#feature4');

btn1.addEventListener('click', () => {
    console.log('clicked');
    feature1.classList.remove('sm:hidden');
    feature2.classList.add('sm:hidden');
    feature3.classList.add('sm:hidden');
    feature4.classList.add('sm:hidden');
    btn1.classList.add('bg-red-600', 'text-gray-300');
    btn2.classList.remove('bg-red-600', 'text-gray-300');
    btn3.classList.remove('bg-red-600', 'text-gray-300');
    btn4.classList.remove('bg-red-600', 'text-gray-300');
});

btn2.addEventListener('click', () => {
    feature1.classList.add('sm:hidden');
    feature3.classList.add('sm:hidden');
    feature4.classList.add('sm:hidden');
    feature2.classList.remove('sm:hidden');
    btn2.classList.add('bg-red-600', 'text-gray-300');
    btn1.classList.remove('bg-red-600', 'text-gray-300');
    btn3.classList.remove('bg-red-600', 'text-gray-300');
    btn4.classList.remove('bg-red-600', 'text-gray-300');
});
btn3.addEventListener('click', () => {
    console.log('clicked');
    feature1.classList.add('sm:hidden');
    feature2.classList.add('sm:hidden');
    feature4.classList.add('sm:hidden');
    feature3.classList.remove('sm:hidden');
    btn3.classList.add('bg-red-600', 'text-gray-300');
    btn2.classList.remove('bg-red-600', 'text-gray-300');
    btn1.classList.remove('bg-red-600', 'text-gray-300');
    btn4.classList.remove('bg-red-600', 'text-gray-300');
});
btn4.addEventListener('click', () => {
    feature1.classList.add('sm:hidden');
    feature2.classList.add('sm:hidden');
    feature3.classList.add('sm:hidden');
    feature4.classList.remove('sm:hidden');
    btn4.classList.add('bg-red-600', 'text-gray-300');
    console.log('clicked');
    btn1.classList.remove('bg-red-600', 'text-gray-300');
    btn3.classList.remove('bg-red-600', 'text-gray-300');
    btn2.classList.remove('bg-red-600', 'text-gray-300');
});