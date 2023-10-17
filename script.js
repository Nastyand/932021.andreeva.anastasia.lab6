function Right(){
	const cat = document.querySelector('.cat');
	const cat_img = document.querySelector('.cat_img');
	const dog = document.querySelector('.dog');
	const dog_img = document.querySelector('.dog_img');
	cat.style.zIndex = '0';
	cat_img.style.marginLeft = '50px';
	dog.style.width = '540px';
	dog_img.style.width = '390px';
	dog.style.left = '30px';
}

function Left(){
	const cat = document.querySelector('.cat');
	const cat_img = document.querySelector('.cat_img');
	const dog = document.querySelector('.dog');
	const dog_img = document.querySelector('.dog_img');
	cat.style.zIndex = '20';
	cat_img.style.marginLeft = '10px';
	cat.style.width = '540px';
	cat_img.style.width = '390px';
	dog.style.width = '540px';
	dog_img.style.width = '390px';
	dog.style.left = '30px';
}

function Both(){
	const cat = document.querySelector('.cat');
	const dog = document.querySelector('.dog');
	const cat_img = document.querySelector('.cat_img');
	const dog_img = document.querySelector('.dog_img');
	cat.style.width = '285px';
	dog.style.width = '285px';
	dog.style.left = '285px';
	cat_img.style.width = '265px';
	dog_img.style.width = '265px';
	cat_img.style.marginLeft = '10px';
}