import React from "react";


function Atleast({ title, data }) {
	const {
		Administered_Dose1_Recip,
		Administered_Dose1_Pop_Pct,
	} = data.entry;

	return (
		<div className='card border-dark  purple stacks'>
			<div className='card-header card-header-vcenter text-capitalize stacks-header '>
				<svg
					aria-hidden='true'
					focusable='false'
					data-prefix='fas'
					data-icon='syringe'
					className='svg-inline--fa fa-syringe fa-w-16'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'>
					<path
						fill='currentColor'
						d='M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z'></path>
				</svg>
				<h5 className='title'>{title}</h5>
			</div>
			<div className='d-flex justify-content-evenly inner_container'>
				<div className='card-body text-center card-inner '>
					<h4 className='card-title '>
						{!Administered_Dose1_Recip
							? "N/A"
							: Administered_Dose1_Recip.toLocaleString()}
					</h4>
					<p className='card-text fw-bold'>
						<strong>people</strong>
					</p>
				</div>
				<div className='card-body text-center card-inner'>
					<h4 className='card-title '>
						{Number.parseFloat(Administered_Dose1_Pop_Pct).toPrecision(3)}%
					</h4>
					<p className='card-text text-center fw-bold '>
						of the population
						{/* <svg aria-hidden="true" className="svg-small" focusable="false" data-prefix="fas" data-icon="info" className="svg-inline--fa fa-info fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>*/}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Atleast;
