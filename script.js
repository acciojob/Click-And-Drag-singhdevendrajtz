// Your code here.
let isDragging = [false,false,false,false,false,false];
let offsetX=new Array(6), offsetY=new Array(6); 
const boxes=document.querySelectorAll(".cubes")
boxes.forEach((x,y)=>{
	
	boxes[y].addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX[y] = e.clientX - boxes[y].getBoundingClientRect().left;
                offsetY[y] = e.clientY - boxes[y].getBoundingClientRect().top;
       
	});
	document.addEventListener('mousemove', (e) => {
                if (!isDragging) return
				
                boxes[y].style.left = (e.clientX - offsetX[y]) + 'px';
                boxes[y].style.top = (e.clientY - offsetY[y]) + 'px';
            });
	document.addEventListener('mouseup', () => {
                isDragging = false;
            });
	
 boxes[y].addEventListener('dragstart', (e) => {
        e.preventDefault();
    });		
	})
	
		
	