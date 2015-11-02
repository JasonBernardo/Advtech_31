//JavaScript doc

/* the coin class sets up each coin to have its own  
* position on the screen
*/
function Coin(){
    //properties to let each coin ctore its own x/y position
    this.x = Math.floor(Math.random()*800);
    this.y = Math.floor(Math.random()*800);
    //property keep track of 
    this.item_on_page;
   
    
    /* 
    *The create methos to put a visual of the coin on the screen
    */
    this.create=function(){
        this.item_on_page = document.createElement("img");
        this.item_on_page.src="img/coin.png";
        //put the image on the screen.
        document.body.appendChild(this.item_on_page);
         this.item_on_page.style.position="absolute";
         this.item_on_page.style.top=this.y + "px";
         this.item_on_page.style.left=this.x + "px";
    }
    this.destroy=function(){
        
    }
}
