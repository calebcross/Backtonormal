import React from "react";

function Partially({ title }) {
	return (
		<div>
			<div className='card border-dark mb-3'>
				<div className='card-header svg'>{title}</div>
				<div className='d-flex justify-content-evenly'>
					<div className='card-body text-center text-warning'>
						<h4 className='card-title fw-bold'>2,000,000</h4>
						<p className='card-text '>persons</p>
					</div>
					<div className='card-body text-center text-warning'>
						<h4 className='card-title fw-bold'>14.23%</h4>
						<p className='card-text text-center'>of the population</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Partially;
