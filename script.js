import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circlemousefollower(){
 window.addEventListener("mousemove", function(dets){
    console.log(dets.clientX, dets.clientY);
 })   
}