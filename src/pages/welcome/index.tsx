import React from 'react';
import { NavLink } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import './welcome.scss'

export default function Welcome() {

	return (<>
		<Header></Header>
		<div className="welcome mb-5">
			<div className="welcome row" style={{flexDirection: 'column',alignItems: 'center'}}>
				<img src="https://i.postimg.cc/Lsxrbz02/Logo-2.png" className='welcome img' />
				<div className="text-center">
					<h1 className='welcome title'>A gift with a story</h1>
				</div>
				<div className="text-center">
					<h4 className='welcome description' >
						DemeterGift creates the most easy, transparent and fun NFT charity auction
						on Web3
					</h4>
				</div>
				<div className="Welcome DonateBTN col">
					<NavLink to="/donation">
						<div style={{
						background: 'rgb(236, 201, 0)',
						textAlign: 'center',
						cursor: 'pointer',
						height: '58px',
						display: 'flex',
						fontSize: '20px',
						color: 'white',
						alignItems: 'center',
						borderRadius: '5px',
						justifyContent: 'center',
						margin: '0px'
						}} className="card card-body">
							<div >Let’s donate!</div>
						</div>
					</NavLink>
				</div>
			</div>

			<div className="Event row"> 
				<img style={{padding: '0px',width: '-webkit-fill-available',height: '96%' }} src="https://svgshare.com/i/hY6.svg" />
				<img style={{ "position": "absolute", "bottom": "0" }} src="https://svgshare.com/i/hYe.svg" />
				<img style={{padding: '0px',position: 'absolute',width: '61%',marginTop: '10%'}} src="https://svgshare.com/i/hYz.svg" />
				<div className="welcome card-body EventBTN">
					<NavLink to="/CreateEvents">
						<span>
							Start event
						</span>
					</NavLink>
				</div>
			</div>
		</div>
	</>

	);
}