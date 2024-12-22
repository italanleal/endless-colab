function foo(){
    const CTRL_SHIFT_U_KEY = {
        key: 'u',
        code: 'KeyU',
        keyCode: 85,
        ctrlKey: true,
        shiftKey: true
    }
   
    function keyHandler(key){
        function call(){
            document.dispatchEvent(new KeyboardEvent('keydown', key)); 
            setTimeout(() => document.dispatchEvent(new KeyboardEvent('keyup', key)), 100);
        } return { call };
    }

    function keep(){
        const interval = setInterval((() => document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click()), 90000);
       
        function clear() {
            clearInterval(interval);
        } return { clear };
    }

    function captcha(){
        document.querySelector("body > mwc-dialog > md-text-button:nth-child(3)").shadowRoot.querySelector("#button").click();
    }

    setTimeout(keep().clear, 2880000);
    keyHandler(CTRL_SHIFT_U_KEY).call();
    setTimeout(captcha, 8000);

    return setInterval(function() {

        setTimeout(keep().clear, 2880000);
        keyHandler(CTRL_SHIFT_U_KEY).call();
        setTimeout(captcha, 8000);

    }, 2888000);
    
} foo();  
