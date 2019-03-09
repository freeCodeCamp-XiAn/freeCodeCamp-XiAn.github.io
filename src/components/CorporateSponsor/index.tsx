import * as React from 'react'
import Config from '@config/index'
import './index.less'
import Title from '@components/Title'

export default ( ) => (

	<div>
		{
			Config.corporateSponsor.map((objs, i) => {
				if (objs.colNum > 1) {
					 return <div className='pat2r' key={i.toString()}>
						<Title title={objs.title} />
						<div className='blockbox imgbox'>
							{objs.imgs.map( (item, j) => <img key={j.toString()} src={item.url} alt='图片加载失败' className = {item.className} />							
							)}
						</div>
					</div>
				} else {
					return <div className='pat2r' key={i.toString()}>
						<Title title={objs.title} />
						<div className='blockbox flexCol'>
						{objs.imgs.map( (item, j) => <img key={j.toString()} src={item.url} alt='图片加载失败' className = {item.className} />							
							)}
						</div>
					</div>
				}
			})
		}
	</div>
)

