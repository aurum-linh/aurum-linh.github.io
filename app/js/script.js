function changeTitles(titles, interval) {
    let currentIndex = 0;

    function changeTitle() {
        document.title = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
        setTimeout(changeTitle, interval);
    }

    changeTitle();
}


const titles = [" aurum linh 𓆩🖤𓆪 ", "⋆˚₊ 𖤓☽˚.⋆", "°‧ 𓆝 𓆟 𓆞 ·｡"];
const interval = 2000; // 2 seconds

changeTitles(titles, interval);