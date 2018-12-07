import * as React from "react";

export interface BasicProps {
}

export interface Basic<P extends BasicProps = BasicProps, S = {}, SS = any> extends React.Component<P, S, SS> {

}
