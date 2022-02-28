import React from 'react';
import {
	Link
  } from "react-router-dom";
import {ShowNum} from 'rollup-ts-num';
import Three from '../threes/index';

import {deBounce} from '../../../test/debounce';
import {throttle} from '../../../test/throttle'
import {setTime} from '../../../test/interVal'


const demo = () =>{

	const getClick = deBounce(()=>{
		console.info('test');
	},3000);

	const getThrottleClick = throttle(()=>{
		console.info('节流')
	},5000);

	const time = () =>{
		setTime(()=>{console.info('时间:',new Date())})
	}

	return(
		<>
		<div>这里是rolluo-ts-num（12.12 取整）：{ShowNum(12.12)}</div>
		<button onClick={getClick}>防抖按钮测试</button>
		<button onClick={getThrottleClick}>节流按钮测试</button>
		<button onClick={time}>🧮</button>
			<Link to='/3d'>按钮🔘</Link>
		</>
	);

};
export default demo;
