const EventEmmiter = require('events');
const myEmmiter = new EventEmmiter();//создали объект эммитора

const logDbConnection = () => {// функция
    console.log('DB connected');
};
myEmmiter.addListener('connected', logDbConnection);//добавили слушатель и передали туда консоль лог
myEmmiter.emit('connected');// подсоединились к logDbConnection

myEmmiter.removeListener('connected', logDbConnection);// удалили logDbConnection
//myEmmiter.off('connected', logDbConnection);//аналогичен тому что наверху
//myEmmiter.removeAllListeners('connected')// удаляет все листенеры

myEmmiter.emit('connected');// он не сработает так как его некому передать

myEmmiter.on('msg', (data) => { // аналог addListener
    console.log(`Получил: ${data}`);
});

myEmmiter.prependListener('msg', (data) => { // аналог addListener
    console.log(`Prepend`);
});
myEmmiter.emit('msg', 'Привет! Получи мое сообщение');

myEmmiter.once('off', () => { // только один раз вызывается
    console.log('1 раз и не более');
})
myEmmiter.emit('off'); // и здесь отработался см выше once
myEmmiter.emit('off');


console.log(myEmmiter.getMaxListeners());// 10 щт
myEmmiter.setMaxListeners(1); // задали макс кол во листенеров
console.log(myEmmiter.getMaxListeners()); //вывели кол во скейчас (1)
console.log(myEmmiter.listenerCount('mgs')) // колво эммиторов на msg
console.log(myEmmiter.listenerCount('off'))// колво эммиторов на off (0) так как он был одноразовый
console.log(myEmmiter.listenerCount('mgs'))


myEmmiter.on('error', (err) => {// без него выдаст ошибку как таковой
    console.log(`Произошла ошибка: ${err.message}`);
});
myEmmiter.emit('error', new Error('Страдай'));// а так выдаст ошибку 


const target = new EventTarget();// для понимая иногда в старых проектах увидишь а так не юзать
const logTarget = () => {
    console.log(`Connected to target`)
}
target.addEventListener('connected', logTarget);
target.dispatchEvent(new EventTarget('connected'));