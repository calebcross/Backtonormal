import React from "react";
import CountUp from "react-countup";

function Fully({ title, data }) {
	const { Series_Complete_Yes, Series_Complete_Pop_Pct } = data.entry;

	return (
		<div className='fully'>
			<div className='card border-dark mb-3'>
				<div className='card-header card-header-vcenter text-uppercase'>
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
					<strong>{title}</strong>
				</div>
				<div className='d-flex justify-content-evenly flex-wrap'>
					<div className='card-body text-center '>
						<h4 className='card-title display-6'>

								{!Series_Complete_Yes
									? 0
									: Series_Complete_Yes.toLocaleString()}
						</h4>
						<p className='card-text fw-bold '>
							<strong>people</strong>
						</p>
					</div>
					<div className='card-body text-center'>
						<h4 className='card-title display-6 monts'>
								{
									<CountUp
										suffix={"%"}
										decimals={
											!Series_Complete_Yes
												? 0
												: Series_Complete_Pop_Pct.toString().length === 2
												? 0
												: 1
										}
										end={Series_Complete_Pop_Pct}
									/>
								}
						</h4>
						<p className='card-text text-center'>
							<strong>of the population</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Fully;
