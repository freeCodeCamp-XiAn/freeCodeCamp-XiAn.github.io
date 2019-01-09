import * as React from 'react'

export interface ISampleWidgetProps {
    name: string
}

export class SampleWidget extends React.Component<ISampleWidgetProps, {}> {
    render() {
        return <div><h1>Hello {this.props.name}</h1></div>
    }
}