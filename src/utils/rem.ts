;(() => {
    const baseSize = 16
    function setRem() {
        const scale = document.documentElement.clientWidth / 1920 // 1920为设计稿初始屏幕宽度，可根据需要修改
        document.documentElement.style.fontSize = `${
            baseSize * Math.min(scale, 2)
        }px`
    }

    window.onresize = () => {
        setRem()
    }
})()
