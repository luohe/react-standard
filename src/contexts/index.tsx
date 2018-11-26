import React from 'react';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withContext<S extends any>(Context: React.Context<S>) {
    return function <P extends S>(Component: React.ComponentType<P>) {
        return function (props: Omit<P, keyof S>) {
            return <Context.Consumer>{
                (data: S) => <Component {...{ ...props as any, ...data as any }} />
            }</Context.Consumer>
        };
    };
}

// TODO 下面的写法是尝试兼容decorator，但是失败了，有时间再尝试

// export const withLoadingContext = () => {
//     return function <P extends LoadingState, S>(Component: React.ComponentClass<P, S>) {
//         return class extends React.Component<Omit<P, keyof LoadingState>, S> {
//             public render() {
//                 return <LoadingContext.Consumer>{
//                     (data) => <Component {...{ ...this.props as any, ...data }} />
//                 }</LoadingContext.Consumer>;
//             }
//         };
//     };
// }

// export function withLoadingContext() {
//     return function <P>(Component: React.ComponentType<P>) {
//         if (typeof Component === "function") {
//             return function (props: P) {
//                 return <LoadingContext.Consumer>{
//                     ({ isShow, show, dissmiss }) => (<Component {...{ ...props as any, show, dissmiss, isShow }} />)
//                 }</LoadingContext.Consumer>;
//             };
//         } else {
//             return class extends React.Component<P> {
//                 render() {
//                     return <LoadingContext.Consumer>{
//                         ({ isShow, show, dissmiss }) => (<Component {...{ ...this.props as any, show, dissmiss, isShow }} />)
//                     }</LoadingContext.Consumer>;
//                 }

//             };
//         }
//     };
// }

// export function withLoadingContext() {
//     return function <P, C extends React.ComponentType<P>>(Component: C){
//         return function (props: P) {
//             return (<LoadingContext.Consumer>{({ isShow, show, dissmiss }) => <Component {...{ ...props as any, show, dissmiss, isShow }} />}</LoadingContext.Consumer>);
//         };
//     };
// }

/** 添加Loading到props中 */
// export const withLoadingContext: () => HOC<LoadingState> = () => {
//     return function <P extends LoadingState, S>(Component: React.ComponentClass<P, S>) {
//         return class extends React.Component<Omit<P, keyof LoadingState>, S> {
//             public render() {
//                 return <LoadingContext.Consumer>{
//                     (data) => <Component {...{ ...this.props as any, ...data }} />
//                 }</LoadingContext.Consumer>;
//             }
//         };
//     };
// }