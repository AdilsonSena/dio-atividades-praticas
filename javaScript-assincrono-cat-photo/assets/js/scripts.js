const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
		const data = await fetch(BASE_URL)
		.then((res) => res.json())
		.catch((e) => console.log(e));
	return data.url;
};

const loadImg = async () => {
	const catImg = document.getElementsById('cat');
	catImg.src = await getCats();
};

 	catBtn.addEventListener('click', loadImg);

	loadImg();

	// Dando erro verificar dps.
