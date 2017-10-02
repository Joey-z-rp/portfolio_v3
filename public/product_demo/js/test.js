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

var addCls=function(elemCls,cls){
	var target=getElem(elemCls),
		originCls=target.getAttribute("class");
	target.setAttribute("class",originCls+" "+cls);
}

var replaceCls=function(target,cls1,cls2){
	var current=getElem(target).getAttribute("class");
	var newCls=current.replace(cls1,cls2);
	getElem(target).setAttribute("class",newCls);
}

// function for setting animation class name

function setAnim(screenCls){
	var screen=getElem(screenCls);
	var elemToBeSet=animationElements[screenCls];
	var isClsSet=false;
	var isAnimDone=false;

	screen.onclick=function(){
		// set animation class
		if(isClsSet===false){
			for(i=0;i<elemToBeSet.length;i++){
				addCls(elemToBeSet[i],elemToBeSet[i].substr(1)+'-anim-init');
			}
			isClsSet=true;
			return;
		}

		// switch animation class
		if(isAnimDone===false){
			for(i=0;i<elemToBeSet.length;i++){
				replaceCls(elemToBeSet[i],'init','done');
			}
			isAnimDone=true;
			return;
		}

		if(isAnimDone===true){
			for(i=0;i<elemToBeSet.length;i++){
				replaceCls(elemToBeSet[i],'done','init');
			}
			isAnimDone=false;
			return;
		}

	}
	

}

for (k in animationElements){
	setAnim(k);
}

	