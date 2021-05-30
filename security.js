class Security {

    constructor(){

        this.access1 = createInput("Answer")
        this.access1.position(100,90);
        this.access1.style('background', 'lightpink');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');  
    }
    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });
    }
}