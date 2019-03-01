import * as React from 'react'
import Config from '@config/index'
import './IndexContent.less'
import Left from '@components/ContentIn/Left'
import Right from '@components/ContentIn/Right'

// interface IProps {
// 	type?: string;
// 	size?: string;
// 	onClick?: () => void;
// 	className?: string;
// 	style?: object;
// 	children?: React.ReactNode;
// }

const IndexContent = () => (
	<div className='index_content'>
		<Left
			project={Config.contentObj.project}
			name={Config.contentObj.name}
			description={Config.contentObj.description}
		/>
		<Right
			project={Config.contentObj.project}
			name={Config.contentObj.name}
			description={Config.contentObj.description}
		/>
		<Left
			project={Config.contentObj.project}
			name={Config.contentObj.name}
			description={Config.contentObj.description}
		/>
		<Right
			project={Config.contentObj.project}
			name={Config.contentObj.name}
			description={Config.contentObj.description}
		/>
		<Left
			project={Config.contentObj.project}
			name={Config.contentObj.name}
			description={Config.contentObj.description}
		/>
	</div>
)

export default IndexContent
