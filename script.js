// Your code here.
let isDragging = false;
let offsetX, offsetY; 
const boxes=document.querySelectorAll(".cubes")
boxes.forEach((x,y)=>{
	boxes[y].addEventListener('click',function(){
	boxes[y].addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - boxes[y].getBoundingClientRect().left;
                offsetY = e.clientY - boxes[y].getBoundingClientRect().top;
    console.log(offsetX,offsetY)       
	});
	document.querySelector(".items").addEventListener('mousemove', (e) => {
                if (!isDragging) return
				
                boxes[y].style.left = (e.clientX - offsetX) + 'px';
                boxes[y].style.top = (e.clientY - offsetY) + 'px';
            });
	document.addEventListener('mouseup', () => {
                isDragging = false;
            });
	
	})
	
		
		
	})