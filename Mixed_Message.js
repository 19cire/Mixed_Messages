// message object

const messenger = {
    greet: [ 'Hello','Hey','Moin','Servus','Salut '],
    advice: ['have an awesome day ','your future starts now ','enjoy your day '],
    advice2: [ 'make a pizza','donate something','call your mother', 'learn something new'],
};

//message picker 
const picker = (list1,list2,list3) => {
    const one = list1[Math.floor(Math.random()*list1.length)];
    const two = list2[Math.floor(Math.random()*list2.length)];
    const three = list3[Math.floor(Math.random()*list3.length)];

  
    return one + ','+ two + ' and '+ three;
}
console.log(picker(messenger.greet,messenger.advice,messenger.advice2))