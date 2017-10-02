// elements to add animation
var animationElements={
	'.screen1':[ '.screen1_header',
				'.screen1_phone',
				'.screen1_shadow'],

	'.screen2':[ '.screen2_header',
				'.screen2_subheader',
				'.screen2_phone',
				'.screen2_feature-1',
				'.screen2_feature-2',
				'.screen2_feature-3'],

	'.screen3':['.screen3_header',
				'.screen3_subheader',
				'.screen3_phone',
				'.screen3_feature'],

	'.screen4':['.screen4_header',
				'.screen4_subheader',
				'.screen4_phonebox-phone1',
				'.screen4_phonebox-phone2',
				'.screen4_phonebox-phone3',
				'.screen4_phonebox-phone4'],

	'.screen5':['.screen5_header',
				'.screen5_subheader',
				'.screen5_image']
}

// set function for various purposes

var getElem=function(cls){
	return document.querySelector(cls);
}

var getAllElem=function(cls){
	return document.querySelectorAll(cls);
}

var addCls=function(elemCls,cls){
	var target=getElem(elemCls),
		originCls=target.getAttribute("class");
		if(originCls==null){
			target.setAttribute("class",cls);
			return;
		}else if(originCls.indexOf(cls)>-1){
			return;
		}else{
			target.setAttribute("class",originCls+" "+cls);
			return;
		}
}

var replaceCls=function(target,cls1,cls2){
	var current=getElem(target).getAttribute("class");
	var newCls=current.replace(cls1,cls2);
	getElem(target).setAttribute("class",newCls);
}

var removeCls=function(target,cls){
	var current=target.getAttribute("class");
	if (current.indexOf(cls)>-1){
		newCls=current.split(cls).join(' ').replace(/\s+/,' ');
		target.setAttribute("class",newCls);
	}
}

// function for setting animation class name

function setAnim(screenCls){
	var screen=getElem(screenCls);
	var elemToBeSet=animationElements[screenCls];
	for(i=0;i<elemToBeSet.length;i++){
		addCls(elemToBeSet[i],elemToBeSet[i].substr(1)+'-anim-init');
	}
}

for (k in animationElements){
	setAnim(k);
}

// function for play animation

function play(screenCls){
	var screen=getElem(screenCls);
	var elemToBeSet=animationElements[screenCls];
	for(i=0;i<elemToBeSet.length;i++){
		replaceCls(elemToBeSet[i],'init','done');
	}

}


// screen1 autoplay

setTimeout(function(){
	play('.screen1');
},300);


var navItem=getAllElem('.header_nav-item'),
	asideItem=getAllElem('.aside-item');

window.onscroll=function(){
	var scroll=document.body.scrollTop || document.documentElement.scrollTop;
	console.log(scroll,window.innerHeight,document.body.scrollHeight);

// change header

	var headerItem=getAllElem('.header_nav-item');
	if (scroll>60){
		addCls('header','header-black');
		getElem('aside').style.display='block';
		}
	 else {
		getElem('header').removeAttribute('class');
		getElem('aside').style.display='none';
	}

// change side bar

	if (scroll>400){
		getElem('aside').style.opacity='1';
	} else {
		getElem('aside').style.opacity='0';
	}

// play on scroll

	if(scroll + 20 + window.innerHeight >= document.body.scrollHeight){
		play('.screen2');
		play('.screen3');
		play('.screen4');
		play('.screen5');
	}else if(scroll>500 && scroll<1200){
		play('.screen2');
	}else if (scroll>1200 && scroll<2000){
		play('.screen3');
	}else if (scroll>2000 && scroll<2700){
		play('.screen4');
	}else if (scroll>2700){
		play('.screen5');
	}

	// navigation bar & underline and side bar sync 
	
	function setLinePos(left){
		getElem('.header_nav-item-underline').style.left=left*120+'px';
	}

	var setActive=function(index,obj,cls){
		var originCls=obj[index].getAttribute("class");
		
		if(originCls.indexOf(cls)>-1){
			return;
		}else{
			obj[index].setAttribute("class",originCls+" "+cls);
			return;
		}
	}


	if (scroll<500){
		for(i=0;i<navItem.length;i++){
			removeCls(navItem[i],'header_nav-item-active');
			removeCls(asideItem[i],'aside-item-active')
		}
		setActive(0,navItem,'header_nav-item-active');
		setActive(0,asideItem,'aside-item-active');
		setLinePos(0);
	}else if(scroll>500 && scroll<1200){
		for(i=0;i<navItem.length;i++){
			removeCls(navItem[i],'header_nav-item-active');
			removeCls(asideItem[i],'aside-item-active')
		}
		setActive(1,navItem,'header_nav-item-active');
		setActive(1,asideItem,'aside-item-active');
		setLinePos(1);
	}else if (scroll>1200 && scroll<2000){
		for(i=0;i<navItem.length;i++){
			removeCls(navItem[i],'header_nav-item-active');
			removeCls(asideItem[i],'aside-item-active')
		}
		setActive(2,navItem,'header_nav-item-active');
		setActive(2,asideItem,'aside-item-active');
		setLinePos(2);
	}else if (scroll>2000 && scroll<2700){
		for(i=0;i<navItem.length;i++){
			removeCls(navItem[i],'header_nav-item-active');
			removeCls(asideItem[i],'aside-item-active')
		}
		setActive(3,navItem,'header_nav-item-active');
		setActive(3,asideItem,'aside-item-active');
		setLinePos(3);
	}else if (scroll>2700){
		for(i=0;i<navItem.length;i++){
			removeCls(navItem[i],'header_nav-item-active');
			removeCls(asideItem[i],'aside-item-active')
		}
		setActive(4,navItem,'header_nav-item-active');
		setActive(4,asideItem,'aside-item-active');
		setLinePos(4);
	}
}

	// navi bar and side bar click function
	
	function naviAndSide(){

		var setScroll=function(top){
			document.body.scrollTop=top;
			document.documentElement.scrollTop=top;
		}

		navItem[0].onclick=function(){
			setScroll(0);
		}
		asideItem[0].onclick=function(){
			setScroll(0);
		}
		navItem[1].onclick=function(){
			setScroll(685);
		}
		asideItem[1].onclick=function(){
			setScroll(685);
		}
		navItem[2].onclick=function(){
			setScroll(1450);
		}
		asideItem[2].onclick=function(){
			setScroll(1450);
		}
		navItem[3].onclick=function(){
			setScroll(2150);
		}
		asideItem[3].onclick=function(){
			setScroll(2150);
		}
		navItem[4].onclick=function(){
			setScroll(2850);
		}
		asideItem[4].onclick=function(){
			setScroll(2850);
		}
	}

	naviAndSide();

// navi bar sliding underline

function slider(){
	var bar=getElem('.header_nav-item-underline');
	for (i=0;i<navItem.length;i++){
		(function(x){navItem[x].onmouseover=function(){
				bar.style.left=x*120+'px';
			}
		})(i);
	}

	for (i=0;i<navItem.length;i++){
		navItem[i].onmouseout=function(){
			for(i=0;i<navItem.length;i++){
				var itemCls=navItem[i].getAttribute('class');
				if(itemCls.indexOf('header_nav-item-active')>-1){
					bar.style.left=i*120+'px';
					break;
				}
			}
		}
	}
}


slider();