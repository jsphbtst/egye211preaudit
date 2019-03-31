import React from 'react';
import AC1 from '../../static/ac/AC1.jpg';
import AC2 from '../../static/ac/AC2.jpg';
import AC3 from '../../static/ac/AC3.jpg';
import AC4 from '../../static/ac/AC4.jpg';
import AC5 from '../../static/ac/AC5.jpg';
import AC6 from '../../static/ac/AC6.jpg';
import AC7 from '../../static/ac/AC7.jpg';
import AC8 from '../../static/ac/AC8.jpg';
import AC9 from '../../static/ac/AC9.jpg';
import AC10 from '../../static/ac/AC10.jpg';
import AC11 from '../../static/ac/AC11.jpg';
import AC12 from '../../static/ac/AC12.jpg';

import EP1  from '../../static/breaker/EP1.jpg';
import EP2  from '../../static/breaker/EP2.jpg';
import EP3  from '../../static/breaker/EP3.jpg';
import EP4  from '../../static/breaker/EP4.jpg';
import EP5  from '../../static/breaker/EP5.jpg';

import BAG1 from '../../static/bag counter/BAG1.jpg';
import BAG2 from '../../static/bag counter/BAG2.jpg';
import BAG3 from '../../static/bag counter/BAG3.jpg';
import BAG4 from '../../static/bag counter/BAG4.jpg';

import BAG1FP from '../../static/bag counter/BAG1FP.jpg';
import BAG2FP from '../../static/bag counter/BAG2FP.jpg';
import BAG3FP from '../../static/bag counter/BAG3FP.jpg';
import BAG4FP from '../../static/bag counter/BAG4FP.jpg';

import BOOKSHELF1 from '../../static/bookshelf/BOOKSHELF1.jpg';
import BOOKSHELF2 from '../../static/bookshelf/BOOKSHELF2.jpg';
import BOOKSHELF3 from '../../static/bookshelf/BOOKSHELF3.jpg';
import BOOKSHELF4 from '../../static/bookshelf/BOOKSHELF4.jpg';
import BOOKSHELF5 from '../../static/bookshelf/BOOKSHELF5.jpg';
import BOOKSHELF6 from '../../static/bookshelf/BOOKSHELF6.jpg';
import BOOKSHELF7 from '../../static/bookshelf/BOOKSHELF7.jpg';
import BOOKSHELF8 from '../../static/bookshelf/BOOKSHELF8.jpg';

import PC1 from '../../static/computer/PC1.jpg';
import PC2 from '../../static/computer/PC2.jpg';
import PC3 from '../../static/computer/PC3.jpg';
import PC4 from '../../static/computer/PC4.jpg';
import PC5 from '../../static/computer/PC5.jpg';
import PC6 from '../../static/computer/PC6.jpg';
import TABLE1 from '../../static/round tables/TABLE1.jpg';
import TABLE1FP from '../../static/round tables/TABLE1FP.jpg';


export const renderAC = () => {
	const AC = [AC1, AC2, AC3, AC4, AC5, AC6, AC7, AC8, AC9, AC10, AC11, AC12];
	const imageList = AC.reduce((a,b,i) => {
		a.push(
			<div key={`${b}-${i}`}>
				<img src={b} alt="ac"/>
			</div>
		);
		return a;
	}, []);
	return imageList;
};

export const renderBreaker = () => {
	const EP = [EP1, EP2, EP3, EP4, EP5];
	const imageList = EP.reduce((a,b,i) => {
		a.push(
			<div key={`${b}-${i}`}>
				<img src={b} alt="ep"/>
			</div>
		);
		return a;
	}, []);
	return imageList;
};

export const renderBag = () => {
	const BAG = [BAG1, BAG2, BAG3, BAG4, BAG1FP, BAG2FP, BAG3FP, BAG4FP];
	const imageList = BAG.reduce((a,b,i) => {
		a.push(
			<div key={`${b}-${i}`}>
				<img src={b} alt="bag"/>
			</div>
		);
		return a;
	}, []);
	return imageList;
};

export const renderBook = () => {
	const BOOKSHELF = [BOOKSHELF1, BOOKSHELF2, BOOKSHELF3, BOOKSHELF4, BOOKSHELF5, BOOKSHELF6,BOOKSHELF7, BOOKSHELF8];
	const imageList = BOOKSHELF.reduce((a,b,i) => {
		a.push(
			<div key={`${b}-${i}`}>
				<img src={b} alt="books"/>
			</div>
		);
		return a;
	}, []);
	return imageList;
};

export const renderPC = () => {
	const PC = [PC1, PC2, PC3, PC4, PC5, PC6];
	const imageList = PC.reduce((a,b,i) => {
		a.push(
			<div key={`${b}-${i}`}>
				<img src={b} alt="pc"/>
			</div>
		);
		return a;
	}, []);
	return imageList;
};

export const renderTable = () => {
	const TABLE = [TABLE1, TABLE1FP];
	const imageList = TABLE.reduce((a,b,i) => {
		a.push(
			<div key={`${b}-${i}`}>
				<img src={b} alt="table"/>
			</div>
		);
		return a;
	}, []);
	return imageList;
};


