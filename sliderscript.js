class slider{
    constructor()
    {
        this.images = [];
        this.images[0] = "P1.PNG";
        this.images[1] = "P2.PNG";
        this.images[2] = "P3.PNG";
        this.images[3] = "P4.PNG";
        this.images[4] = "P5.PNG";
        this.images[5] = "P6.PNG";
        this.images[6] = "P7.PNG";
        this.images[7] = "P8.PNG";
        this.images[8] = "P9.PNG";
        this.images[9] = "P10.PNG";
        this.images[10] = "P11.PNG";
        

       this.links = [] ;
       this.links[0] = "";
       this.links[1] = "https://html5test.com";
       this.links[2] = "#";
       this.links[3] = "https://www.javascripttutorial.net";
       this.links[4] = "#";
       this.links[5] = "#";
       this.links[6] = "#";
       this.links[7] = "#";
       this.links[8] = "#";
       this.links[9] = "#";
       this.links[10] = "#";
       this.links[11] = "#";
       this.counter = 0

       this.playslider();

       setInterval(()=>{
           this.playslider();
       },2000);
    }
    playslider()
    {
    if(this.counter < this.images.length - 1)
    {
        this.counter++;
    }else
    {
        this.counter = 0;
    }
    document.slider_show.src = this.images[this.counter];
    document.getElementById("LinkImg").href= this.links[this.counter];

    }


}
onload = new slider();