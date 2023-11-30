const webarr = [
    ["http://computersociety.1m9sunnyboy.cn/page/%E6%89%93%E5%AD%97%E7%BB%83%E4%B9%A0.html", "打字练习"],
    ["https://yiyan.baidu.com/", "文心一言"],
    ["https://mcmod.cn", "MinecraftMod百科"],
    ["https://fanyi.baidu.com/", "百度翻译"],
    ["https://bilibili.com/", "BiliBili"],
    ["https://CSDN.net/", "CSDN"],
    ["https://terraria.wiki.gg/zh/wiki/Terraria_Wiki", "TerrariaWiki"],
    ["https://github.com/", "GitHub"],
    ["https://erya.mooc.chaoxing.com/", "超星学习通"]
];

let li;

window.addEventListener("load", ()=>{
    const toollist = document.querySelector(".toollist");

    for(i in webarr){
        li = document.createElement('li');
        li.innerHTML = `<a href=\"${webarr[i][0]}\" class=\"toolbox\" target=\"_blank\"\><div class=\"toolcontent\"\><div class=\"toolcontent_text\"\>${webarr[i][1]}</div\></div\></a\>`;
        toollist.appendChild(li);
    }
});