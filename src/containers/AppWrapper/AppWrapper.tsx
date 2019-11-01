import * as React from "react";
import Head from 'next/head';

import DynamicYoutubeBackground from "../../components/youtube-background";

import "./AppWrapper.styles.scss";

interface IAppWrapperProps {
    title?: string
}

interface IAppWrapperState {
    aspectRatio: string;
}

export class AppWrapper extends React.Component<IAppWrapperProps, IAppWrapperState> {

    state: IAppWrapperState = {
        aspectRatio: "16:9",
    }

    componentDidMount() {
        this.setAspectRatio();
    }

    private setAspectRatio = () => {
        let aspectRatio: string;
        if (window.outerHeight > window.outerWidth) {
            aspectRatio = "16:9"
        } else {
            const aspectRatioNumber = window.outerWidth / window.outerHeight;
            aspectRatio = `${window.outerWidth * aspectRatioNumber}:${window.outerHeight * aspectRatioNumber}`;
        }

        this.setState({ aspectRatio });
    }

    render() {
        const { children, title } = this.props;

        return (
            <>
                <Head>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="wrapper">
                    <DynamicYoutubeBackground
                        videoId={"4UzZk6wCeQM"}
                        overlay={"rgba(0,0,0,0.8)"}
                        className={"background-video"}
                        aspectRatio={this.state.aspectRatio}
                    >
                        <div className="App">
                            {children}
                        </div>
                    </DynamicYoutubeBackground>
                </div>
            </>
        );
    }
}