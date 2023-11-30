const otherbox_content_text = new Array(
    '我也不知道这个板块写什么:-(',
    '刷新网站以刷新此版块。',
    '周杰伦',
    '其实我主要是写后端的...',
    '\"试试我的世界\"',
    '\"试试泰拉瑞亚\"',
    'Other\'s Other',
    '本网站所有页面均由HTML，CSS，Js实现。',
    '科技，数码'
)



window.addEventListener('load', function(){
    const otherboxs = document.querySelectorAll('.otherbox');

    for(let i = 0; i < otherboxs.length; i++){
        otherboxs[i].style.top = `${Math.random()*120}px`;
    }
    
    const otherbox_content = document.querySelectorAll('.otherbox_content');

    const textarray = getRandomNumbers(0, otherbox_content_text.length);
    for(let i = 0; i < 5; i++){
        otherbox_content[i].innerText = otherbox_content_text[textarray[i]];
    }
});

function getRandomNumbers() {  
    let arr = new Array();  
    while(arr.length < 5){  
        let r = Math.floor(Math.random() * otherbox_content_text.length); 
        if(arr.indexOf(r) === -1) 
            arr.push(r);
    }
    return arr;
}  