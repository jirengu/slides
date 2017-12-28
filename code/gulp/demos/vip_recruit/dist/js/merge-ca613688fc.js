ImgCt = (function() {
    var isInit = false
    var nodeList = []
    var ct = document.createElement('div')
    var img = document.createElement('img')
    var close = document.createElement('span')


    function init(nodes) {
        if (isInit) return
        if (nodes.length === undefined) {
            nodeList.push(nodes)
        } else {
            nodes.forEach(function(node) {
                nodeList.push(node)
            })
        }
        isInit = true

        setStyle()
        bindEvent()
    }

    function setStyle() {
        close.innerText = 'x';
        ct.appendChild(img)
        ct.appendChild(close)
        ct.id = '__img-ct__'
        ct.setAttribute('style', 'background: rgba(0, 0, 0, 0.8);position: fixed;top: 0px;left: 0px;right: 0px;bottom: 0px;display:none;z-index:999; font-size: .40rem;overflow: scroll;text-align: center;padding: 0.4rem;')
        img.setAttribute('style', 'box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.6);max-width:100%; background-color: rgba(255,255,255,0.9)')
        close.setAttribute('style', 'color: #000;font-size: 3em;font-family: fantasy;position: absolute;right: 40px;top: 40px;cursor: pointer;')
        document.body.appendChild(ct);

    }

    function bindEvent() {
        nodeList.forEach(function(node) {
            node.setAttribute('style', 'cursor:pointer')
            node.addEventListener('click', function() {
                img.src = node.src
                ct.style.display = "block"
                console.log(node.src)
            })
        })
        ct.addEventListener('click', function() {
            ct.style.display = "none";
        })
        close.addEventListener('click', function() {
            ct.style.display = "none"
        })
    }

    return {
        init: init
    }
})()

ImgCt.init(document.querySelectorAll('section.course img'))