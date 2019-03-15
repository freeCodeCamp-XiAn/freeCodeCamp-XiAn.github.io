import * as React from 'react'
import './index.less'

interface Image {
    url: string,
    className: string
}

interface Info {
    colNum: number,
    imgs: Image[]
}

interface IProps {
    data: Info
}

export default class Organization extends React.Component<IProps, any> {
	constructor(props: IProps) {
		super(props)
    }
    
    getImage(imgs: Image[]) {
        return (
            imgs.map((item, i) => (
                <img
                    key={i.toString()}
                    src={item.url}
                    alt="图片加载失败"
                    className={item.className}
                />
            ))
        )
    }

	render() {
		return (
			<div className="pat2r">
				<div className={`blockbox ${this.props.data.colNum > 1 ? 'imgbox' : 'flexCol'}`}>
					{this.getImage(this.props.data.imgs)}
				</div>
			</div>
		)
	}
}
