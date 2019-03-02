import * as React from 'react'
import Config from '@config/index'
import './index.less'
import Content from '@components/Content'


const IndexContent = ({ isPhone}) => (
	<div className='content'>
		{Config.contents.map(content => {
			if (isPhone) {
				return <Content key={Math.random()} project={content.project} name={content.name} description={content.description} style={{flexDirection: 'column'}} />
			} else {
				return <Content key={Math.random()} project={content.project} name={content.name} description={content.description} style={{flexDirection: (content.isImgLeft ? 'row' : 'row-reverse')}} isImgLeft={content.isImgLeft} />
			}
		})}
	</div>
)

export default IndexContent
