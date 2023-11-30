const draggablebox_content_text = new Array(
    '我也不知道这个板块写什么:-(',
    '刷新网站以刷新此版块。',
    '周杰伦',
    '其实我主要是写后端的...',
    '\"试试我的世界\"',
    '\"试试泰拉瑞亚\"',
    'Other\'s Other',
    '本网站所有页面均由HTML，CSS，Js实现。'
)



window.addEventListener('load', function(){
    const draggableboxs = document.querySelectorAll('.draggablebox');

    for(let i = 0; i < draggableboxs.length; i++){
        draggableboxs[i].style.top = `${Math.random()*120}px`;
    }
    
    const draggablebox_content = document.querySelectorAll('.draggablebox_content');

    const textarray = getRandomNumbers(0, draggablebox_content_text.length);
    for(let i = 0; i < 5; i++){
        draggablebox_content[i].innerText = draggablebox_content_text[textarray[i]];
    }
});

function getRandomNumbers() {  
    let arr = new Array();  
    while(arr.length < 5){  
        let r = Math.floor(Math.random() * draggablebox_content_text.length); 
        if(arr.indexOf(r) === -1) 
            arr.push(r);
    }
    return arr;
}  